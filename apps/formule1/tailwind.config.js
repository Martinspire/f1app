const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

const daisyui = require('daisyui');
const tailwindAspectRatio = require('@tailwindcss/aspect-ratio');
// this is disabled because it currently gives a few autoprefixer warnings and we don't need it yet
// const tailwindForms = require('@tailwindcss/forms');
const tailwindTypography = require('@tailwindcss/typography');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Formula1-Regular"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      heading: ['"Formula1-Black"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      special: ['"Formula1-Wide"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
    },
  },
  plugins: [
    tailwindAspectRatio,
    // tailwindForms,
    tailwindTypography,
    daisyui,
  ],
  daisyui: {
    themes: ["light", "dark",],
    logs: false // no version debugging needed
  }
};
