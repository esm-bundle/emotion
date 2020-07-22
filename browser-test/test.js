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

    it("the API generates classNames", () => {
      return System.import("/base/system/emotion.js").then(({ css, cx }) => {
        // Basic test that matches simple example https://emotion.sh/docs/introduction#framework-agnostic
        const color = "white",
          base = css`
            border-radius: 4px;
            padding: 32px;
            &:hover {
              color: ${color};
            }
          `,
          extra = css`
            background-color: hotpink;
            font-size: 24px;
          `;

        expect(base).toContain("css-");
        expect(cx(base, extra)).toContain("css-");
      });
    });
  });
});
