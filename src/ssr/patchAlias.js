const moduleAlias = require('module-alias')

// Or multiple aliases
moduleAlias.addAliases({
  //'apollo-client'   :__dirname + '/../../node_modules/@apollo/client',
  'react'           :__dirname + '/../../node_modules/react',
  'react-dom'       :__dirname + '/../../node_modules/react-dom',
  'react-intl'      :__dirname + '/../../node_modules/react-intl',
  'react-router-dom':__dirname + '/../../node_modules/react-router-dom'

})

console.log('OK => Alias PATCHED in dir ', __dirname)

export default 'patched'
