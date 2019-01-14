const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
    apiKey: 'a6cdfb5b73',
    apiSecret: '53a505cd07749337b6147e472',
    targets: {
        chromeDesktop: new RemoteBrowserTarget('chrome', {
            viewport: '1920x1080'
        }),
        firefoxDesktop: new RemoteBrowserTarget('firefox', {
            viewport: '1920x1080'
        }),
        safariDesktop: new RemoteBrowserTarget('safari', {
            viewport: '1920x1080'
        }),
        internetExplorer11: new RemoteBrowserTarget('internet explorer', {
            viewport: '1920x1080'
        }),
        edge: new RemoteBrowserTarget('edge', {
            viewport: '1920x1080'
        }),
        firefoxMobile: new RemoteBrowserTarget('firefox', {
            viewport: '375x667'
        }),
        chromeMobile: new RemoteBrowserTarget('chrome', {
            viewport: '375x667'
        }),
        safariMobile: new RemoteBrowserTarget('safari', {
            viewport: '375x667'
        })
    },
    type: 'react',
    customizeWebpackConfig: config => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        });
        return config;
    }
};
