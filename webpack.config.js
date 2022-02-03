const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const port = process.env.PORT || 3000;

// webpack 5에서는 file loader는 deprecated 됐다.
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
    // 참고 https://yamoo9.gitbook.io/webpack/webpack/webpack-loaders/file-loader
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
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource"
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    // 이 플로그인은 타입스크립트를 빠르게 컴파일링하게하고, 별도의 프로세스에서 타입체크도 해준다.
    new ForkTsCheckerWebpackPlugin(),
    // 기존의 output 폴더를 비운다.
    new CleanWebpackPlugin(),
    // 여러 css 파일을 하나의 css 파일로 합치는 플러그인
    new MiniCssExtractPlugin({
      filename: "app.css"
    })
  ],

  // 개발 서버 설정
  devServer: {
    host: "localhost",
    port: port,
    open: true, // open page when start
    // History API 또는 react-router 등을 사용하는 경우 새로고침 시 404 에러를 해결해주는 option
    historyApiFallback: true,
  },

  // 웹팩이 알아서 경로나 확장자를 처리할 수 있게 도와주는 옵션
  resolve: {
    // 어디서 resolve 할 것 찾아야 하는지 알려준다!
    modules: ["node_modules"],
    // 확장자 명칭을 생략 가능한 것들을 설정해준다!
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    // 별칭을 써줌으로써 절대경로를 설정해준다!
    alias: { 
      '@src': path.resolve(__dirname, 'src')
    }
  },

  devtool: "inline-source-map",
};

// 절대 경로 참고
//https://chanyeong.com/blog/post/35
