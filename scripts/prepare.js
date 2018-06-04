const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');
const log = require('npmlog');

const modulePath = path.resolve('./');
// eslint-disable-next-line import/no-dynamic-require
const packageJson = require(path.join(modulePath, 'package.json'));

shell.rm('-rf', 'dist');

const babel = path.join(__dirname, '..', 'node_modules', '.bin', 'babel');
const args = [
  '--ignore __mocks__/,tests/*,__tests__/,**.test.js,stories/,**.story.js,**.stories.js,__snapshots__',
  '--plugins "transform-runtime"',
  './src --out-dir ./dist',
  '--copy-files',
].join(' ');

const command = `${babel} ${args}`;
const { code } = shell.exec(command, { silent: true });

if (code !== 0) {
  log.error(`FAILED: ${chalk.bold(`${packageJson.name}@${packageJson.version}`)}`);
  shell.exit(code);
}

// eslint-disable-next-line no-console
console.log(chalk.gray(`Built: ${chalk.bold(`${packageJson.name}@${packageJson.version}`)}`));
