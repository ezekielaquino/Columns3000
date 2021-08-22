module.exports = {
  arrowParens: "avoid",
  bracketSpacing: false,
  jsxBracketSameLine: false,
  printWidth: 80,
  proseWrap: "always",
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  overrides: [
    {
      files: ["*.md"],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
