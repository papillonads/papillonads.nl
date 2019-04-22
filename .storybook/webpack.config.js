const path = require('path')
const DotEnvPlugin = require('dotenv-webpack')

module.exports = ({ config, mode }) => {
  if (mode !== 'DEVELOPMENT') {
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')
  }

  const rules = config.module.rules
  const plugins = config.plugins

  rules.push({
    test: /\.(scss|css)$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          sourceMap: true,
          localIdentName: '[name]_[local]_[hash:base64:5]',
        },
      },
      {
        loader: 'sass-loader',
      },
      {
        loader: 'resolve-url-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: () => [require('postcss-cssnext')()],
          parser: 'postcss-scss',
        },
      },
    ],
  })

  plugins.push(
    new DotEnvPlugin({
      path: path.resolve(__dirname, '../packages/client/.env.develop'),
    }),
  )

  return config
}
