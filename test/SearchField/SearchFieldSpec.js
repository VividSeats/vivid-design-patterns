import React from 'react';
import { mount } from 'enzyme';
import SearchField from '../../src/components/molecules/SearchField';

describe('<SearchField />', () => {
    it('renders a parent div with 2 children (<i> & <input>)', () => {
        const wrapper = mount(<SearchField />);
        const searchQuery = wrapper.find('div.vp-search-field');
        expect(searchQuery.exists()).toBe(true);
        expect(searchQuery.find('i.vp-search-field__icon-search').exists()).toBe(true);
        expect(searchQuery.find('input.vp-search-field__input').exists()).toBe(true);
    });

    it('renders a parent div with 3 children (two <i> & one <input>)', () => {
        const wrapper = mount(<SearchField value="Blues Brothers" />);
        const searchQuery = wrapper.find('div.vp-search-field');
        expect(searchQuery.exists()).toBe(true);
        expect(searchQuery.find('i.vp-search-field__icon-search').exists()).toBe(true);
        expect(searchQuery.find('input.vp-search-field__input').exists()).toBe(true);
        expect(searchQuery.find('i.vp-search-field__icon-close').exists()).toBe(true);
    });

    it('renders an <input> element with the appropriate props)', () => {
        const wrapper = mount(<SearchField value="Blues Brothers" id="myFakeSearchField" placeholder="Search me :)" />);
        const searchQuery = wrapper.find('input.vp-search-field__input');
        expect(searchQuery.exists()).toBe(true);
        expect(searchQuery.props()).toHaveProperty('id', 'myFakeSearchField');
        expect(searchQuery.props()).toHaveProperty('placeholder', 'Search me :)');
        expect(searchQuery.props()).toHaveProperty('value', 'Blues Brothers');
    });

    it('renders an <input> element which an onClick callback', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<SearchField value="Blues Brothers" onClick={mockOnClick} />);
        const searchQuery = wrapper.find('input.vp-search-field__input');
        searchQuery.simulate('click');
        expect(searchQuery.exists()).toBe(true);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('renders an <input> element with an onChange callback ', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<SearchField value="Blues Brothers" onChange={mockOnClick} />);
        const searchQuery = wrapper.find('input.vp-search-field__input');
        searchQuery.simulate('change', { key: 'A' });
        expect(searchQuery.exists()).toBe(true);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('renders an <input> element with an onKeyPress callback ', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<SearchField value="Blues Brothers" onKeyPress={mockOnClick} />);
        const searchQuery = wrapper.find('input.vp-search-field__input');
        searchQuery.simulate('keypress', { key: 'A' });
        expect(searchQuery.exists()).toBe(true);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('renders an <input> element with an onSubmit callback ', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<SearchField value="Blues Brothers" onSubmit={mockOnClick} />);
        const searchQuery = wrapper.find('input.vp-search-field__input');
        searchQuery.simulate('keyPress', {
            key: 'Enter',
            keyCode: 13,
            which: 13
        });
        expect(searchQuery.exists()).toBe(true);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('renders an <input> element with an onFocus callback ', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<SearchField value="Blues Brothers" onFocus={mockOnClick} />);
        const searchQuery = wrapper.find('input.vp-search-field__input');
        searchQuery.simulate('focus');
        expect(searchQuery.exists()).toBe(true);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('renders an <input> element with an onBlur callback ', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<SearchField value="Blues Brothers" onBlur={mockOnClick} />);
        const searchQuery = wrapper.find('input.vp-search-field__input');
        searchQuery.simulate('blur');
        expect(searchQuery.exists()).toBe(true);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('renders an <input> element with an onMouseLeave callback ', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<SearchField value="Blues Brothers" onMouseLeave={mockOnClick} />);
        const searchQuery = wrapper.find('input.vp-search-field__input');
        searchQuery.simulate('mouseLeave');
        expect(searchQuery.exists()).toBe(true);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('renders an <input> element with an onMouseEnter callback ', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<SearchField value="Blues Brothers" onMouseEnter={mockOnClick} />);
        const searchQuery = wrapper.find('input.vp-search-field__input');
        searchQuery.simulate('mouseEnter');
        expect(searchQuery.exists()).toBe(true);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
