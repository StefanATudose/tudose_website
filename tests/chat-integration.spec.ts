import { test, expect } from "@playwright/test";

test.describe("AI Stefan Chat Widget Integration", () => {
  test("should expand chat on focus, support message sending, and simulate response", async ({ page }) => {
    // 1. Visit the home page
    await page.goto("/");

    // 2. Verify collapsed state header & greeting are visible
    await expect(page.locator("text=AI Stefan")).toBeVisible();
    await expect(page.locator("text=Online · Ready to chat")).toBeVisible();
    await expect(
      page.locator("text=Hello! I'm the AI version of Tudose")
    ).toBeVisible();

    // 3. Locate the input inside the collapsed widget and click/focus it
    const input = page.locator("input[placeholder='Type a message...']");
    await expect(input).toBeVisible();
    await input.focus();

    // 4. Verify that the chat has expanded (header updates to 'AI Tudose')
    await expect(page.locator("text=AI Tudose")).toBeVisible();
    await expect(page.locator("text=Online").first()).toBeVisible();

    // Verify the placeholder updated to 'Type your message...'
    const expandedInput = page.locator("input[placeholder='Type your message...']");
    await expect(expandedInput).toBeVisible();

    // Verify the initial message is rendered in the history
    await expect(page.locator("text=Hello! How can I help you today?")).toBeVisible();

    // 5. Send a user message
    await expandedInput.fill("Tell me about your AI Agent projects");
    await expandedInput.press("Enter");

    // 6. Verify user message appears in the chat
    await expect(page.locator("text=Tell me about your AI Agent projects")).toBeVisible();

    // 7. Verify typing indicator appears and then disappears, followed by AI response.
    // Wait for the AI response. We check that one of the responses from our pool appears.
    const aiResponseRegex = /great question|approach combines|RAG implementations|AI Agents are|happy to discuss/i;
    await expect(page.getByText(aiResponseRegex)).toBeVisible({ timeout: 5000 });
  });
});
