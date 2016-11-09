import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        path.resolve(__dirname, 'src/index') // Use path.resolve to assure consistent cross-platform support. Important that this is last, ORDER IS CRITICAL
    ],
    target: 'web', // Could also set this to node to tell webpack we're making an app in node. Bundles up the code so that the web browser understands.
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`. Webpack doesn't generate physical files, it creates them in memory and gives them to the browser.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Allows us to replace modules without having to do full browser refresh
        new webpack.NoErrorsPlugin() // prevents errors from breaking our hot-reloading experience, we'll see a nice message in the browser instead.
    ],
    module: { ///tell webpack the types of files to handle
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']}, // Look at webpack docs to figure out what this jargon means.
            {test: /(\.css)$/, loaders: ['style', 'css']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};