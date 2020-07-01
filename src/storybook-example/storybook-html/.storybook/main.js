const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.[tj]s'
  ],

  addons: [
    '@whitespace/storybook-addon-html/register',
    '@storybook/addon-a11y',
    // '@storybook/addon-actions',
    // '@storybook/addon-backgrounds',
    // '@storybook/addon-console/register',
    // '@storybook/addon-design-assets',
    // '@storybook/addon-docs',
    // '@storybook/addon-events/register',
    // '@storybook/addon-knobs',
    // '@storybook/addon-links/register',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],

  webpackFinal: async (config, { configType })=>{
    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // implementation: require('sass'),
              sassOptions: {
                // fiber: require('fibers'),
                indentedSyntax: true,
                outputStyle: 'compressed',
                sourceMap: false,
              },
            },
          }
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'pug-plain-loader',
            options: {
              pretty: true,
            }
          },
        ],
      },
    )

    config.plugins.push()

    return config
  },
};
