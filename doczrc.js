import { css } from 'docz-plugin-css';

export default {
    debug: true,
    port: 8083,
    onCreateWebpackChain: config => {
        // Allow SCSS imports
        config.module
            .rule('scss')
            .test(/\.css|scss|sass$/)
            .use('style')
            .loader('style-loader')
            .end()
            .use('css')
            .loader('css-loader')
            .end()
            .use('sass')
            .loader('sass-loader')
            .end();
    },
    menu: ['Home', 'Foundation', 'Components', 'Guidelines'],
    themeConfig: {
        logo: {
            src: '//a.vsstatic.com/common/logo/vs-full-logo.png',
            width: 220
        },
        fonts: {
            display: '"Roboto", sans-serif',
            ui: '"Roboto", sans-serif'
        }
    },
    dest: 'server/static/'
};
