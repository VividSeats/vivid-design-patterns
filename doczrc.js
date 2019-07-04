import { css } from 'docz-plugin-css';

export default {
    debug: true,
    port: 8080,
    plugins: [
        css({
            preprocessor: 'sass'
        })
    ],
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
