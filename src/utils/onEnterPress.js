export default (callback, event) => {
    if (event.defaultPrevented) {
        return;
    }

    const { key, keyCode, which } = event;

    if (key === 'Enter' || which === 13 || keyCode === 13) {
        callback(event);
    }
};

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
