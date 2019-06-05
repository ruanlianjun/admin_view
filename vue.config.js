const path = require('path');
const webpack = require('webpack');

module.exports = {
    css: {
        loaderOptions: {
            less: {
                globalVars: require('./src/assets/css/var.js')
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                _config: path.resolve(__dirname, 'src/config/'),
                _js: path.resolve(__dirname, 'src/js/'),
                _images: path.resolve(__dirname, 'src/images/'),
                _views: path.resolve(__dirname, 'src/views/'),
                _store: path.resolve(__dirname, 'src/store/')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                c: [path.resolve(__dirname, 'src/app.js'), 'default'],
                HeyUI: 'heyui',
                Utils: [path.resolve(__dirname, 'src/js/common/utils'), 'default'],
                R: [path.resolve(__dirname, 'src/js/common/http'), 'default']
            })
        ]
    },
    devServer: {
        host: '127.0.0.1',
        proxy: {
            '/api/*': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                secure: false
            }
        }
    }
};
