import "./header-component";
import { fixture } from "@open-wc/testing-helpers";

describe("header-component", () => {

  beforeEach(async () => {
    await fixture(`<header-component name="World"></header-component>`);
  });

  it("has a greeting", async () => {
    const greeting =
      window.document.body.getElementsByTagName("header-component")[0].shadowRoot
        ?.textContent;
    expect(greeting.indexOf("Hello, World!")).not.toBe(-1);
  });
});
