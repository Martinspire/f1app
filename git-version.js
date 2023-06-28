const { gitDescribeSync } = require('git-describe');
const { version } = require('./package.json');
const { resolve, relative } = require('path');
const { writeFileSync, existsSync, mkdirSync } = require('fs-extra');

const gitInfo = gitDescribeSync({
    dirtyMark: false,
    dirtySemver: false
});

gitInfo.version = version;

if (!existsSync(__dirname + '/apps/formule1/src/environments')) {
    mkdirSync(__dirname + '/apps/formule1/src/environments');
}
const file = resolve(__dirname, 'apps', 'formule1', 'src', 'environments', 'version.ts');
writeFileSync(file,
    `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* eslint-disable */
export const VERSION = ${JSON.stringify(gitInfo, null, 4)};
`, { encoding: 'utf-8' });

console.log(`Wrote version info ${gitInfo.raw} to ${relative(resolve(__dirname, '..'), file)}`);
