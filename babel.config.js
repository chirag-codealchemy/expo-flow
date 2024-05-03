module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'babel-plugin-module-resolver',
      {
        root: ['./'],
        alias: {
          '^@assets(.+)': './assets/\\1',
          '^@screens(.+)': './src/screens/\\1',
          '^@constants(.+)': './src/constants/\\1',
          '^@component(.+)': './src/component/\\1',
          '^@ApiHelper(.+)': './src/ApiHelper/\\1',
          '^@navigation(.+)': './src/navigation/\\1',
          '^@store(.+)': './src/store/\\1',
          '^@utils(.+)': './src/utils/\\1',
          '^@theme(.+)': './src/theme/\\1',
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.ios.js', '.native.js', '.android.js'],
      },
    ],
  ],
};
