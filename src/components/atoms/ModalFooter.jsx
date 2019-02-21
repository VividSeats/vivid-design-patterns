import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ModalFooter = ({ className = '', children, onDismiss = () => {}, ...htmlAttributes }) => (
    <div className={`vdp-modal__footer ${className}`} {...htmlAttributes}>
        {!children ? (
            <Button importance="text" onClick={onDismiss}>
                Dismiss
            </Button>
        ) : (
            <React.Fragment>{children}</React.Fragment>
        )}
    </div>
);

ModalFooter.displayName = 'ModalFooter';

ModalFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onDismiss: PropTypes.func
};

export default ModalFooter;
