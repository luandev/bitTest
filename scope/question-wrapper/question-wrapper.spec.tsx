import "./question-wrapper";
import { fixture } from "@open-wc/testing-helpers";

describe("question-wrapper", () => {

  beforeEach(async () => {
    await fixture(`<question-wrapper name="World"></question-wrapper>`);
  });

  it("has a greeting", async () => {
    const greeting =
      window.document.body.getElementsByTagName("question-wrapper")[0].shadowRoot
        ?.textContent;
    expect(greeting.indexOf("Hello, World!")).not.toBe(-1);
  });
});
