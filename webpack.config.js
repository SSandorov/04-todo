// Archivo de configuración para el webpack

// Para poder mandar a producción los archivos HTML empleamos el siguiente plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Para poder mandar a producción mis archivos de estilos, en este caso mandaré sólo el
// global
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Para poder mover mis assets a la carpeta dist
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',

    output: {
        // clean nos actualiza el directorio dist automáticamente
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Plantilla Webpack',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]
}