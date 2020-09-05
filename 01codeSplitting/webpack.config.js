const path = require("path");
const MiniCssExtractPlugin  = require("MiniCssExtractPlugin")

module.exports = {
    entry : {
        index : "./app/index.js"
    },
    output: {
        path : path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module : {
        rules : [{
            test : /\.css$/,
            // use : ["style-loader", "css-loader"]     // 인라인스타일로 모듈화
            use: [
                {
                    loader : MiniCssExtractPlugin.loader,
                    options: {
                        hmr: process.env.NODE_ENV === 'development',
                    }
                },
                "css-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]

}