// scripts/generate-version.js
const fs = require("fs");
const path = require("path");
const packageJson = require("../package.json");

const versionData = {
  version: packageJson.version,
  buildTime: new Date().toISOString(),
};

fs.writeFileSync(
  path.join(__dirname, "../public/version.json"),
  JSON.stringify(versionData, null, 2)
);
