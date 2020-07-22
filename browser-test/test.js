describe("@esm-bundle/emotion", () => {
  [
    ["development ESM", import("/base/esm/emotion.js")],
    ["production ESM ", import("/base/esm/emotion.min.js")],
    ["development System.register", System.import("/base/system/emotion.js")],
    [
      "production System.register",
      System.import("/base/system/emotion.min.js"),
    ],
  ].forEach(([moduleType, importFn]) => {
    it(`can load the ${moduleType} bundle`, () => {
      return importFn.then((module) => {
        expect(module).toBeDefined();
        const { css, cx } = module;
        expect(css).toBeDefined();
        expect(cx).toBeDefined();
      });
    });
  });
});
