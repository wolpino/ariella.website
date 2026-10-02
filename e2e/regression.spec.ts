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
