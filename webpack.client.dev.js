const path = require('path')
const webpack = require('webpack')


/* PLUGINS */


// A. SECURITY
//const Dotenv = require('dotenv-webpack') //Deprecated => replaced by babel plugin //Deprecated => replaced by babel plugin

// B.DISPLAY
const HtmlWebpackPlugin = require('html-webpack-plugin')

// C. PREPARE AND LIST FILES
//const ReactLoadableSSRAddon = require('react-loadable-ssr-addon')
//const LoadablePlugin = require('@loadable/webpack-plugin')
//const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve:{
    alias:{
      'react'           :path.resolve('./node_modules/react'),
      'react-dom'       :path.resolve('./node_modules/react-dom'),
      'react-intl'      :path.resolve('./node_modules/react-intl'),
      'react-router-dom':path.resolve('./node_modules/react-router-dom')
    }
  },

  entry:[
    './src/client.js'
  ],
  output:{
    path         :path.resolve(__dirname, 'public/'),
    publicPath   :'/',
    filename     :'[id].js?[hash:8]',
    libraryTarget:'umd'
  },
  devtool  :'cheap-module-eval-source-map',
  devServer:{
    contentBase:[
      path.resolve(__dirname, './public'),
      path.resolve(__dirname, './src/assets/fonts'),
      path.resolve(__dirname, './src/assets/images'),
      path.resolve(__dirname, './src/assets/favicon'),
      path.resolve(__dirname, './src/assets/other'),
      path.resolve(__dirname, './node_modules/@fwrlines/ds/src/assets/fonts'),
      path.resolve(__dirname, './node_modules/@fwrlines/ds/src/assets/images')
    ],
    watchContentBase  :true,
    historyApiFallback:true,
    port              :3333,
    host              :'0.0.0.0',
    hot               :true,
    liveReload        :false,
    clientLogLevel    :'warning',
    disableHostCheck  :true //rdp
  },

  watchOptions:{
    ignored:'/src/translations/'
  },

  optimization:{
    usedExports:true
  },

  mode   :'development',
  plugins:[

    new HtmlWebpackPlugin({
      template:'./src/assets/html/index.dev.html'
    }),

    /*
	  new ReactLoadableSSRAddon({
      filename: 'assets-manifest.json'
    }),

    new LoadablePlugin(),
    */

    new webpack.HotModuleReplacementPlugin()

  ],
  module:{
    rules:[
      {
        test   :/\.(js|jsx)$/,
        exclude:/node_modules/,
        use    :{
          loader :'babel-loader',
          options:{
            presets:[
              [ '@babel/preset-env', { modules: false }]
            ]
          }
        }
      },
      {
        test:/\.(scss|css)$/,
        use :[
          {
            loader:'style-loader'
          }, {
            loader:'css-loader'
          }, {
            loader:'sass-loader'
          }
        ]
      }

    ]

  }
}


