const webpack = require('webpack')
const path = require('path')


module.exports = {

    resolve:{
        extensions:['*', '.js']
    },
    entry: './assets/js/vendor/angular.js',
    entry: {
        app: './assets/js/app.js', 
        vendor:'./index.js',
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jquery:'jQuery',
          jQuery: "jquery"
        })
    ],
    output: {
        path: path.resolve(__dirname,'./tmp/builder'),
        filename: 'bundle-[name].js'
    },   
    resolve:{
        extensions:['*', '.js'],
        mainFields: ['vendors', 'app']
    }
    
}