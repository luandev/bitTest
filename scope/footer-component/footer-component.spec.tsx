import "./footer-component";
import { fixture } from "@open-wc/testing-helpers";

describe("footer-component", () => {

  beforeEach(async () => {
    await fixture(`<footer-component name="World"></footer-component>`);
  });

  it("has a greeting", async () => {
    const greeting =
      window.document.body.getElementsByTagName("footer-component")[0].shadowRoot
        ?.textContent;
    expect(greeting.indexOf("Hello, World!")).not.toBe(-1);
  });
});
