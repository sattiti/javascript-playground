const path         = require('path');
const webpack      = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',

        options: {
          plugins: ['syntax-dynamic-import'],

          presets: [
            [
              '@babel/preset-env',
              {
                modules: false
              }
            ]
          ]
        },

        test: /\.js$/
      }
    ]
  },

  entry: {
    main: './main.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './out')
  },

  mode: 'production',
  target: 'node',

  optimization: {
    // Tell webpack to minimize the bundle using the TerserPlugin.
    minimize: true,

    minimizer: [
      new TerserPlugin({
        cache: false,
        parallel: true,
        sourceMap: false,
        terserOptions: {
          ecma: undefined,
          warnings: false,
          // parse: {
          //   bare_returns: false,
          //   ecma: 8,
          //   html5_comments: true,
          //   shebang: true
          // },
          compress: {
            arrows: true,
            arguments: false,
            booleans: true,
            booleans_as_integers: false,
            collapse_vars: true,
            comparisons: true,
            computed_props: true,
            conditionals: true,
            dead_code: true,
            defaults: true,
            directives: true,
            drop_console: false,
            drop_debugger: true,
            ecma: 5,
            evaluate: true,
            expression: true,
            global_defs: {},
            hoist_funs: false,
            hoist_props: true,
            hoist_vars: false,
            if_return: true,
            inline: true,
            join_vars: true,
            keep_classnames: false,
            keep_fargs: true,
            keep_fnames: false,
            keep_infinity: false,
            loops: true,
            module: false,
            negate_iife: true,
            passes: 1,
            properties: true,
            pure_funcs: null,
            pure_getters: 'strict',
            reduce_funcs: true,
            reduce_vars: true,
            sequences: true,
            side_effects: true,
            switches: true,
            toplevel: false,
            top_retain: null,
            typeofs: true,
            unsafe: false,
            unsafe_arrows: false,
            unsafe_comps: false,
            unsafe_Function: false,
            unsafe_math: false,
            unsafe_methods: false,
            unsafe_proto: false,
            unsafe_regexp: false,
            unsafe_undefined: false,
            unused: true,
            warnings: false
          },
          mangle: {
            properties: false,
            // properites: {
            //   builtins: false,
            //   debug: false,
            //   keep_quoted: false,
            //   regex: null,
            //   reserved: []
            // },
            eval: false,
            keep_classnames: false,
            keep_fnames: false,
            module: false,
            reserved: [],
            toplevel: false,
            safari10: false
          },
          module: false,
          output: {
            comments: false
          },
          // output: {
          //   ascii_only: false,
          //   beautify: false,
          //   braces: false,
          //   comments: false,
          //   ecma: 5,
          //   indent_level: 2,
          //   indent_start: 0,
          //   inline_script: true,
          //   keep_quoted_props: false,
          //   max_line_len: false,
          //   preamble: null,
          //   quote_keys: false,
          //   quote_style: 0,
          //   safari10: false,
          //   semicolons: true,
          //   shebang: true,
          //   webkit: false,
          //   wrap_iife: false
          // },
          sourceMap: false,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false
        },
        extractComments: false
      }),
    ],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    },

    noEmitOnErrors: true,
    namedModules: false,
    namedChunks: false,
    mangleWasmImports: true,
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    flagIncludedChunks: true,
    occurrenceOrder: true,
    providedExports: true,
    usedExports: true,
    concatenateModules: true,
    sideEffects: true
  }
};
