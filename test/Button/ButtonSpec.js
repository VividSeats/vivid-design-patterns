import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../../src/components/atoms/Button';

describe('<Button />', () => {
    it('renders a small button', () => {
        const wrapper = shallow(<Button size="small" />);
        expect(wrapper.find('.vdp-button').hasClass('--small')).toBe(true);
    });

    it('renders a large button', () => {
        const wrapper = shallow(<Button size="large" />);
        expect(wrapper.find('.vdp-button').hasClass('--large')).toBe(true);
    });

    it('renders a primary button', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('.vdp-button').hasClass('--secondary', '--tertiary')).toBe(false);
    });

    it('renders a secondary button', () => {
        const wrapper = shallow(<Button importance="secondary" />);
        expect(wrapper.find('.vdp-button').hasClass('--secondary')).toBe(true);
    });

    it('renders a tertiary button', () => {
        const wrapper = shallow(<Button importance="tertiary" />);
        expect(wrapper.find('.vdp-button').hasClass('--tertiary')).toBe(true);
    });

    it('renders a raised button', () => {
        const wrapper = shallow(<Button raised />);
        expect(wrapper.find('.vdp-button').hasClass('--raised')).toBe(true);
    });

    it('renders grouped buttons', () => {
        const wrapper = mount(
            <React.Fragment>
                <Button grouped>Grouped Button</Button>
                <Button grouped>Grouped Button</Button>
            </React.Fragment>
        );
        expect(wrapper.find('.vdp-grouped-button').length).toBe(2);
    });

    it('renders grouped buttons with selected state for the  button element', () => {
        const wrapper = mount(
            <React.Fragment>
                <Button grouped>Grouped Button</Button>
                <Button grouped>Grouped Button</Button>
                <Button grouped selected>
                    Grouped Button
                </Button>
            </React.Fragment>
        );
        expect(wrapper.find('.vdp-grouped-button').length).toBe(3);
        expect(
            wrapper
                .find('.vdp-grouped-button')
                .last()
                .hasClass('--selected')
        ).toBe(true);
    });

    it('handles onClick event', () => {
        const mockOnClick = jest.fn();
        const wrapper = shallow(<Button size="small" onClick={mockOnClick} />);
        wrapper.find('.vdp-button').simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('prevents onClick when button is disabled', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<Button size="small" disabled onClick={mockOnClick} />);
        wrapper.find('.vdp-button').simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(0);
    });

    it('handles onMouseOver event', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<Button size="small" onMouseOver={mockOnClick} />);
        wrapper.find('.vdp-button').simulate('mouseover');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('handles onMouseOut event', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<Button size="small" onMouseOut={mockOnClick} />);
        wrapper.find('.vdp-button').simulate('mouseout');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('handles onBlur event', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<Button size="small" onBlur={mockOnClick} />);
        wrapper.find('.vdp-button').simulate('blur');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('handles onFocus event', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<Button size="small" onFocus={mockOnClick} />);
        wrapper.find('.vdp-button').simulate('focus');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('renders an anchor tag when an href is provided', () => {
        const wrapper = shallow(<Button href="www.vividseats.com" />);
        expect(wrapper.find('a').hasClass('vdp-button')).toBe(true);
    });
});
