const {join} = require('path');
throw new Error(JSON.stringify(process.env, null, 2));
process.env.npm_config_loglevel = "notice";

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  //cacheDirectory: join('/layers/paketo-buildpacks_npm-install/modules/node_modules', '.cache', 'puppeteer'),
};
