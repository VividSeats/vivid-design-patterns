import React from 'react';
import PropTypes from 'prop-types';

const VividSeatsLogo = ({ href, className, ...htmlAttributes }) => (
    <a className={`brand ${className}`} href={href} {...htmlAttributes}>
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571.427 114.668">
            <path d="M119.31 353.007l.014-.012-.015.012z" />
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="419.317" y1="501.718" x2="419.317" y2="331.135">
                <stop offset="0" stopColor="#C11C21" />
                <stop offset="1" stopColor="#DC2127" />
            </linearGradient>
            <path
                className="st0"
                fill="url(#SVGID_1_)"
                d="M426.243 440.446c-.273.133-.564.234-.874.304-.31.068-.63.085-.95.05-.09-.005-.19-.013-.28-.023-.1-.012-.2-.03-.3-.057-.17-.045-.32-.12-.47-.224s-.28-.22-.4-.344c-.12-.124-.22-.247-.31-.37-.09-.122-.15-.22-.2-.297v.002c-.07.046-.13.09-.19.13-.17.114-.34.203-.5.264-.34.13-.65.17-.93.11-.28-.06-.53-.19-.76-.41-.23-.21-.41-.48-.57-.79-.24.44-.47.85-.71 1.25s-.45.76-.65 1.08c-.19.32-.36.58-.49.79l-.25.4c-.09.16-.2.28-.35.37-.15.09-.3.14-.46.15-.156.02-.3-.02-.43-.09s-.23-.2-.29-.37c-.03-.09-.09-.25-.18-.5s-.19-.54-.32-.89c-.126-.35-.27-.74-.43-1.17-.16-.43-.33-.88-.51-1.35l-.55-1.43c-.187-.48-.37-.95-.554-1.4-.183-.45-.36-.87-.527-1.27-.17-.39-.7-2-1.2-2-.11 0-.25.12-.35.22V445h16v-5.27c-.1.085-.21.17-.32.258-.23.17-.48.324-.758.458z"
            />
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="419.317" y1="496.709" x2="419.317" y2="330.3">
                <stop offset="0" stopColor="#C11C21" />
                <stop offset="1" stopColor="#DC2127" />
            </linearGradient>
            <path
                className="st1"
                fill="url(#SVGID_2_)"
                d="M411.317 429v2.85c.072-.07.145-.136.22-.2.147-.13.294-.234.438-.316.145-.082.28-.123.41-.123.16 0 .333.09.518.25.185.17.376.39.577.68.2.29.405.63.616 1.02.21.39.423.81.634 1.25.21.45.42.91.623 1.39.205.48.4.96.59 1.43.19.47.366.93.53 1.37.165.45.314.85.447 1.22.134.37.248.69.344.97l.21.61c.134-.22.28-.46.443-.74.162-.27.326-.56.49-.85.165-.29.324-.58.48-.86l.42-.76c-.103-.32-.18-.66-.23-1.01-.05-.35-.074-.7-.07-1.05.005-.34.038-.67.1-.98.063-.31.155-.58.278-.82.122-.24.275-.43.46-.57.185-.14.4-.21.65-.21.235 0 .412.06.53.18.117.12.188.29.21.5.022.21.002.46-.06.75-.063.29-.154.6-.274.94-.12.34-.26.69-.43 1.06-.17.37-.35.75-.54 1.12.05.16.11.32.19.49.08.17.17.33.28.47.11.14.24.26.38.35.15.09.31.14.49.14.19 0 .4-.04.62-.16.34-.17 1.2-1.15 1.53-1.41.14-.11.27-.17.39-.2.07-.02.15-.03.24-.03s.18.01.26.04c.11.02.26.09.43.19.18.11.35.24.53.39.17.16.33.33.46.51.13.19.21.38.24.56.02.17.01.33-.03.49.24-.02.48-.1.7-.23.23-.13.46-.31.7-.53l.02-.02v-10.09h-16z"
            />
            <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="423.637" y1="445.001" x2="423.637" y2="429.002">
                <stop offset="0" stopColor="#C11C21" />
                <stop offset="1" stopColor="#DC2127" />
            </linearGradient>
            <path
                className="st2"
                fill="url(#SVGID_3_)"
                d="M423.408 439.505c.11.075.225.13.348.16.122.03.245.018.37-.04.102-.05.168-.11.2-.186.03-.08.037-.16.02-.24-.018-.09-.056-.17-.113-.25-.058-.09-.123-.16-.197-.23-.073-.07-.148-.13-.227-.17-.08-.05-.15-.07-.21-.07-.11 0-.22.05-.33.15-.08.07-.17.16-.26.26l-.11.11.03.04c.04.05.1.11.16.18.08.09.18.17.28.25z"
            />
            <path
                className="st3"
                fill="#FFFFFF"
                d="M427.3 439.105c-.235.227-.467.405-.693.537-.227.13-.46.207-.7.23.04-.16.05-.322.033-.487-.026-.186-.106-.374-.24-.56-.133-.187-.286-.357-.46-.51-.173-.153-.348-.283-.523-.39-.176-.108-.32-.172-.43-.193-.08-.022-.166-.034-.257-.034-.092 0-.17.012-.237.034-.12.025-.247.093-.384.2-.34.258-1.19 1.235-1.53 1.41-.23.117-.44.164-.62.164-.19 0-.35-.046-.49-.137-.15-.1-.27-.21-.38-.36-.11-.14-.2-.3-.28-.47-.08-.17-.14-.34-.19-.49.19-.38.37-.75.54-1.12.17-.37.31-.73.43-1.06.12-.34.21-.65.27-.94.06-.29.08-.54.06-.75-.02-.21-.09-.38-.21-.5s-.3-.18-.53-.18c-.25 0-.47.07-.65.21-.19.14-.34.32-.46.56-.12.24-.22.51-.28.82-.06.31-.1.64-.1.98-.01.34.02.69.07 1.04.05.35.12.69.23 1.01l-.42.76c-.16.28-.32.57-.48.86-.17.29-.33.57-.49.85-.17.27-.31.52-.45.74-.04-.13-.11-.34-.21-.61l-.34-.96-.45-1.22c-.17-.44-.34-.9-.53-1.37-.19-.47-.39-.95-.59-1.43-.21-.48-.41-.95-.63-1.39-.21-.45-.43-.86-.64-1.25-.21-.39-.42-.73-.62-1.02-.2-.29-.4-.52-.58-.68-.19-.17-.36-.25-.52-.25-.13 0-.27.04-.41.12-.15.08-.29.19-.44.31-.08.066-.15.13-.22.2v.68c.1-.1.24-.215.35-.215.5 0 1.03 1.6 1.2 2 .17.395.34.82.52 1.27.18.45.36.92.55 1.4l.55 1.43c.18.47.35.92.51 1.35l.43 1.175.32.887.18.494c.06.176.15.3.28.376.13.073.28.11.43.1.15-.01.3-.06.45-.15.15-.087.26-.208.35-.36l.25-.397.49-.79c.195-.32.41-.68.646-1.078.235-.4.47-.82.707-1.25.155.31.344.58.566.795.225.218.476.35.756.41s.59.03.93-.1c.16-.06.32-.15.49-.264.06-.04.12-.084.18-.13v-.002c.047.08.11.18.2.3.086.12.19.248.306.37.12.127.25.24.394.346s.3.18.467.22c.1.026.2.045.3.057.1.01.19.02.28.025.325.032.64.02.95-.05.31-.07.6-.17.875-.307.27-.134.522-.29.75-.46.11-.09.22-.173.32-.26v-.64c-.01.008-.02.01-.02.017zm-7.984-2.103l.002-.002-.002.002zm5.01 2.437c-.032.07-.1.13-.2.18-.125.06-.248.07-.37.04-.123-.03-.238-.09-.348-.16-.108-.08-.205-.16-.29-.25-.064-.07-.118-.13-.162-.19-.014-.02-.026-.03-.037-.05l.1-.12c.09-.1.18-.19.25-.27.1-.11.21-.16.32-.16.06 0 .12.02.2.06.08.04.15.1.22.16.07.07.14.14.2.22.06.08.09.16.11.25.02.08.01.16-.02.24z"
            />
            <path
                className="st4"
                fill="#33333"
                d="M262.68 28.158c0-9.073 2.257-16.035 6.762-20.883 4.51-4.85 10.975-7.275 19.4-7.275 8.424 0 14.825 2.425 19.207 7.275 4.37 4.85 6.57 11.81 6.57 20.883v3.598h-16.67v-4.693c0-7.352-2.94-11.03-8.84-11.03s-8.84 3.682-8.84 11.04c0 3.078.64 6.014 1.92 8.804 1.29 2.79 2.95 5.31 5 7.554 2.04 2.25 4.26 4.5 6.65 6.75 2.39 2.26 4.81 4.56 7.28 6.88 2.46 2.33 4.71 4.87 6.75 7.6 2.03 2.74 3.69 5.97 4.97 9.7 1.28 3.73 1.92 7.78 1.92 12.16 0 9.08-2.24 16.04-6.73 20.89-4.49 4.85-10.95 7.28-19.37 7.28s-14.95-2.42-19.56-7.27c-4.61-4.85-6.92-11.81-6.92-20.88v-6.89h17.13v7.98c0 7.25 2.88 10.9 8.64 10.95h.07c6.07 0 9.11-3.65 9.11-10.95 0-4.17-1.19-8.09-3.56-11.77-2.38-3.67-5.26-7-8.64-9.97l-10.16-9.39c-3.4-3.29-6.26-7.35-8.61-12.2-2.35-4.84-3.52-10.21-3.52-16.11m79.23-10.87V48.6h24.16v15.95H341.9V97.4h30.43v16.03H324.3V1.25h48.032v16.034zM423.1 1.27l17.023 112.16h-16.87l-3.05-20.335h-21.63l-3.046 20.337h-16.15L396.36 1.258h26.756zm-13.73 19.64l-8.51 56.928h17.058L409.38 20.9zm28.013-3.613V1.25H491.9v16.04h-18.46v96.13h-17.6V17.29zm59.92 10.87c0-9.075 2.25-16.037 6.76-20.885C508.58 2.425 515.05 0 523.473 0s14.826 2.425 19.21 7.275c4.38 4.85 6.57 11.81 6.57 20.883v3.598H532.59v-4.693c0-7.352-2.94-11.03-8.84-11.03-5.89 0-8.838 3.682-8.838 11.04 0 3.078.642 6.014 1.93 8.804 1.284 2.79 2.945 5.31 4.994 7.554 2.045 2.25 4.263 4.5 6.652 6.75 2.39 2.26 4.815 4.56 7.28 6.88 2.463 2.33 4.713 4.87 6.748 7.6 2.038 2.74 3.695 5.97 4.976 9.7 1.277 3.73 1.92 7.78 1.92 12.16 0 9.08-2.244 16.04-6.724 20.89-4.49 4.85-10.944 7.28-19.372 7.28-8.425 0-14.946-2.42-19.555-7.27-4.6-4.85-6.91-11.81-6.91-20.88v-6.89h17.13v7.98c0 7.25 2.88 10.9 8.65 10.95h.07c6.08 0 9.12-3.65 9.12-10.95 0-4.17-1.19-8.09-3.56-11.77-2.37-3.67-5.25-7-8.64-9.97l-10.17-9.39c-3.39-3.28-6.25-7.35-8.6-12.2-2.34-4.84-3.52-10.21-3.52-16.11"
            />
            <path
                className="st5"
                fill="#DC1F27"
                d="M71.522 1.252h17.6v112.164h-17.6zm96.404 0h17.6v112.164h-17.6zm30.428 112.164V1.252H226.2c17.525 0 26.286 9.257 26.286 27.767v56.7c0 18.46-8.76 27.69-26.285 27.69h-27.84zm27.532-96.13h-9.933v80.097h9.933c5.998 0 8.996-3.624 8.996-10.872V28.16c0-7.246-2.997-10.872-8.996-10.872M43.536 1.252L31.78 92.602 20.024 1.252H0l17.505 112.165h28.55L63.56 1.252zm97.512 0l-11.757 91.35-11.75-91.35H97.51l17.506 112.164h28.55L161.07 1.252z"
            />
            <path
                className="st4"
                fill="#33333"
                d="M553.81 106.068c0-5.215 4.152-8.6 8.81-8.6s8.807 3.385 8.807 8.6c0 5.238-4.15 8.6-8.807 8.6-4.658 0-8.81-3.362-8.81-8.6zm8.81-6.792c-3.662 0-6.536 2.828-6.536 6.792s2.874 6.792 6.536 6.792c3.615 0 6.536-2.828 6.536-6.792s-2.92-6.792-6.536-6.792zm-1.53 11.59h-1.9v-9.62h3.636c2.413 0 3.733.765 3.733 2.852 0 1.762-1.07 2.457-2.32 2.572l2.32 4.197h-2.11l-2.16-4.104h-1.21v4.104zm0-5.586h1.647c1.39 0 1.876-.442 1.876-1.345s-.582-1.206-1.97-1.206h-1.552v2.55z"
            />
        </svg>
    </a>
);

VividSeatsLogo.defaultProps = {
    href: '/',
    className: ''
};

VividSeatsLogo.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string
};

export default VividSeatsLogo;