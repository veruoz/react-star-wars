const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    alias({
        '@components': 'src/components',
        '@ui': 'src/components/UI',
        '@containers': 'src/containers',
        '@constants': 'src/constants',
        '@hoc-helpers': 'src/hoc-helpers',
        '@services': 'src/services',
        '@utils': 'src/utils',
        '@styles': 'src/styles',
        '@routes': 'src/routes',
        '@hooks': 'src/hooks',
        '@store': 'src/store',
    })(config)
    return config;
}

