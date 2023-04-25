const path = require('path'); // 경로 조작
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// 웹팩설정
module.exports = {
  // 설정에 대한 이름 (선택 사항)
  name: 'wordrelay-setting',
  // development_개발용, 실서비스: production
  mode: 'development',
  devtool: 'eval', // 개발모드 일때는 eval, 배포 모드 일때는 hidden-source-map
  resolve: {
    // 확장명 미리 정의
    extensions: ['.js', '.jsx'],
  },
  // 입력
  entry: {
    app: ['./client'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, // js파일과 jsx파일에 해당 룰을 적용하겠다는 정규 표현식
        loader: 'babel-loader',
        // 바벨의 옵션
        options: {
          // plugin들의 모임 preset
          // [프리셋 이름, {설정}]
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  // 한국 점유율 10% 브라우저, 크롬의 최신버전과 이전버전만 호환 되게 설정
                  browsers: ['> 10% in KR', 'last 2 chrome versions'],
                  // debug: true,
                },
              },
            ],
            '@babel/preset-react',
          ],
          plugins: ['react-refresh/babel'],
        },
      },
    ],
  },
  // 확장
  plugins: [
    new RefreshWebpackPlugin(),
    // 로더의 옵션에 모두 debug: true를 넣어준다.
    // new webpack.LoaderOptionsPlugin({ debug: true }),
  ],
  // 출력
  output: {
    path: path.join(__dirname, 'dist'), // 경로 합치기
    filename: 'app.js',
  },
  devServer: {
    // 핫로더
    devMiddleware: { publicPath: '/dist/' },
    // 실제로 존재하는 정적파일의 경로
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
