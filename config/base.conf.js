module.exports = {
    specs: [
        './test/specs/**/*.js',
        './test/specs/navigation.spec.js'
    ],
    exclude: [

    ],

    logLevel: 'info',
    bail: 0,


    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    baseUrl: 'https://stage.localcoding.us',

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    }
}
