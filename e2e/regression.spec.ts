import { expect, test, type Page } from "@playwright/test";
import { site } from "../content/site";

const LINKEDIN = "https://www.linkedin.com/in/ariellawolpin";
const PHOTOS = "https://photos.ariella.website/";
const COPYRIGHT = /All photographs © \d{4} Ariella Wolpin/;

const mobile = { width: 390, height: 844 };

const STICKY_TEXT = "This website is a work in progress! Check back soon...";
const LAST_UPDATED = new RegExp(`last updated:?\\s*${site.lastUpdated}`, "i");

/** The inner-page header: Home link plus a Main nav with Projects and Résumé only. */
async function expectSiteHeader(page: Page) {
  const header = page.getByRole("banner");
  await expect(header.getByRole("link", { name: /^Home/ })).toHaveAttribute(
    "href",
    "/",
  );
  const nav = header.getByRole("navigation", { name: "Main" });
  await expect(nav.getByRole("link", { name: "Projects" })).toHaveAttribute(
    "href",
    "/projects",
  );
  await expect(nav.getByRole("link", { name: "Résumé" })).toHaveAttribute(
    "href",
    "/resume.pdf",
  );
  await expect(nav.getByRole("link")).toHaveCount(2);
  await expect(nav.getByRole("link", { name: "LinkedIn" })).toHaveCount(0);
}

async function expectNoSiteHeader(page: Page) {
  await expect(page.getByRole("link", { name: /^Home/ })).toHaveCount(0);
  await expect(page.locator(".site-head")).toHaveCount(0);
}

async function expectNoHorizontalScroll(page: Page) {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  expect(overflow).toBeLessThanOrEqual(0);
}

async function expectResumeDialog(page: Page) {
  const dialog = page.getByRole("dialog", { name: "Resume" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("link", { name: "Download PDF" })).toHaveAttribute(
    "href",
    "/resume.pdf",
  );
  await expect(dialog.getByText("Personal Sabbatical")).toBeVisible();
  await expect(dialog.locator('a[href^="mailto:"]')).toHaveCount(0);
  return dialog;
}

/** No desk photos, prints, or lightbox on the wood home. */
async function expectNoDeskPhotos(page: Page) {
  await expect(page.locator(".home-shot")).toHaveCount(0);
  await expect(
    page.locator('img[src*="/photos/"], img[src*="%2Fphotos%2F"]'),
  ).toHaveCount(0);
}

async function expectHomeSticky(page: Page) {
  const sticky = page.locator(".home-sticky");
  await expect(sticky).toBeVisible();
  await expect(sticky).toContainText(STICKY_TEXT);
  await expect(sticky).toContainText(LAST_UPDATED);
}

test.describe("home", () => {
  test("shows the name, the notebook tapes, and no inner header", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1, name: "Ariella Wolpin" }),
    ).toBeVisible();

    const nav = page.getByRole("navigation", { name: "Main" });
    await expect(nav.getByRole("link")).toHaveCount(3);
    await expect(nav.locator(".tape")).toHaveCount(3);
    await expect(nav.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
    await expect(nav.getByRole("link", { name: "Résumé" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Résumé" })).toHaveAttribute(
      "href",
      "/resume.pdf",
    );
    const linkedIn = nav.getByRole("link", { name: "LinkedIn" });
    await expect(linkedIn).toHaveAttribute("href", site.linkedIn);
    await expect(linkedIn).toHaveAttribute("target", "_blank");

    await expectNoSiteHeader(page);
    await expect(page.getByText(COPYRIGHT)).toBeVisible();
  });

  test("shows the notebook cover label and the work-in-progress sticky", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.locator(".cover-book")).toBeVisible();
    for (const text of [site.cover.name, site.cover.subject, site.cover.also]) {
      await expect(page.getByText(text, { exact: true })).toBeVisible();
    }
    await expectHomeSticky(page);
  });

  test("has no desk photos and no lightbox", async ({ page }) => {
    await page.goto("/");
    await expectNoDeskPhotos(page);
    await expect(page.getByRole("main").getByRole("button")).toHaveCount(0);
  });

  test("Projects tape goes to /projects", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Main" })
      .getByRole("link", { name: "Projects" })
      .click();
    await expect(page).toHaveURL("/projects");
    await expect(
      page.getByRole("heading", { level: 1, name: "Projects" }),
    ).toBeVisible();
  });

  test("Résumé tape opens the résumé dialog without leaving the page", async ({
    page,
  }) => {
    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Main" })
      .getByRole("link", { name: "Résumé" })
      .click();
    const dialog = await expectResumeDialog(page);
    await expect(page).toHaveURL("/");

    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
  });

  test("Résumé tape uses the dymo-resume photo", async ({ page }) => {
    await page.goto("/");
    const resume = page
      .getByRole("navigation", { name: "Main" })
      .getByRole("link", { name: "Résumé" });
    await expect(resume.locator("img.tape__photo")).toHaveAttribute(
      "src",
      /dymo-resume/,
    );
  });

  test("every tape photo loads and marks its tape as loaded", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("load");
    const photos = page.locator("img.tape__photo");
    const count = await photos.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const photo = photos.nth(i);
      await expect
        .poll(() =>
          photo.evaluate((img: HTMLImageElement) =>
            img.complete ? img.naturalWidth : 0,
          ),
        )
        .toBeGreaterThan(0);
      await expect
        .poll(() =>
          photo.evaluate(
            (img) => img.closest(".tape")?.getAttribute("data-photo") ?? null,
          ),
        )
        .toBe("loaded");
    }
  });

  test("Résumé tape falls back to live text when its photo fails", async ({
    page,
  }) => {
    await page.route("**/textures/dymo-resume.png", (route) => route.abort());
    await page.goto("/");
    const resume = page
      .getByRole("navigation", { name: "Main" })
      .getByRole("link", { name: "Résumé" });
    await expect(resume).toBeVisible();
    await expect(resume).toHaveClass(/\btape\b/);
    await expect(resume).not.toHaveAttribute("data-photo", "loaded");
    await expect(resume.getByText("Résumé", { exact: true })).toBeVisible();
  });
});

test.describe("mobile 390x844", () => {
  test.use({ viewport: mobile });

  test("home shows the notebook, sticky, three tapes, no desk photos, no horizontal scroll", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.locator(".cover-book")).toBeVisible();
    await expectHomeSticky(page);
    const nav = page.getByRole("navigation", { name: "Main" });
    for (const name of ["Projects", "Résumé", "LinkedIn"]) {
      await expect(nav.getByRole("link", { name })).toBeVisible();
    }
    await expectNoDeskPhotos(page);
    await expectNoHorizontalScroll(page);
  });

  test("home résumé tape opens the dialog", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Main" })
      .getByRole("link", { name: "Résumé" })
      .click();
    await expectResumeDialog(page);
  });

  for (const path of ["/projects", "/contact", "/editions"]) {
    test(`${path} header shows Home, Projects, Résumé with no horizontal scroll`, async ({
      page,
    }) => {
      await page.goto(path);
      const header = page.getByRole("banner");
      await expect(header.getByRole("link", { name: /^Home/ })).toBeVisible();
      const nav = header.getByRole("navigation", { name: "Main" });
      await expect(nav.getByRole("link", { name: "Projects" })).toBeVisible();
      await expect(nav.getByRole("link", { name: "Résumé" })).toBeVisible();
      await expectNoHorizontalScroll(page);
    });
  }
});

test.describe("inner header", () => {
  test("on /projects, Projects is the current page", async ({ page }) => {
    await page.goto("/projects");
    await expectSiteHeader(page);
    const nav = page.getByRole("banner").getByRole("navigation", { name: "Main" });
    await expect(nav.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    await expect(nav.getByRole("link", { name: "Résumé" })).not.toHaveAttribute(
      "aria-current",
      /.*/,
    );
  });

  test("on /contact, nothing in the nav is current", async ({ page }) => {
    await page.goto("/contact");
    await expectSiteHeader(page);
    const nav = page.getByRole("banner").getByRole("navigation", { name: "Main" });
    await expect(nav.locator("[aria-current]")).toHaveCount(0);
  });

  test("Home link goes back to /", async ({ page }) => {
    await page.goto("/projects");
    await page.getByRole("banner").getByRole("link", { name: /^Home/ }).click();
    await expect(page).toHaveURL("/");
    await expect(
      page.getByRole("heading", { level: 1, name: "Ariella Wolpin" }),
    ).toBeVisible();
  });

  test("header Résumé opens the résumé dialog", async ({ page }) => {
    await page.goto("/projects");
    await page
      .getByRole("banner")
      .getByRole("link", { name: "Résumé" })
      .click();
    await expectResumeDialog(page);
    await expect(page).toHaveURL("/projects");
  });

  test("inner pages show the photo copyright footer", async ({ page }) => {
    await page.goto("/projects");
    await expect(page.getByRole("contentinfo")).toContainText(COPYRIGHT);
  });
});

test.describe("projects", () => {
  test("lists the three project cards", async ({ page }) => {
    await page.goto("/projects");
    await expect(
      page.getByRole("heading", { level: 1, name: "Projects" }),
    ).toBeVisible();
    for (const name of ["Trial & Eclair", "This website", "More coming soon"]) {
      await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
    }
    await expect(page.getByText("Placeholder until repos")).toHaveCount(0);
  });

  test("This website card links to /editions", async ({ page }) => {
    await page.goto("/projects");
    const card = page.getByRole("link", { name: /This website/ });
    await expect(card).toHaveAttribute("href", "/editions");
    await card.click();
    await expect(page).toHaveURL("/editions");
  });
});

test("contact lists LinkedIn and the photography feed, no email", async ({
  page,
}) => {
  await page.goto("/contact");
  await expect(
    page.getByRole("heading", { level: 1, name: "Contact" }),
  ).toBeVisible();
  await expectSiteHeader(page);
  const main = page.getByRole("main");
  await expect(main.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute(
    "href",
    LINKEDIN,
  );
  await expect(
    main.getByRole("link", { name: /Photography feed/ }),
  ).toHaveAttribute("href", PHOTOS);
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
  await expect(page.getByText("hello@ariella.website")).toHaveCount(0);
  await expect(page.getByText("placeholders are intentional")).toHaveCount(0);
});

test.describe("editions", () => {
  test("index lists the frozen covers with the header", async ({ page }) => {
    await page.goto("/editions");
    await expectSiteHeader(page);
    await expect(
      page
        .getByRole("banner")
        .getByRole("link", { name: "Projects" }),
    ).toHaveAttribute("aria-current", "page");
    await expect(page.getByText("Mostly practice", { exact: true })).toBeVisible();
    await expect(page.getByText("Composition cover", { exact: true })).toBeVisible();
    await expect(page.getByText("Marble cover", { exact: true })).toBeVisible();
  });

  test("edition 0 keeps the site header", async ({ page }) => {
    await page.goto("/editions/0");
    await expectSiteHeader(page);
    await expect(
      page.getByRole("banner").getByRole("link", { name: "Projects" }),
    ).toHaveAttribute("aria-current", "page");
    await expect(
      page.getByRole("heading", { level: 1, name: "Mostly practice!" }),
    ).toBeVisible();
  });

  test("edition 1 is the frozen stylized cover", async ({ page }) => {
    await page.goto("/editions/1");
    await expectSiteHeader(page);
    await expect(page.getByText("Work in progress", { exact: true })).toBeVisible();
    await expect(page.getByText("This website", { exact: true })).toHaveCount(0);
    await expect(page.locator(".desk[data-cover='stylized']")).toBeVisible();
  });

  test("edition 2 is the frozen marble cover", async ({ page }) => {
    await page.goto("/editions/2");
    await expectSiteHeader(page);
    await expect(page.getByText("This website", { exact: true })).toBeVisible();
    await expect(page.getByText("is a work in", { exact: true })).toBeVisible();
    await expect(page.getByText("progress!", { exact: true })).toBeVisible();
    await expect(page.locator(".desk[data-cover='high-fidelity']")).toBeVisible();
  });
});

test("studio shows cover treatments, is not indexed, and has no site header", async ({
  page,
}) => {
  await page.goto("/studio");
  await expect(
    page.getByRole("heading", { level: 1, name: "Cover treatments" }),
  ).toBeVisible();
  await expect(page.getByText("Studio · not indexed")).toBeVisible();
  await expectNoSiteHeader(page);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
});

/** Shelby's 404. It has its own Home link, so the header is checked by class. */
async function expectShelbyNotFound(page: Page) {
  await expect(
    page.getByRole("heading", { level: 1, name: "Page not found" }),
  ).toBeVisible();
  const photo = page.locator(".not-found__photo");
  await expect(photo).toBeVisible();
  await expect(photo.locator("img")).toHaveAttribute("src", /shelby/);
  await expect(photo).toContainText("Shelby ate it");
  const home = page.getByRole("link", { name: "Home", exact: true });
  await expect(home).toHaveClass(/\bnot-found__home\b/);
  await expect(home).toHaveAttribute("href", "/");
  await expect(page.locator(".site-head")).toHaveCount(0);
  await expect(page.getByRole("banner")).toHaveCount(0);
}

test("an unknown url shows Shelby's not-found page", async ({ page }) => {
  const response = await page.goto("/not-a-page");
  expect(response?.status()).toBe(404);
  await expectShelbyNotFound(page);
});

test.describe("not-found at 390x844", () => {
  test.use({ viewport: mobile });

  test("shows Shelby with no horizontal scroll", async ({ page }) => {
    const response = await page.goto("/not-a-page");
    expect(response?.status()).toBe(404);
    await expectShelbyNotFound(page);
    await expectNoHorizontalScroll(page);
  });
});

for (const asset of [
  "/resume.pdf",
  "/textures/notebook-marble.jpg",
  "/editions/shelby.jpg",
  "/textures/wood-desk.jpg",
  "/textures/dymo-resume.png",
  "/photos/kitchen-light.jpg",
]) {
  test(`${asset} returns 200`, async ({ request }) => {
    const response = await request.get(asset);
    expect(response.status()).toBe(200);
  });
}
