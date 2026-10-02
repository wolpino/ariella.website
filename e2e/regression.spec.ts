import { expect, test, type Page } from "@playwright/test";

async function expectHeader(page: Page) {
  const header = page.getByRole("banner");
  await expect(
    header.getByRole("link", { name: "Ariella Wolpin" }),
  ).toBeVisible();
  await expect(header.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(header.getByRole("link", { name: "Projects" })).toBeVisible();
  await expect(header.getByRole("link", { name: "Contact" })).toBeVisible();
  await expect(
    header.getByRole("button", { name: "Professional" }),
  ).toBeVisible();
  await expect(header.getByRole("button", { name: "Fun" })).toBeVisible();
}

test("home without a theme cookie shows the professional line and header", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByText("Design, photography, and code")).toBeVisible();
  await expectHeader(page);
});

for (const theme of ["professional", "fun"] as const) {
  test.describe(`cookie ariella-theme=${theme}`, () => {
    test.beforeEach(async ({ context, baseURL }) => {
      await context.addCookies([
        {
          name: "ariella-theme",
          value: theme,
          url: baseURL ?? "http://127.0.0.1:3000",
        },
      ]);
    });

    test("projects and contact keep their titles and the header", async ({
      page,
    }) => {
      await page.goto("/projects");
      await expect(
        page.getByRole("heading", { level: 1, name: "Projects" }),
      ).toBeVisible();
      await expectHeader(page);

      await page.goto("/contact");
      await expect(
        page.getByRole("heading", { level: 1, name: "Contact" }),
      ).toBeVisible();
      await expectHeader(page);
    });
  });
}

test("clicking Professional and Fun keeps the header", async ({ page }) => {
  await page.goto("/");
  await expectHeader(page);

  await page.getByRole("button", { name: "Professional" }).click();
  await expectHeader(page);

  await page.getByRole("button", { name: "Fun" }).click();
  await expectHeader(page);
});

test("home without a theme cookie does not show the notebook sticker", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByText("Design, photography, and code")).toBeVisible();
  await expect(page.getByText("This website", { exact: true })).toHaveCount(0);
});

test("professional cookie keeps the recruiter line and hides the sticker", async ({
  page,
  context,
  baseURL,
}) => {
  await context.addCookies([
    {
      name: "ariella-theme",
      value: "professional",
      url: baseURL ?? "http://127.0.0.1:3000",
    },
  ]);
  await page.goto("/");
  await expect(page.getByText("Design, photography, and code")).toBeVisible();
  await expect(page.getByText("This website", { exact: true })).toHaveCount(0);
  await expectHeader(page);
});

test("fun cookie shows the notebook sticker under the header", async ({
  page,
  context,
  baseURL,
}) => {
  await context.addCookies([
    {
      name: "ariella-theme",
      value: "fun",
      url: baseURL ?? "http://127.0.0.1:3000",
    },
  ]);
  await page.goto("/");
  await expectHeader(page);
  await expect(page.getByText("This website", { exact: true })).toBeVisible();
  await expect(page.getByText("is a work in", { exact: true })).toBeVisible();
  await expect(page.getByText("progress!", { exact: true })).toBeVisible();
  await expect(page.getByText("Design, photography, and code")).toHaveCount(0);

  const header = page.getByRole("banner");
  const desk = page.locator(".desk");
  const headerBox = await header.boundingBox();
  const deskBox = await desk.boundingBox();
  const innerHeight = await page.evaluate(() => window.innerHeight);
  expect(headerBox).not.toBeNull();
  expect(deskBox).not.toBeNull();
  const expected = innerHeight - headerBox!.height;
  expect(Math.abs(deskBox!.height - expected)).toBeLessThanOrEqual(2);
  expect(deskBox!.y + deskBox!.height).toBeLessThanOrEqual(innerHeight + 2);

  await page.setViewportSize({ width: 390, height: 844 });
  const narrowHeader = await header.boundingBox();
  const narrowDesk = await desk.boundingBox();
  const narrowInner = await page.evaluate(() => window.innerHeight);
  expect(narrowHeader).not.toBeNull();
  expect(narrowDesk).not.toBeNull();
  const narrowExpected = narrowInner - narrowHeader!.height;
  expect(Math.abs(narrowDesk!.height - narrowExpected)).toBeLessThanOrEqual(2);
});

test("clicking Fun, reloading, then Professional switches the home", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Fun" }).click();
  await expect(page.getByText("This website", { exact: true })).toBeVisible();
  await expect(page.getByText("is a work in", { exact: true })).toBeVisible();
  await expect(page.getByText("progress!", { exact: true })).toBeVisible();

  await page.reload();
  await expect(page.getByText("This website", { exact: true })).toBeVisible();
  await expect(page.getByText("is a work in", { exact: true })).toBeVisible();
  await expect(page.getByText("progress!", { exact: true })).toBeVisible();

  await page.getByRole("button", { name: "Professional" }).click();
  await expect(page.getByText("Design, photography, and code")).toBeVisible();
  await expect(page.getByText("This website", { exact: true })).toHaveCount(0);
  await expectHeader(page);
});

test("editions index lists the frozen covers under the header", async ({
  page,
}) => {
  await page.goto("/editions");
  await expect(page).toHaveURL("/editions");
  await expectHeader(page);
  await expect(page.getByText("Mostly practice", { exact: true })).toBeVisible();
  await expect(page.getByText("Composition cover", { exact: true })).toBeVisible();
  await expect(page.getByText("Marble cover", { exact: true })).toBeVisible();
});

test("edition 0 keeps the site header", async ({ page }) => {
  await page.goto("/editions/0");
  await expect(page).toHaveURL("/editions/0");
  await expectHeader(page);
  await expect(
    page.getByRole("heading", { level: 1, name: "Mostly practice!" }),
  ).toBeVisible();
});

test("edition 1 is the frozen stylized cover", async ({ page }) => {
  await page.goto("/editions/1");
  await expect(page).toHaveURL("/editions/1");
  await expectHeader(page);
  await expect(page.getByText("Work in progress", { exact: true })).toBeVisible();
  await expect(page.getByText("This website", { exact: true })).toHaveCount(0);
  await expect(page.locator(".desk[data-cover='stylized']")).toBeVisible();
});

test("edition 2 is the frozen marble cover", async ({ page }) => {
  await page.goto("/editions/2");
  await expect(page).toHaveURL("/editions/2");
  await expectHeader(page);
  await expect(page.getByText("This website", { exact: true })).toBeVisible();
  await expect(page.getByText("is a work in", { exact: true })).toBeVisible();
  await expect(page.getByText("progress!", { exact: true })).toBeVisible();
  await expect(page.locator(".desk[data-cover='high-fidelity']")).toBeVisible();
});

test("fun home versions mark links to the editions archive", async ({
  page,
  context,
  baseURL,
}) => {
  await context.addCookies([
    {
      name: "ariella-theme",
      value: "fun",
      url: baseURL ?? "http://127.0.0.1:3000",
    },
  ]);
  await page.goto("/");
  const versions = page.getByRole("link", { name: "VERSIONS" });
  await expect(versions).toBeVisible();
  await expect(versions).toHaveAttribute("href", "/editions");
});
