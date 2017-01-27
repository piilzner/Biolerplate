var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./public/js/app.js",
    output: {
        path: '/',
        publicPath: 'http://localhost:3000/',
        filename: "/public/dist/app.js",
    },
    resolve: {
        extensions: ["", ".js"]
    },
    module: {
        loaders: [
            { 
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                } 
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./public/dist/style.css', {
            allChunks: true
        })
    ]
};