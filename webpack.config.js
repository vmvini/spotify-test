const webpack = require('webpack');
const path = require('path');
const WebpackClearConsole = require("webpack-clear-console").WebpackClearConsole;

module.exports = {

    resolve: {
        modules: [
            path.resolve('./app/'),
            path.resolve('./app/components/'),
            path.resolve('./app/pages/'),
            path.resolve('./app/routes/'),
            'node_modules',
            'bower_components'
        ]
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    entry: {
        app: path.resolve(__dirname, './app/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].js',
        chunkFilename: "chunk_[id].js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ["ng-annotate-loader", "babel-loader?presets[]=es2015"]
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve('./app/'), 
                    path.resolve('./node_modules/'), 
                    path.resolve('./bower_components/')
                ],
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/, // Only .css files
                include: [
                    path.resolve('./app/'), 
                    path.resolve('./node_modules/'), 
                    path.resolve('./bower_components/')
                ],
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["url-loader?limit=10000&mimetype=application/font-woff"] },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["file-loader"] },
            {
                test: /\.svg$/,
                use: ['svg-loader?{png:{scale:2}}']
            },
            { test: /\.(png|jpg)$/, use: ['url-loader?limit=8192'] },

            { test: /\.js$/, loader: "webpack-strip?strip[]=console.log" }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
    ]

};