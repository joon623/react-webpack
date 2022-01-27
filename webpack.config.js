const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
  // 개발환경
  mode: "development",

  // 애플리케이션 시작 경로
  entry: "./src/index.tsx",

  // 번들된 파일 경로
  output: {
    // bundled compiled 파일
    path: path.join(__dirname, "/dist"), //__dirname : 현재 디렉토리, dist 폴더에 모든 컴파일된 하나의 번들파일을 넣을 예정
    filename: "index_bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        use:'ts-loader',
        exclude: /node_modules/
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new ForkTsCheckerWebpackPlugin()
  ],

  // 개발 서버 설정
  devServer: {
    host: "localhost",
    port: port,
    open: true, // open page when start
  },

  // 웹팩이 알아서 경로나 확장자를 처리할 수 있게 도와주는 옵션
  resolve: {
    modules: ["node_modules"],
		extensions: ['.js', '.jsx', ".tsx", ".ts"]
	},

  devtool: 'inline-source-map'
};
