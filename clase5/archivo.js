const fs = require("fs");

const data = fs.readFileSync("README.md", "utf-8");

const reactWordCount = data.match(/react/gi) ?? [];
console.log(reactWordCount.length);
