import { css } from 'docz-plugin-css';

export default {
    debug: true,
    port: 8080,
    plugins: [
        css({
            preprocessor: 'sass'
        })
    ],
    menu: ['Vivid Design Patterns', 'Foundation', 'Components'],
    themeConfig: {
        logo: {
            src: '//a.vsstatic.com/common/favicon/apple-touch-icon.png',
            width: 180
        },
        styles: {
            body: {
                fontFamily: "'Roboto', 'Arial', 'Helvetica', 'sans-serif"
            }
        }
    },
    dest: 'server/static/'
};
