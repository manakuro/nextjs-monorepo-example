const { withModuleFederation } = require('@module-federation/nextjs-mf')
const path = require('path')

module.exports = {
  webpack: (config, options) => {
    const { isServer } = options
    const mfConf = {
      mergeRuntime: true, //this is experimental,  read below
      name: 'app1',
      library: { type: config.output.libraryTarget, name: 'app1' },
      filename: 'static/runtime/remoteEntry.js',
      remotes: {
        ui: isServer
          ? path.resolve(
              __dirname,
              '../ui/.next/server/static/runtime/remoteEntry.js',
            )
          : 'ui',
      },
      exposes: {},
      shared: [],
    }
    withModuleFederation(config, options, mfConf)

    return config
  },
}
