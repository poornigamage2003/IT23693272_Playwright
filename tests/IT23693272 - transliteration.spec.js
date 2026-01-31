const { test, expect } = require('@playwright/test');

test.describe('Sinhala Transliteration - 37 Test Cases', () => {

  const testCases = [
    // ================= POSITIVE FUNCTIONAL =================
    { id: "Pos_Fun_0001", name: "Greeting phrase", input: "oyaata kohomadha?", expected: "ඔයාට කොහොමද?" },
    { id: "Pos_Fun_0002", name: "Mixed-language input", input: "machan mata adha meeting ekak thiyenavaa", expected: "මචන් මට අද meeting එකක් තියෙනවා" },
    { id: "Pos_Fun_0003", name: "Short request", input: "mata help ekak karanna puLuvandha?", expected: "මට help එකක් කරන්න පුළුවන්ද?" },
    { id: "Pos_Fun_0004", name: "Simple sentence", input: "mama gedhara yanavaa", expected: "මම ගෙදර යනවා" },
    { id: "Pos_Fun_0005", name: "Compound sentence", input: "mama bath kanna yanavaa, passee ennam", expected: "මම බත් කන්න යනවා, පස්සේ එන්නම්" },
    { id: "Pos_Fun_0006", name: "Question sentence", input: "oyaa monavadha karannee?", expected: "ඔයා මොනවද කරන්නේ?" },
    { id: "Pos_Fun_0007", name: "Imperative", input: "vahaama enna", expected: "වහාම එන්න" },
    { id: "Pos_Fun_0008", name: "Polite phrase", input: "karuNaakaralaa mata udhavvak karanna", expected: "කරුණාකරලා මට උදව්වක් කරන්න" },
    { id: "Pos_Fun_0009", name: "Negative sentence", input: "mama ennee naehae", expected: "මම එන්නේ නැහැ" },
    { id: "Pos_Fun_0010", name: "Long sentence", input: "oyaadha mama kalin kivva vidhihata vaeda karagaththee", expected: "ඔයාද මම කලින් කිව්ව විදිහට වැඩ කරගත්තේ" },
    { id: "Pos_Fun_0011", name: "Thanks phrase", input: "bohooma sthuthiyi", expected: "බොහෝම ස්තුතියි" },
    { id: "Pos_Fun_0012", name: "Apology phrase", input: "samaavenna", expected: "සමාවෙන්න" },
    { id: "Pos_Fun_0013", name: "Instruction sentence", input: "meeka hari lassanayi", expected: "මේක හරි ලස්සනයි" },
    { id: "Pos_Fun_0014", name: "Request sentence", input: "mata podi dheyak oonee", expected: "මට පොඩි දෙයක් ඕනේ" },
    { id: "Pos_Fun_0015", name: "Future tense", input: "mama heta ennam", expected: "මම හෙට එන්නම්" },
    { id: "Pos_Fun_0016", name: "Past tense", input: "mama ehema kiyalaa thibbaa", expected: "මම එහෙම කියලා තිබ්බා" },
    { id: "Pos_Fun_0017", name: "Emotional phrase", input: "mata hari sathutuyi", expected: "මට හරි සතුටුයි" },
    { id: "Pos_Fun_0018", name: "Advice sentence", input: "oyaa hoDHA vidhihata vaeda karanna", expected: "ඔයා හොඳ විදිහට වැඩ කරන්න" },
    { id: "Pos_Fun_0019", name: "Motivation", input: "oyaa hari hoDHAyi", expected: "ඔයා හරි හොඳයි" },
    { id: "Pos_Fun_0020", name: "Simple chat", input: "mokakdha karannee?", expected: "මොකක්ද කරන්නේ?" },

    // ================= NEGATIVE FUNCTIONAL =================
    { id: "Neg_Fun_0001", name: "Empty input", input: "", expected: "" },
    { id: "Neg_Fun_0002", name: "Random symbols", input: "###@@@", expected: "###@@@" },
    { id: "Neg_Fun_0003", name: "Numbers only", input: "12345", expected: "12345" },
    { id: "Neg_Fun_0004", name: "English only", input: "Hello world", expected: "Hello world" },
    { id: "Neg_Fun_0005", name: "Wrong spelling", input: "mamgedraynava", expected: "මම්ගෙඩ්‍රය්නව" },
    { id: "Neg_Fun_0006", name: "Slang input", input: "thx bro", expected: "තx bro" },
    { id: "Neg_Fun_0007", name: "Mixed symbols", input: "mama !!! yanavaa", expected: "මම !!! යනවා" },
    { id: "Neg_Fun_0008", name: "Whitespace input", input: "   ", expected: "" },

    // ================= POSITIVE UI =================
    { id: "Pos_UI_0001", name: "Real-time conversion", input: "man gedhara yanavaa", expected: "man ගෙදර යනවා" },
    { id: "Pos_UI_0002", name: "Clear input", input: "mama bath kanna", expected: "" },
    { id: "Pos_UI_0003", name: "Font rendering", input: "oyaata kohomadha?", expected: "ඔයාට කොහොමද?" },
    { id: "Pos_UI_0004", name: "Text selection", input: "mata udhavvak karanna", expected: "මට උදව්වක් කරන්න" },
    { id: "Pos_UI_0005", name: "Responsive display", input: "mama ehema karanavaa", expected: "මම එහෙම කරනවා" },

    // ================= NEGATIVE UI =================
    { id: "Neg_UI_0001", name: "Long UI lag", input: "mama mama mama mama mama mama", expected: "මම මම මම මම මම මම" },
    { id: "Neg_UI_0002", name: "Overflow handling", input: "mama ".repeat(40), expected: "මම ".repeat(40) },
    { id: "Neg_UI_0003", name: "Page reload behavior", input: "man gedhara yanavaa", expected: "Output resets" },
    { id: "Neg_UI_0004", name: "No update UI", input: "hello", expected: "hello" },

    // ================= EDGE CASES =================
    { id: "Edge_0001", name: "Very long input", input: "mama ".repeat(100), expected: "Handled without crash" },
    { id: "Edge_0002", name: "Emoji input", input: "oya 😊 kohomadha", expected: "ඔය 😊 කොහොමද" },
    { id: "Edge_0003", name: "Newline input", input: "mama\ngedhara", expected: "මම\nගෙදර" }
  ];

  for (const tc of testCases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      // 1. Navigate
      await page.goto('https://www.swifttranslator.com/');

      const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
      const sinhalaCard = page.locator('div.card:has-text("Sinhala")');
      const outputBox = sinhalaCard.locator('.bg-slate-50');

      // 2. Perform Input Action
      if (tc.input.length > 0) {
        // Use fill for speed, or type if you need to test the transliteration engine trigger
        // Use typing (not fill) to better emulate user input so the transliteration engine triggers
        await inputArea.fill('');
        await inputArea.type(tc.input, { delay: 5 });
        // Triggering an extra space often helps transliteration tools finalize the last word
        await page.keyboard.press('Space');
        // Dispatch input/keyboard events programmatically as a fallback
        try {
          await inputArea.evaluate(el => {
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          });
        } catch (e) {
          // ignore if evaluate fails in some environments
        }
      }

      // 3. Special Case: Clear Button Logic
      if (tc.id === 'Pos_UI_0002') {
        const clearButton = page.getByRole('button', { name: /clear/i });
        await clearButton.first().click();
      }

      // 4. Special Case: Page Reload Logic
      if (tc.id === 'Neg_UI_0003') {
        await page.reload();
      }

      // 5. Assertions based on expected result type
      if (tc.expected === "" || tc.expected === "Output resets") {
        await expect(outputBox).toBeEmpty();
      } else if (tc.expected === "Handled without crash") {
        await expect(outputBox).toBeVisible();
      } else {
        // Poll the card's computed innerText (handles rendered/visible text reliably)
        const maxWait = 5000;
        const pollInterval = 200;
        let elapsed = 0;
        let outputText = '';
        while (elapsed < maxWait) {
          outputText = (await outputBox.evaluate(n => n.innerText)) || '';
          if (outputText.trim().length > 0) break;
          await page.waitForTimeout(pollInterval);
          elapsed += pollInterval;
        }
        if (outputText.trim().length === 0) {
          try {
            await page.screenshot({ path: `test-results/${tc.id}-output-empty.png` });
            const fs = require('fs');
            fs.writeFileSync(`test-results/${tc.id}-page.html`, await page.content());
          } catch (e) {
            // ignore diagnostics write errors
          }
        }
        // Assert against the computed visible text of the output box
        await expect.poll(async () => (await outputBox.evaluate(n => n.innerText)).trim(), { timeout: 15000 }).toContain(tc.expected.trim());
      }

      const finalOutput = await outputBox.textContent();
      console.log(`Test ${tc.id} Passed: Input[${tc.input.substring(0,20)}] -> Output[${finalOutput?.trim().substring(0,20)}]`);
    });
  }
});