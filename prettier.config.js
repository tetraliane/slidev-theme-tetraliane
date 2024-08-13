export default {
  plugins: ["prettier-plugin-organize-imports"],
  overrides: [
    {
      files: ["example.md"],
      options: {
        parser: "slidev",
        plugins: ["prettier-plugin-slidev"],
      },
    },
  ],
};
