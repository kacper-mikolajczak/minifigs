module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@api': ['./src/api'],
          '@assets': ['./assets'],
          '@config': ['./src/config'],
          '@components': ['./src/components'],
          '@hooks': ['./src/hooks'],
          '@tests': ['./src/tests'],
          '@screens': ['./src/screens'],
          '@navigators': ['./src/navigators'],
          '@loaders': ['./src/loaders'],
        },
      },
    ],
  ],
};
