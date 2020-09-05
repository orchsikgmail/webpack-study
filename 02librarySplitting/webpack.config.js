const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin")

module.exports = {
    entry: {
        main: "./app/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    plugins: [
        new ManifestPlugin({
            filename: "manifest.json",
            path: path.resolve(__dirname, "dist")
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                // lodash: {
                //     test: /[\\/]node_modules[\\/](lodash)[\\/]/,
                //     name: 'lodash',
                //     chunks: 'all',
                // },
                // moment: {
                //     test: /[\\/]node_modules[\\/](moment)[\\/]/,
                //     name: 'moment',
                //     chunks: 'all',
                // },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        }
    }
}
