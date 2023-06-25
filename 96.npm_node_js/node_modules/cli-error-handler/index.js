const symbols = require("log-symbols");
const { red, yellow } = require("chalk");

/**
 * @param {String} heading
 * @param {Error} err
 * @param {Boolean} displayError
 * @
 * */

module.exports = (
  heading = `ERROR: `,
  err,
  displayError = true,
  exit = true
) => {
  if (err) {
    console.log();
    if (displayError) {
      console.log(`${symbols.error} ${red(heading)}`);
      console.log(`${symbols.error} ${red(`ERROR:`)} ${err.name}`);
      console.log(`${symbols.info} ${red(`REASON:`)} ${err.message}`);
      console.log(`${symbols.info} ${red(`ERROR STACK: \n`)} ${err.stack}`);
    } else {
      console.log(`${symbols.warning} ${yellow(heading)}\n`);
    }
    if (exit) {
      process.exit(0);
    } else {
      return false;
    }
  }
}
