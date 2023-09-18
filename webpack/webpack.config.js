const path = require('path') // встроенный модуль в js для работы с путями
const HTMLWebpackPlugin = require('html-webpack-plugin') // плагин для работы с html
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
//console.log('isDev', isDev)

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (!isDev) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

const filename = ext => '[name]' + (isDev ? '' : '.[fullhash]') + `.${ext}`

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: './index.html', // './src/index.html'
            minify: !isDev // итак по умолчанию, можно передавать объект с параметрами
        }), // для плагинов новые создаются инстенсы
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css'),
            //filename: "[name].[contenthash].css",
        })
    ]

    // перенесено в комманду "stats": "webpack --json > stats.json && webpack-bundle-analyzer stats.json"
    // if (isDev) {
    //     base.push(new BundleAnalyzerPlugin())
    // }

    return base
}

module.exports = {
    context: path.resolve(__dirname, 'src'), // можно указать путь, чтобы дальше не писать в entry, template и т.д.
    mode: 'development', // или production
    //entry: './src/assets/js/index.js', // (вход), вебпак начинает отсюда
    entry: { // для нескольких входных точек
        main: './assets/js/index.js', // './src/assets/js/index.js',
        analytics: './assets/js/analytics.js'
    },
    output: { // результат работы (куда складывать)
        //filename: 'bundle.js', // все js в этот файл
        //filename: '[name].bundle.js', // для нескольких entry можно указать шаблон (main, analytics)
        //filename: '[name].[contenthash].js', // чтобы не кэшировалось у юзеров
        filename: filename('js'), // чтобы не кэшировалось у юзеров
        path: path.resolve(__dirname, 'dist') // __dirname - сисетмная переменная, итог будет './dist'
    },
    resolve: {
        //extensions: ['.js', '.json', '.png'], // можно указать расширения, кот. будет понимать вебпак и не писать их
        alias: {
            '@other_dir': path.resolve(__dirname, 'other_dir/dir')
        }
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev
    },
    devtool: isDev ? 'source-map' : false,
    plugins: plugins(),
    module: { // лоадеры - возможность работать с др. типами файлов (знает только js по умолч)
        rules: [
            {
                test: /\.css$/, // регул выражение, когда встречает делает Use
                //use: ['style-loader', 'css-loader'] // послед., справа налево - будет добавлять inline css
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ], // css в отдельные файлы (плагин)
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|svg|jpe?g)$/,
                //use: ['file-loader'] // для работы с файлмами, напр. с картинками
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            }
        ]
    }
}