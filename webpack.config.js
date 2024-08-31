const isRspack = !!process.env.RSPACK_CONFIG_VALIDATE
const path = require('path')
const MiniCssExtractPlugin = isRspack
  ? require('@rspack/core').CssExtractRspackPlugin
  : require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  context: __dirname,
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    clean: true,
  },
  mode: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
}
