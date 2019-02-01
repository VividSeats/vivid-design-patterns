import React from 'react';
import { mount, shallow } from 'enzyme';
import Link from '../../src/components/atoms/Link';
import FilterGroup from '../../src/components/molecules/FilterGroup';

describe('<FilterGroup />', () => {
    it('renders a <ul> tag with six child <li> tags', () => {
        const wrapper = shallow(
            <FilterGroup groupName="Test Group">
                <Link href="#">All-State Arena</Link>
                <Link href="#">Soldier Field</Link>
                <Link href="#">United Center</Link>
                <Link href="#">AT&T Center</Link>
                <Link href="#">Madison Square Garden</Link>
                <Link href="#">Oracle Arena</Link>
                <Link href="#">Pepsi Center</Link>
                <Link href="#">Kohl Center</Link>
            </FilterGroup>
        );
        expect(wrapper.find('ul').exists()).toBe(true);
        expect(wrapper.find('li').length).toBe(6);
    });

    it('renders a <ul> tag with a limit of 3 child <li> tags', () => {
        const wrapper = shallow(
            <FilterGroup groupName="Test Group" limit={3}>
                <Link href="#">All-State Arena</Link>
                <Link href="#">Soldier Field</Link>
                <Link href="#">United Center</Link>
                <Link href="#">AT&T Center</Link>
                <Link href="#">Madison Square Garden</Link>
                <Link href="#">Oracle Arena</Link>
                <Link href="#">Pepsi Center</Link>
                <Link href="#">Kohl Center</Link>
            </FilterGroup>
        );
        expect(wrapper.find('ul').exists()).toBe(true);
        expect(wrapper.find('li').length).toBe(4);
    });

    it('renders a filter group with a selection callback', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
            <FilterGroup groupName="Test Group" onSelect={mockOnClick}>
                <Link href="#">To somewhere..</Link>
            </FilterGroup>
        );
        const searchQuery = wrapper.find('a');
        expect(searchQuery.exists()).toBe(true);
        searchQuery.simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('renders a filter group with a selection callback and a child onClick callback', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
            <FilterGroup groupName="Test Group" onSelect={mockOnClick}>
                <Link href="#" onClick={mockOnClick}>
                    To somewhere..
                </Link>
            </FilterGroup>
        );
        const searchQuery = wrapper.find('a');
        expect(searchQuery.exists()).toBe(true);
        searchQuery.simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(2);
    });

    it('renders an unexpanded filter group, then expands / unexpands the selection', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
            <FilterGroup groupName="Test Group" onSelect={mockOnClick}>
                <Link href="#">To somewhere..</Link>
                <Link href="#">To somewhere..</Link>
                <Link href="#">To somewhere..</Link>
                <Link href="#">To somewhere..</Link>
                <Link href="#">To somewhere..</Link>
                <Link href="#">To somewhere..</Link>
                <Link href="#">To somewhere..</Link>
                <Link href="#">To somewhere..</Link>
                <Link href="#">To somewhere..</Link>
                <Link href="#">To somewhere..</Link>
            </FilterGroup>
        );
        const searchQuery = wrapper.find('a').last();
        expect(searchQuery.exists()).toBe(true);
        searchQuery.simulate('click');
        const expandedSelection = wrapper.find('a');
        expect(expandedSelection.length).toBe(11);
        expandedSelection.last().simulate('click');
        const unexpandedSelection = wrapper.find('a');
        expect(unexpandedSelection.length).toBe(6);
    });

    it('renders a filter group with custom attributes', () => {
        const wrapper = mount(
            <FilterGroup groupName="Test Group" id="myLinkGroup">
                <Link href="#">To somewhere..</Link>
            </FilterGroup>
        );
        expect(wrapper.find('div#myLinkGroup').exists()).toBe(true);
    });
});
