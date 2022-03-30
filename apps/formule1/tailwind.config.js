const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const {join} = require('path');
const daisyui = require("daisyui");

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
