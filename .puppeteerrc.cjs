const {join} = require('path');
console.log("\n", process.env, "\n");
process.env.npm_config_loglevel = "notice";

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  //cacheDirectory: join('/layers/paketo-buildpacks_npm-install/modules/node_modules', '.cache', 'puppeteer'),
};
