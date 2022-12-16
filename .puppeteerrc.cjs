const {join} = require('path');
process.env.npm_config_loglevel = "notice";
process.env.NPM_CONFIG_LOGLEVEL = "notice";

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  cacheDirectory: join(__dirname, 'node_modules', '.cache', 'puppeteer'),
};
