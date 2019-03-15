import React from 'react';
import { mount, shallow } from 'enzyme';
import FilterGroupItem from '../../src/components/atoms/FilterGroupItem';
import FilterGroup from '../../src/components/molecules/FilterGroup';

describe('<FilterGroup />', () => {
    it('renders a <ul> tag with eight child <li> tags', () => {
        const wrapper = mount(
            <FilterGroup groupName="Test Group">
                <FilterGroupItem>All-State Arena</FilterGroupItem>
                <FilterGroupItem>Soldier Field</FilterGroupItem>
                <FilterGroupItem>United Center</FilterGroupItem>
                <FilterGroupItem>AT&T Center</FilterGroupItem>
                <FilterGroupItem>Madison Square Garden</FilterGroupItem>
                <FilterGroupItem>Oracle Arena</FilterGroupItem>
                <FilterGroupItem>Pepsi Center</FilterGroupItem>
                <FilterGroupItem>Kohl Center</FilterGroupItem>
            </FilterGroup>
        );
        expect(wrapper.find('ul').exists()).toBe(true);
        expect(wrapper.find('li').length).toBe(5);
    });

    it('renders a <ul> tag with a limit of 3 child <li> tags', () => {
        const wrapper = mount(
            <FilterGroup groupName="Test Group" limit={3}>
                <FilterGroupItem>All-State Arena</FilterGroupItem>
                <FilterGroupItem>Soldier Field</FilterGroupItem>
                <FilterGroupItem>United Center</FilterGroupItem>
                <FilterGroupItem>AT&T Center</FilterGroupItem>
                <FilterGroupItem>Madison Square Garden</FilterGroupItem>
                <FilterGroupItem>Oracle Arena</FilterGroupItem>
                <FilterGroupItem>Pepsi Center</FilterGroupItem>
                <FilterGroupItem>Kohl Center</FilterGroupItem>
            </FilterGroup>
        );
        expect(wrapper.find('ul').exists()).toBe(true);
        expect(wrapper.find('li').length).toBe(3);
    });

    it('renders a filter group with a selection callback', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
            <FilterGroup groupName="Test Group" onSelect={mockOnClick}>
                <FilterGroupItem>To somewhere..</FilterGroupItem>
            </FilterGroup>
        );
        const searchQuery = wrapper.find('li');
        expect(searchQuery.exists()).toBe(true);
        searchQuery.simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('renders a filter group with a selection callback and a child onClick callback', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
            <FilterGroup groupName="Test Group" onSelect={mockOnClick}>
                <FilterGroupItem onClick={mockOnClick}>To somewhere..</FilterGroupItem>
            </FilterGroup>
        );
        const searchQuery = wrapper.find('li');
        expect(searchQuery.exists()).toBe(true);
        searchQuery.simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(2);
    });

    it('renders an unexpanded filter group, then expands / unexpands the selection', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
            <FilterGroup groupName="Test Group" onSelect={mockOnClick}>
                <FilterGroupItem href="#">To somewhere..</FilterGroupItem>
                <FilterGroupItem href="#">To somewhere..</FilterGroupItem>
                <FilterGroupItem href="#">To somewhere..</FilterGroupItem>
                <FilterGroupItem href="#">To somewhere..</FilterGroupItem>
                <FilterGroupItem href="#">To somewhere..</FilterGroupItem>
                <FilterGroupItem href="#">To somewhere..</FilterGroupItem>
                <FilterGroupItem href="#">To somewhere..</FilterGroupItem>
                <FilterGroupItem href="#">To somewhere..</FilterGroupItem>
                <FilterGroupItem href="#">To somewhere..</FilterGroupItem>
                <FilterGroupItem href="#">To somewhere..</FilterGroupItem>
            </FilterGroup>
        );
        const searchQuery = wrapper.find('button').last();
        expect(searchQuery.exists()).toBe(true);
        searchQuery.simulate('click');
        const expandedSelection = wrapper.find('li');
        expect(expandedSelection.length).toBe(10);
        searchQuery.simulate('click');
        const unexpandedSelection = wrapper.find('li');
        expect(unexpandedSelection.length).toBe(5);
    });

    it('renders a filter group with custom attributes', () => {
        const wrapper = mount(
            <FilterGroup groupName="Test Group" id="myFilterGroupItemGroup">
                <FilterGroupItem href="#">To somewhere..</FilterGroupItem>
            </FilterGroup>
        );
        expect(wrapper.find('div#myFilterGroupItemGroup').exists()).toBe(true);
    });
});
