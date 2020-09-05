const path = require("path")

module.exports = {
    entry : {
        bundle : "./app/index.js"
    },
    output : {
        path: path.resolve(__dirname, "dist"),
        filename : "[name].js",
        publicPath : "http://localhost:3000/dist"
    }
}