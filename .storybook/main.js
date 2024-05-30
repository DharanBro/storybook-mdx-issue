module.exports = {
  stories: [
    `../src/**/*.stories.(js|jsx)`,
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-webpack5-compiler-babel',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    //👇 See the table below for the list of supported options
    autodocs: true,
    defaultName: 'Documentation',
  },
};
