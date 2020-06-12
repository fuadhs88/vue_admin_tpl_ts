// "use strict";
// import path = require("path");
import { join } from "path";
function resolve(dir) {
  return join(__dirname, dir);
}

// 网站名
const siteTitle = process.env.VUE_APP_SITE_TITLE;

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = process.env.port || process.env.npm_config_port || 9888; // dev port

// vue.config.js
export const publicPath = "./";
export const outputDir = "dist";
export const assetsDir = "static";
export const lintOnSave = process.env.NODE_ENV === "development";
export const productionSourceMap = false;
export const devServer = {
  port: port,
  // open: true,
  overlay: {
    warnings: false,
    errors: true
  },
  proxy: {
    "/api": {
      target: process.env.VUE_APP_API_HOST,
      ws: false,
      changeOrigin: true
    }
  }
};
export const configureWebpack = {
  // provide the app's title in webpack's name field, so that
  // it can be accessed in index.html to inject the correct title.
  name: siteTitle,
  resolve: {
    alias: {
      "@": resolve("src")
    }
  }
};
export function chainWebpack(config) {
  // config.plugins.delete('preload') // TODO: need test
  // config.plugins.delete('prefetch') // TODO: need test
  // set svg-sprite-loader
  // config.module
  //   .rule('svg')
  //   .exclude.add(resolve('src/icons'))
  //   .end()
  // config.module
  //   .rule('icons')
  //   .test(/\.svg$/)
  //   .include.add(resolve('src/icons'))
  //   .end()
  //   .use('svg-sprite-loader')
  //   .loader('svg-sprite-loader')
  //   .options({
  //     symbolId: 'icon-[name]'
  //   })
  //   .end()
  // set preserveWhitespace
  config.module
    .rule("vue")
    .use("vue-loader")
    .loader("vue-loader")
    .tap(options => {
      options.compilerOptions.preserveWhitespace = true;
      return options;
    })
    .end();

  config
    // https://webpack.js.org/configuration/devtool/#development
    .when(process.env.NODE_ENV === "development", config =>
      config.devtool("cheap-source-map")
    );

  config.when(process.env.NODE_ENV !== "development", config => {
    config
      .plugin("ScriptExtHtmlWebpackPlugin")
      .after("html")
      .use("script-ext-html-webpack-plugin", [
        {
          // `runtime` must same as runtimeChunk name. default is `runtime`
          inline: /runtime\..*\.js$/
        }
      ])
      .end();
    config.optimization.splitChunks({
      chunks: "all",
      cacheGroups: {
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial" // only package third parties that are initially dependent
        },
        commons: {
          name: "chunk-commons",
          test: resolve("src/components"),
          minChunks: 3,
          priority: 5,
          reuseExistingChunk: true
        }
      }
    });
    config.optimization.runtimeChunk("single");
  });
}
