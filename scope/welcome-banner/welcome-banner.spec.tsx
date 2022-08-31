import "./welcome-banner";
import { fixture } from "@open-wc/testing-helpers";

describe("welcome-banner", () => {

  beforeEach(async () => {
    await fixture(`<welcome-banner sirname="JP" name="World"></welcome-banner>`);
  });

  it("has a greeting", async () => {
    const greeting =
      window.document.body.getElementsByTagName("welcome-banner")[0].shadowRoot
        ?.textContent;
    expect(greeting.indexOf("Hello, World JP!")).not.toBe(-1);
  });
});
