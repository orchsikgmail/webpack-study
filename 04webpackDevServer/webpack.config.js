const path = require("path")

module.exports = {
    entry : {
        bundle : "./app/index.js"
    },
    output: {
        path : path.resolve(__dirname, "dist"),
        filename : "[name].js",
        publicPath : "dist",
    },
    devtool : "cheap-eval-source-map",
    devServer : {
        publicPath : "/dist/",
        port : 9000,
    },
}