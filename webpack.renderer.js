const path = require('path')
const webpack = require('webpack')

/* PLUGINS */


// A. Externals

const nodeExternals = require('webpack-node-externals')

// B. Optimization

const TerserPlugin = require('terser-webpack-plugin')


// C. Analysis
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

//


module.exports = {
  resolve:{
    alias:{
      'apollo-client'   :path.resolve('./node_modules/@apollo/client'),
      'react'           :path.resolve('./node_modules/react'),
      'react-dom'       :path.resolve('./node_modules/react-dom'),
      'react-intl'      :path.resolve('./node_modules/react-intl'),
      'react-router-dom':path.resolve('./node_modules/react-router-dom')
    },
    modules:[
      path.resolve(__dirname, './src'),
      'node_modules'
    ],
    extensions:[
      '.js'
    ]
  },

  entry:[
    path.resolve(path.join(__dirname, 'src/ssr/renderer.gql.js'))
    //path.resolve(path.join(__dirname, 'src/renderer.js'))
  ],

  output:{
    path         :path.resolve(__dirname, 'api/'),
    publicPath   :'/',
    filename     :'renderer.js',
    //newparameter :'something',
    libraryTarget:'commonjs2'
  },

  plugins:[
    new BundleAnalyzerPlugin({
      analyzerMode  :'static',
      reportFilename:('renderer.report.html'),
      openAnalyzer  :false
    }),

    new webpack.optimize.LimitChunkCountPlugin({
		      maxChunks:1

    })

  ],

  watchOptions:{
    ignored:'/src/translations/'
  },

  optimization:process.env.COMPILE ? {
    nodeEnv  :'production',
    minimize :true,
    minimizer:[
      new TerserPlugin({})
    ]
  } : {},

  target   :'node',
  mode     :'production',
  devtool  :'inline-cheap-source-map',
  externals:[nodeExternals()],

  module:{
    rules:[
      {
        test   :/\.(js)$/,
        exclude:/node_modules/,
        use    :{
          loader:'babel-loader'
        }
      },
      {
        test  :/\.(scss|css)$/,
        loader:'ignore-loader'
      }
    ]
  }

}


