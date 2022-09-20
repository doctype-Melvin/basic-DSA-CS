const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "[name].index.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
    devtool: "inline-source-map",
    devServer: {
        static: "./dist"
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
    ],
    },
    optimization: {
        runtimeChunk: "single",
    }
};