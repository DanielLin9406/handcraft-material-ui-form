module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes

  roots: ["<rootDir>"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    // "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom",
  ],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/src/.*|(\\.|/))(test|spec)\\.(jsx?|tsx?)$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // globals: {
  //   "ts-jest": {
  //     tsConfig: "tsconfig.test.json",
  //   },
  // },
};
