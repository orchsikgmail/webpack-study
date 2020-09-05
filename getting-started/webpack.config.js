const path = require('path');

module.exports = {
    // entry: ["./app/index.js", ... ],
    // entry: "./app/index.js",
    entry: {
        index: "./app/index.js",
    },
    output: {
        // filename: "index.js",    // 정적 output 파일명 생성
        // filename: "[hash].js",      // 특정 webpack 빌드에 따른 output 파일명 생성
        // filename: "[chunkhash].js", // 특정 webpack chunk에 따른 output 파일명 생성
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    }
}