import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

const config: webpack.Configuration = (env) => {
  return {
    entry: path.resolve(__dirname, './src/index.tsx'),
    resolve: {
      extensions: ['*', '.ts', '.tsx', 'json', '.js', '.jsx'],
      modules: ['node_modules']
    },
    module: {
      rules: [
        {
          test: /\.tsx?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html.ejs'),
      }),
      new ForkTsCheckerWebpackPlugin()
    ],
  }
}

export default config
