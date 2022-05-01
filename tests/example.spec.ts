import { test, expect } from "@playwright/test";

test.describe("scenarios", () => {
  test("Negative scenario: heart disease is present.", async ({ page }) => {
    // Go to http://localhost:3000/
    await page.goto("http://localhost:3000/");
    // Click input[name="age"]
    await page.locator('input[name="age"]').click();
    // Fill input[name="age"]
    await page.locator('input[name="age"]').fill("56");
    // Check input[name="sex"] >> nth=0
    await page.locator('input[name="sex"]').first().check();
    // Click [placeholder="Choose\.\.\."]
    await page.locator('[placeholder="Choose\\.\\.\\."]').click();
    // Click text=1: Atypical angina: chest pain not related to heart
    await page
      .locator("text=1: Atypical angina: chest pain not related to heart")
      .click();
    // Click input[name="trestbps"]
    await page.locator('input[name="trestbps"]').click();
    // Fill input[name="trestbps"]
    await page.locator('input[name="trestbps"]').fill("140");
    // Click input[name="chol"]
    await page.locator('input[name="chol"]').click();
    // Fill input[name="chol"]
    await page.locator('input[name="chol"]').fill("285");
    // Check input[name="fbs"]
    await page.locator('input[name="fbs"]').check();
    // Uncheck input[name="fbs"]
    await page.locator('input[name="fbs"]').uncheck();
    // Click text=0: Nothing to note
    await page.locator("text=0: Nothing to note").click();
    // Click input[name="thalach"]
    await page.locator('input[name="thalach"]').click();
    // Fill input[name="thalach"]
    await page.locator('input[name="thalach"]').fill("153");
    // Click input[name="oldpeak"]
    await page.locator('input[name="oldpeak"]').click();
    // Fill input[name="oldpeak"]
    await page.locator('input[name="oldpeak"]').fill("1.3");
    // Click text=1: Flatsloping: minimal change (typical healthy heart)
    await page
      .locator("text=1: Flatsloping: minimal change (typical healthy heart)")
      .click();
    // Click input[name="ca"]
    await page.locator('input[name="ca"]').click();
    // Fill input[name="ca"]
    await page.locator('input[name="ca"]').fill("0");
    // Click input[name="thal"]
    await page.locator('input[name="thal"]').click();
    // Fill input[name="thal"]
    await page.locator('input[name="thal"]').fill("2");
    // Click button:has-text("Submit")
    await page.locator('button:has-text("Submit")').click();
    // Click #root div:has-text("Heart disease is present") >> nth=4
    await page
      .locator('#root div:has-text("Heart disease is present")')
      .nth(4)
      .click();

    await page.waitForTimeout(8000);
  });

  test("Positive scenario: Heart disease is not present.", async ({ page }) => {
    // Go to http://localhost:3000/
    await page.goto("http://localhost:3000/");
    // Click input[name="age"]
    await page.locator('input[name="age"]').click();
    // Fill input[name="age"]
    await page.locator('input[name="age"]').fill("68");
    // Check input[name="sex"] >> nth=1
    await page.locator('input[name="sex"]').nth(1).check();
    // Click [placeholder="Choose\.\.\."]
    await page.locator('[placeholder="Choose\\.\\.\\."]').click();
    // Click text=0: Typical angina: chest pain related decrease blood supply to the heart
    await page
      .locator(
        "text=0: Typical angina: chest pain related decrease blood supply to the heart"
      )
      .click();
    // Click input[name="trestbps"]
    await page.locator('input[name="trestbps"]').click();
    // Fill input[name="trestbps"]
    await page.locator('input[name="trestbps"]').fill("144");
    // Click input[name="chol"]
    await page.locator('input[name="chol"]').click();
    // Fill input[name="chol"]
    await page.locator('input[name="chol"]').fill("182");
    // Check input[name="fbs"]
    await page.locator('input[name="fbs"]').check();
    // Check input[name="restecg"] >> nth=1
    await page.locator('input[name="restecg"]').nth(1).check();
    // Click input[name="thalach"]
    await page.locator('input[name="thalach"]').click();
    // Fill input[name="thalach"]
    await page.locator('input[name="thalach"]').fill("134");
    // Click input[name="oldpeak"]
    await page.locator('input[name="oldpeak"]').click();
    // Fill input[name="oldpeak"]
    await page.locator('input[name="oldpeak"]').fill("3.4");
    // Check input[name="slope"] >> nth=1
    await page.locator('input[name="slope"]').nth(1).check();
    // Click input[name="ca"]
    await page.locator('input[name="ca"]').click();
    // Fill input[name="ca"]
    await page.locator('input[name="ca"]').fill("2");
    // Click input[name="thal"]
    await page.locator('input[name="thal"]').click();
    // Fill input[name="thal"]
    await page.locator('input[name="thal"]').fill("3");
    // Click button:has-text("Submit")
    await page.locator('button:has-text("Submit")').click();
    // Click #root div:has-text("No heart disease") >> nth=4
    await page.locator('#root div:has-text("No heart disease")').nth(4).click();
    await page.waitForTimeout(8000);
  });
});
