import Typeahead from '../../src/components/molecules/Typeahead';
import React from 'react';
import { shallow, mount, extend } from 'enzyme';

describe('<Typeahead />', () => {
    const getSuggestions = jest.fn();
    const onSelect = jest.fn();
    describe('Default typeahead component', () => {
        const component = <Typeahead onChange={getSuggestions} placeholder="Search" onSelect={onSelect} minQueryLength={3} />;
        it('Calls onChange when user starts typing in the input greater than minQueryLength', () => {
            const wrapper = mount(component);
            const input = wrapper.find('input');
            expect(input.exists()).toBe(true);
            input.simulate('change', { target: { value: 'a' } });
            expect(getSuggestions).not.toHaveBeenCalled();
            input.simulate('change', { target: { value: 'abc' } });
            expect(getSuggestions).toBeCalledWith('abc');
        });

        it('It displays a list of suggestions when suggestions are present', () => {
            const wrapper = mount(component);
            const suggestion = 'Hello';
            wrapper.setProps({ suggestions: [suggestion] });
            expect(wrapper.find('.vdp-typeahead__dropdown').exists()).toBe(true);
            const suggestionItem = wrapper.find('.vdp-typeahead__suggestion');
            expect(suggestionItem.text()).toBe(suggestion);
            suggestionItem.simulate('click');
            expect(onSelect).toBeCalledWith(suggestion);
            expect(wrapper.find('.vdp-typeahead__dropdown').exists()).toBe(false);
        });

        it('It displays users to select a suggestion using the up/down arrow', () => {
            const wrapper = mount(component);
            const suggestion1 = 'Hello';
            const suggestion2 = 'Good bye';
            const suggestions = [suggestion1, suggestion2];
            wrapper.setProps({ suggestions });
            wrapper.find('input').simulate('keyDown', { key: 'ArrowDown' });
            expect(
                wrapper
                    .find('.vdp-typeahead__suggestion')
                    .filterWhere(item => {
                        return item.getDOMNode().className.includes('--highlight');
                    })
                    .text()
            ).toBe(suggestion1);
            wrapper.find('input').simulate('keyDown', { key: 'ArrowDown' });
            expect(
                wrapper
                    .find('.vdp-typeahead__suggestion')
                    .filterWhere(item => {
                        return item.getDOMNode().className.includes('--highlight');
                    })
                    .text()
            ).toBe(suggestion2);
            wrapper.find('input').simulate('keyDown', { key: 'Enter' });
            expect(onSelect).toBeCalledWith(suggestion2);
        });

        it('It calls on select with the value in the input field if no suggestions are selected', () => {
            const wrapper = mount(component);
            const input = wrapper.find('input');
            input.simulate('change', { target: { value: 'a' } });
            input.simulate('keyDown', { key: 'Enter' });
            expect(onSelect).toBeCalledWith('a');
        });

        it('It hides the dropdown when you click away from the input, and reshow the dropdown when you focus on the input', () => {
            const suggestions = ['Hello', 'Good bye'];
            const map = {};
            window.addEventListener = jest.fn((event, cb) => {
                map[event] = cb;
            });
            const onDropdownHidden = jest.fn();
            const onDropdownShown = jest.fn();
            const fakeElement = mount(<div id="fakeElement">Hello</div>);
            const wrapper = mount(
                <Typeahead
                    suggestions={suggestions}
                    onChange={getSuggestions}
                    onDropdownHidden={onDropdownHidden}
                    onDropdownShown={onDropdownShown}
                    placeholder="Search"
                    onSelect={onSelect}
                />
            );
            expect(wrapper.find('.vdp-typeahead__dropdown').exists()).toBe(true);
            map.click({ target: fakeElement.getDOMNode() });
            expect(onDropdownHidden).toBeCalled();
            wrapper.find('input').simulate('focus');
            expect(onDropdownShown).toBeCalled();
        });
    });

    describe('Hierarchal typeahead component', () => {
        const suggestions = [
            {
                title: 'Title 1',
                items: ['Hello', 'Good bye']
            },
            {
                title: 'Title 2',
                items: ['Hola', 'Adios']
            }
        ];

        const getSuggestions = jest.fn();

        const onSelect = jest.fn();
        const component = (
            <Typeahead showHierarchicalDropdown onChange={getSuggestions} placeholder="Search" onSelect={onSelect} minQueryLength={0} />
        );

        it('Calls onChange when user starts typing in the input', () => {
            const wrapper = mount(component);
            const input = wrapper.find('input');
            expect(input.exists()).toBe(true);
            input.simulate('change', { target: { value: 'a' } });
            expect(getSuggestions).toBeCalledWith('a');
        });

        it('It displays a list of suggestions when suggestions are present', () => {
            const wrapper = mount(component);
            wrapper.setProps({ suggestions });
            expect(wrapper.find('.vdp-typeahead__dropdown').exists()).toBe(true);
            const suggestionItem = wrapper.find('.vdp-typeahead__suggestion').first();
            expect(suggestionItem.text()).toBe(suggestions[0].items[0]);
            suggestionItem.simulate('click');
            expect(onSelect).toBeCalledWith(suggestions[0].items[0]);
        });

        it('It displays the different sections', () => {
            const wrapper = mount(component);
            wrapper.setProps({ suggestions });
            expect(wrapper.find('.vdp-typeahead__section').length).toBe(suggestions.length);
            expect(
                wrapper
                    .find('.vdp-typeahead__section__header p')
                    .first()
                    .text()
            ).toBe(suggestions[0].title);
            expect(
                wrapper
                    .find('.vdp-typeahead__section__header p')
                    .at(1)
                    .text()
            ).toBe(suggestions[1].title);
        });

        it('It displays users to select a suggestion using the up/down arrow', () => {
            const wrapper = mount(component);
            const input = wrapper.find('input');
            wrapper.setProps({ suggestions });
            input.simulate('keyDown', { key: 'ArrowDown' });
            expect(
                wrapper
                    .find('.vdp-typeahead__suggestion')
                    .filterWhere(item => {
                        return item.getDOMNode().className.includes('--highlight');
                    })
                    .text()
            ).toBe(suggestions[0].items[0]);
            wrapper.find('input').simulate('keyDown', { key: 'ArrowDown' });
            expect(
                wrapper
                    .find('.vdp-typeahead__suggestion')
                    .filterWhere(item => {
                        return item.getDOMNode().className.includes('--highlight');
                    })
                    .text()
            ).toBe(suggestions[0].items[1]);
            wrapper.find('input').simulate('keyDown', { key: 'ArrowDown' });
            expect(
                wrapper
                    .find('.vdp-typeahead__suggestion')
                    .filterWhere(item => {
                        return item.getDOMNode().className.includes('--highlight');
                    })
                    .text()
            ).toBe(suggestions[1].items[0]);
            wrapper.find('input').simulate('keyDown', { key: 'Enter' });
            expect(onSelect).toBeCalledWith(suggestions[1].items[0]);
        });

        it('It calls on select with the value in the input field if no suggestions are selected', () => {
            const wrapper = mount(component);
            const input = wrapper.find('input');
            input.simulate('change', { target: { value: 'a' } });
            input.simulate('keyDown', { key: 'Enter' });
            expect(onSelect).toBeCalledWith('a');
        });
    });

    describe('Typeahead component with custom render suggestion method', () => {
        const renderMethod = ({ suggestion, isHighlighted, suggestionProps }) => (
            <Typeahead.SuggestionItem key={suggestion} isHighlighted={isHighlighted} {...suggestionProps}>
                <p className="custom-render">{suggestion}</p>
            </Typeahead.SuggestionItem>
        );
        const suggestion = 'Hello';
        const component = <Typeahead onChange={getSuggestions} placeholder={'Hello'} onSelect={onSelect} renderSuggestion={renderMethod} />;
        it('it should display the custom rendermethod item', () => {
            const wrapper = mount(component);
            wrapper.setProps({ suggestions: [suggestion] });
            const customRenderP = wrapper.find('.custom-render');
            expect(customRenderP.exists()).toBe(true);
            expect(customRenderP.text()).toBe(suggestion);
        });

        it('it should highlight the correct items when hovering over the sections ', () => {
            const wrapper = mount(component);
            const suggestion2 = 'Good bye';
            wrapper.setProps({ suggestions: [suggestion, suggestion2] });
            wrapper
                .find('.vdp-typeahead__suggestion')
                .first()
                .simulate('mouseenter');
            expect(
                wrapper
                    .find('.vdp-typeahead__suggestion')
                    .filterWhere(item => {
                        return item.getDOMNode().className.includes('--highlight');
                    })
                    .text()
            ).toBe(suggestion);
            const secondSuggestion = wrapper.find('.vdp-typeahead__suggestion').at(1);
            secondSuggestion.simulate('mouseenter');
            expect(
                wrapper
                    .find('.vdp-typeahead__suggestion')
                    .filterWhere(item => {
                        return item.getDOMNode().className.includes('--highlight');
                    })
                    .text()
            ).toBe(suggestion2);
            secondSuggestion.simulate('click');
            expect(onSelect).toBeCalledWith(suggestion2);
        });
    });
});
