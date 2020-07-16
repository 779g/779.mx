const path = require('path')
const webpack = require('webpack')

function pascalToSnake(s){
  return s
    .replace(/(?:^|\.?)([A-Z])/g, (x,y) => '_' + y.toLowerCase())
    //.replace(/(?:^|\?)([A-Z])/g, (x,y) => '_' + y.toLowerCase())
    .replace(/^_/, '')
}

/* PLUGINS */


// A. ANALYSIS
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// B. COMPRESSION
const TerserPlugin = require('terser-webpack-plugin')
//const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

// C. PREPARE AND LIST FILES
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon')
const LoadablePlugin = require('@loadable/webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// D. SECURITY
//const Dotenv = require('dotenv-webpack')

/* E. EXTRA
   const NullPlugin = require('webpack-null-plugin') */
const HtmlWebpackPlugin = require('html-webpack-plugin')
// https://momentjs.com/docs/

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
    filename     :( process.env.COMPILE ? '[name].js?[hash:8]' : 'main.js'),
    libraryTarget:'umd'
  },

  /* devtool: 'cheap-module-eval-source-map',
     watch:true, */
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

  stats:{
    //maxModules:Infinity,
    //exclude   :undefined
    entrypoints:false,
    children   :false
  },

  
  watchOptions:{
    ignored:'/src/translations/'
  },


  mode:'production',

  optimization:{
    nodeEnv  :'production',
    minimize :true,
    minimizer:[
      new TerserPlugin({})
    ],
    runtimeChunk:'single',

    splitChunks:{
      chunks            :(chunk) => chunk.name !== 'styles',
      maxInitialRequests:Infinity,
      minSize           :0,
      cacheGroups       :{
        fwrlines:{
          chunks  :'all',
          priority:100,
          test    :/fwrlines\/ds\/dist[\\/]/,
          name(module) {
            //const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            const nameSplit = module.context.split('/')
            //const componentName = pascalToSnake(nameSplit.slice(-1)[0])
            const distIndex = nameSplit.indexOf('dist')
            if ((nameSplit.length - 1) >= (distIndex +3)) {
              const family = nameSplit[distIndex + 2]
              const moduleName = nameSplit[distIndex +3 ]
              return ['ds', family, pascalToSnake(moduleName)].join('.')
            }
            return 'ds.main'
          }
        }
        

        /*
        vendor:{
          //priority:-10,
          test:/[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`
          }
        }
        */
      }
    }
  },

  plugins:[

    new HtmlWebpackPlugin({
      template:'./src/assets/html/index.prod.html'
    }),

    new CopyPlugin({
      patterns:[
        { from: './src/assets/fonts', to: './' }, //Where the root is the output dir
        { from: './src/assets/images', to: './' },
        { from: './src/assets/favicon', to: './' }, //https://www.favicon-generator.org/
        { from: './src/assets/other', to: './' },
        { from: './node_modules/@fwrlines/ds/src/assets/fonts', to: './' },
        { from: './node_modules/@fwrlines/ds/src/assets/images', to: './' }
      ]
    }),

    new LoadablePlugin(),

	 new MiniCssExtractPlugin({
      filename     :'main.css?[contenthash:5]',
      chunkFilename:'[name].css?[contenthash:5]'
    }),

    /*new LodashModuleReplacementPlugin({
      shorthands: true,
      currying: true,
      placeholders:true
		}),*/

    new BundleAnalyzerPlugin({
      analyzerMode  :'static',
      reportFilename:(process.env.COMPILE ? 'report.html' : 'report.dev.html'),
      openAnalyzer  :false
    }),

	  new ReactLoadableSSRAddon({
      filename:'assets-manifest.json'
    }),

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
            loader :MiniCssExtractPlugin.loader,
            options:{
              esModule:true
            }
          },
          {
            loader:'css-loader'
          }, {
            loader:'postcss-loader'
          }, {
            loader :'sass-loader',
            options:{
              sourceMap  :true,
              sassOptions:{
                includePaths:['./node_modules']
              }
            }
          }
        ]
      }

    ]

  }
  //  watch: true,
}


