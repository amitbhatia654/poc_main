const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container
const path = require('path')

module.exports = {
    entry: "./src/index",
    mode: "production",
    devServer: {
        static: path.join(__dirname, 'build'),
        port: 3010,
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname, "build"), // Ensure output is set
        filename: "bundle.js",
        publicPath: "/",

    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            }
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "mainApp",
            remotes: {
                app1: "app1@https://email-micro-fa.vercel.app/remoteEntry.js",
                app2: "app2@https://chatting-micro-fa.vercel.app/remoteEntry.js",
            },

            shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        })
    ],
};