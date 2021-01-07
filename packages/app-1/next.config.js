const { withModuleFederation } = require('@module-federation/nextjs-mf')

module.exports = {
  webpack: (config, options) => {
    const mfConf = {
      mergeRuntime: true, //this is experimental,  read below
      name: 'app1',
      library: { type: config.output.libraryTarget, name: 'app1' },
      filename: 'static/runtime/remoteEntry.js',
      remotes: {},
      exposes: {},
      shared: [],
    }
    withModuleFederation(config, options, mfConf)

    return config
  },
}
