const { withModuleFederation } = require('@module-federation/nextjs-mf')

module.exports = {
  webpack: (config, options) => {
    const { isServer } = options
    const mfConf = {
      mergeRuntime: true, //this is experimental,  read below
      name: 'ui',
      library: { type: config.output.libraryTarget, name: 'ui' },
      filename: 'static/runtime/remoteEntry.js',
      remotes: {},
      exposes: {
        './atoms': './src/components/atoms',
      },
      shared: [],
    }

    if (!isServer) {
      config.output.publicPath = 'http://localhost:3001/_next/'
    }

    withModuleFederation(config, options, mfConf)

    return config
  },
}
