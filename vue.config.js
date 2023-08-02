/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/styles/reset.scss";
            @import "@/styles/variables.scss";
            @import "@/styles/mixin.scss";
            @import "@/styles/layout.scss";
            @import "@/styles/style.scss";
          `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery',
      }),
    ],
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/homespa/'
    : '/',
};
