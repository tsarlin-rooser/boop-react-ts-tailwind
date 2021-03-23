// To be able to import our CSS into components
// we will need to tell TSDX how to include it with our code.
// For that, we will need to install rollup-plugin-postcss (as TSDX uses rollup).

const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top', // this tells postCSS where inside the <head> of our page the CSS will be inserted
        },
      })
    );
    return config;
  },
};