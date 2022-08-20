module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: {
          version: '^3.24.1',
          proposals: true
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ]
}
