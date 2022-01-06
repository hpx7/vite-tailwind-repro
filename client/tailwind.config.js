const path = require("path");

const relativePath = (str) => path.relative(process.cwd(), path.resolve(__dirname, str));

module.exports = {
  content: ["./index.html", "./app.ts"].map(relativePath),
  theme: {
    extend: {},
  },
  plugins: [],
};
