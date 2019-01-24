import React from 'react';
import PropTypes from 'prop-types';
import onEnterPress from '../../utils/onEnterPress';

class SearchField extends React.Component {
    state = { inputValue: this.props.value };

    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.string,
        type: PropTypes.string,
        autoComplete: PropTypes.string,
        placeholder: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        onMouseLeave: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onKeyPress: PropTypes.func,
        onSubmit: PropTypes.func
    };

    static defaultProps = {
        id: 'searchField',
        name: 'searchField',
        value: '',
        type: 'text',
        autoComplete: 'off',
        placeholder: '',
        className: '',
        onClick: () => {},
        onFocus: () => {},
        onBlur: () => {},
        onChange: () => {},
        onMouseLeave: () => {},
        onMouseEnter: () => {},
        onKeyPress: () => {},
        onSubmit: () => {}
    };

    resetInput = () => {
        this.setState({ inputValue: '' }, this.props.onChange(''));
    };

    onChange = event => {
        const { value } = event.target;
        this.setState(
            {
                inputValue: value
            },
            this.props.onChange(value)
        );
    };

    onKeyPress = event => {
        const { value } = event.target;
        const isEnterPressed = event.which === 13 || event.keyCode === 13 || event.key === 'Enter';
        if (isEnterPressed) {
            this.props.onSubmit(value);
        }
        this.props.onKeyPress(value);
    };

    render() {
        const { className, onClick, onFocus, onMouseEnter, onMouseLeave, onBlur, placeholder, name, autoComplete, id, type } = this.props;
        const { inputValue } = this.state;
        const props = {
            onMouseEnter,
            onMouseLeave,
            onClick,
            onFocus,
            onBlur,
            placeholder,
            name,
            id,
            type,
            autoComplete,
            value: inputValue,
            onChange: this.onChange,
            onKeyPress: this.onKeyPress
        };
        return (
            <div className="vp-search-field">
                <i className="vp-search-field__icon-search material-icons">&#xE8B6;</i>
                <input className={`vp-search-field__input ${className}`} {...props} />
                {!!inputValue && (
                    <i
                        className="vp-search-field__icon-close material-icons"
                        onClick={this.resetInput}
                        onKeyPress={onEnterPress.bind(this.resetInput, this)}>
                        &#xE5C9;
                    </i>
                )}
            </div>
        );
    }
}

export default SearchField;
