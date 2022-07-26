/* @ts-ignore */
import path from 'path'
import { Configuration } from 'webpack'

/* @ts-ignore */
import FilterWarningsPluginWebpack from 'webpack-filter-warnings-plugin'

const pathResolve = (myPath: string) => path.resolve(myPath)

const webpackConfig: Configuration = {
    mode: 'production',
    target: 'node',
    entry: pathResolve('src/index.ts'),
    output: {
        path: pathResolve('dist'),
        filename: '[name].js',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },

    plugins: [
        /* @ts-ignore */
        new FilterWarningsPluginWebpack({
            exclude: /Critical dependency/
        })
    ],

    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            '@controllers': pathResolve('src/controllers'),
            '@services': pathResolve('src/services'),
            '@routes': pathResolve('src/routes'),
            '@models': pathResolve('src/models'),
            '@utils': pathResolve('src/utils'),
            '@interfaces': pathResolve('src/interfaces')
        }
    }
}

export default webpackConfig