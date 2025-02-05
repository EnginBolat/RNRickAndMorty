module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@core': './src/core',
          '@helper': './src/helper',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@providers': './src/providers',
          '@stacks': './src/stacks',
          '@models': './src/models',
          '@store': './src/store',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
