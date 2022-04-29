const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const {join} = require('path');

const daisyui = require("daisyui");
const tailwindAspectRatio = require('@tailwindcss/aspect-ratio');
const tailwindForms = require('@tailwindcss/forms');
const tailwindLineClamp = require('@tailwindcss/line-clamp');
const tailwindTypography = require("@tailwindcss/typography");

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindAspectRatio, tailwindLineClamp, tailwindForms, tailwindTypography, daisyui],
};
