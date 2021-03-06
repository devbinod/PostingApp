const { resolve } = require('path')

const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
    entry: {
        main: resolve('./src/index.ts')
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                loader: ['awesome-typescript-loader?module=es6'],
                exclude: [/node_modules/, /\.node_modules/]
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
}

module.exports = config
