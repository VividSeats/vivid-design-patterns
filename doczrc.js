import { css } from 'docz-plugin-css';

export default {
    debug: true,
    port: 8080,
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
    menu: ['Home', 'Foundation', 'Components'],
    themeConfig: {
        logo: {
            src: '//a.vsstatic.com/common/logo/logo.svg',
            width: 140
        },
        styles: {
            body: {
                fontFamily: "'Roboto', 'Arial', 'Helvetica', sans-serif"
            }
        }
    },
    dest: 'server/static/'
};
