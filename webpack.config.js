const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        assetModuleFilename: "public/[hash]/[text][query]"
    },
    target: 'web',
    devServer: {
        port: 3000,
        static: ["./public"],
        open: true,
        hot: true,
        liveReload: true
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx|ts)$/,
            exclude: /node_modules/,
            use: {
                 loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "wolves trade",
            template: path.join(__dirname, "src", "index.html")
        })
    ]
}