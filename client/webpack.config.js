const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devServer: {
        // Serve index.html as the base
        contentBase: path.resolve(__dirname, 'public'),
        port: 3000,
        // Enable compression
        compress: true,
        // Enable hot reloading
        hot: true,
        // Public path is root of content base
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // MiniCssExtractPlugin.loader,
                    // 3. Creates `style` nodes from JS strings and injects styles into DOM
                    'style-loader',
                    // 2. Translates CSS into CommonJS (for webpack to intepret as webpack only knows js)
                    'css-loader',
                    // 1. Compiles Sass to CSS
                    'sass-loader',
                ],
                // include: [path.resolve(__dirname, 'styles')],
            },
        ],
    },
    output: {
        publicPath: '/public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },
    target: 'web',
    devtool: 'eval-source-map',
    devServer: {
        port: 3000,
        stats: 'errors-only',
    },
};
