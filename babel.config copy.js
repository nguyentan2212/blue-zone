module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console']
    }
  },
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    ['@babel/plugin-proposal-optional-catch-binding'],
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@components': './app/components',
          '@screens': './app/screens',
          '@models': './app/models',
          '@services': './app/services',
          '@navigation': './app/navigation',
          '@theme': './app/theme',
          '@utils': './app/utils',
          '@i18n': './app/i18n',
          '@icon': './app/assets/icon',
          '@constants': './app/constants',
          '@image': './app/assets/images',
          '@hooks': './app/hooks',
          '@hoc': './app/hoc',
          '@containers': './app/containers'
        }
      }
    ]
  ]
}
