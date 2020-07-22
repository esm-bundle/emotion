describe("@esm-bundle/emotion", () => {
  it("can load the development esm bundle without dying", async () => {
    const { css, cx } = await import("../esm/emotion.js");
    expect(css).not.to.equal(undefined);
    expect(cx).not.to.equal(undefined);
  });

  it("can load the production esm bundle without dying", async () => {
    const { css, cx } = await import("../esm/emotion.min.js");
    expect(css).not.to.equal(undefined);
    expect(cx).not.to.equal(undefined);
  });
});
