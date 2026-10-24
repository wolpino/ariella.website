import { expect, test, type Page } from "@playwright/test";
import { deskPhotos } from "../content/photos";

const LINKEDIN = "https://www.linkedin.com/in/ariellawolpin";
const PHOTOS = "https://photos.ariella.website/";
const COPYRIGHT = /All photographs © \d{4} Ariella Wolpin/;

const mobile = { width: 390, height: 844 };

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
    await expect(linkedIn).toHaveAttribute("href", LINKEDIN);
    await expect(linkedIn).toHaveAttribute("target", "_blank");

    await expectNoSiteHeader(page);
    await expect(page.getByText(COPYRIGHT)).toBeVisible();
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

  test("desk photos open a lightbox that Escape closes, returning focus", async ({
    page,
  }) => {
    await page.goto("/");
    const photos = page.getByRole("main").getByRole("button");
    await expect(photos).toHaveCount(4);
    for (const photo of deskPhotos.slice(0, 4)) {
      await expect(
        page.getByRole("button", { name: new RegExp(photo.caption) }),
      ).toBeVisible();
    }

    const first = deskPhotos[0];
    const opener = page.getByRole("button", { name: new RegExp(first.caption) });
    await opener.click();

    const lightbox = page.getByRole("dialog", { name: first.caption });
    await expect(lightbox).toBeVisible();
    await expect(lightbox.getByRole("img", { name: first.alt })).toBeVisible();
    const more = lightbox.getByRole("link", { name: /photos\.ariella\.website/ });
    await expect(more).toHaveAttribute("href", PHOTOS);
    await expect(more).toHaveAttribute("target", "_blank");

    await page.keyboard.press("Escape");
    await expect(lightbox).toHaveCount(0);
    await expect(opener).toBeFocused();
  });

  test("lightbox Close button closes it", async ({ page }) => {
    await page.goto("/");
    const photo = deskPhotos[2];
    await page.getByRole("button", { name: new RegExp(photo.caption) }).click();
    const lightbox = page.getByRole("dialog", { name: photo.caption });
    await expect(lightbox).toBeVisible();
    await lightbox.getByRole("button", { name: /Close/ }).click();
    await expect(lightbox).toHaveCount(0);
  });
});

test.describe("mobile 390x844", () => {
  test.use({ viewport: mobile });

  test("home shows the three tapes, no desk photos, no horizontal scroll", async ({
    page,
  }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main" });
    for (const name of ["Projects", "Résumé", "LinkedIn"]) {
      await expect(nav.getByRole("link", { name })).toBeVisible();
    }
    // The prints are in the page but hidden at this width.
    const main = page.getByRole("main");
    await expect(main.getByRole("button", { includeHidden: true })).toHaveCount(4);
    await expect(main.getByRole("button")).toHaveCount(0);
    for (const photo of deskPhotos.slice(0, 4)) {
      await expect(
        page.getByRole("button", { name: new RegExp(photo.caption), includeHidden: true }),
      ).toBeHidden();
    }
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

test("an unknown url shows a neutral not-found page", async ({ page }) => {
  const response = await page.goto("/not-a-page");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { level: 1, name: "Page not found" }),
  ).toBeVisible();
  await expect(page.getByText("This page isn't in the notebook")).toHaveCount(0);
  await expectNoSiteHeader(page);
  await expect(page.getByRole("link", { name: "Back home" })).toHaveAttribute(
    "href",
    "/",
  );
});

for (const asset of [
  "/resume.pdf",
  "/textures/notebook-marble.jpg",
  "/editions/shelby.jpg",
  ...deskPhotos.map((photo) => photo.src),
  "/photos/kitchen-light.jpg",
]) {
  test(`${asset} returns 200`, async ({ request }) => {
    const response = await request.get(asset);
    expect(response.status()).toBe(200);
  });
}
