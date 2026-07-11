import { test, expect } from "@playwright/test";

test.describe("Portfolio Navigation & Static Makeover", () => {
  test("should render the home page copy and navigate to Florin Gold Gym case study", async ({ page }) => {
    // 1. Visit the home page
    await page.goto("/");

    // 2. Verify homepage headline and humbler, business-focused copy
    await expect(page.locator("h1")).toContainText("Let's build technology that actually solves your business problems.");
    await expect(page.locator("text=Hi, I'm Stefan. I'm a software engineer and former startup founder.")).toBeVisible();

    // 3. Verify that the three projects are present in the list
    await expect(page.locator("text=TechVector").first()).toBeVisible();
    await expect(page.locator("text=Florin Gold Gym").first()).toBeVisible();
    await expect(page.locator("text=Kaizen").first()).toBeVisible();

    // 4. Verify that Kaizen startup story has its own repurposed section
    await expect(page.locator("text=Kaizen: What my first startup taught me about your business")).toBeVisible();

    // 5. Navigate to the Florin Gold Gym page by clicking the project card
    const florinGymLink = page.locator("a[href='/florin-gold-gym']");
    await expect(florinGymLink).toBeVisible();
    await florinGymLink.click();

    // 6. Verify URL has changed to /florin-gold-gym
    await expect(page).toHaveURL(/\/florin-gold-gym/);

    // 7. Verify Florin Gold Gym case study title & content
    await expect(page.locator("h1")).toContainText("Florin Gold Gym: Building a System an Entire Business Bets Its Life On.");
    await expect(page.locator("text=The Stakes: Real-World Dependency")).toBeVisible();
    await expect(page.locator("text=Client Testimonial Video")).toBeVisible();

    // 8. Test back button links back to the main portfolio page
    const backBtn = page.locator("text=Back to Portfolio");
    await expect(backBtn).toBeVisible();
    await backBtn.click();

    // 9. Verify we are back on the homepage
    await expect(page).toHaveURL(/\/$/);
  });
});
