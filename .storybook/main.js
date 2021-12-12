const path = require('path')

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      'Assets': path.resolve(__dirname, '../src/stories/assets/'),
      'Components': path.resolve(__dirname, '../src/stories/components/'),
      'Consts': path.resolve(__dirname, '../src/stories/consts.ts')
    };
    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}