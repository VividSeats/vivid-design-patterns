import React from 'react';
import { mount } from 'enzyme';
import Accordion from '../../src/components/molecules/Accordion';

describe('<Accordion />', () => {
    const title = 'collapse';
    const content = 'content';
    const accordion = (
        <Accordion>
            <Accordion.Collapse id="accordion1" title={title}>
                {content}
            </Accordion.Collapse>
            <Accordion.Collapse id="accordion2" title={title}>
                {content}
            </Accordion.Collapse>
        </Accordion>
    );

    it('renders an Accordion component with Collapse component as children', () => {
        const wrapper = mount(accordion);
        expect(wrapper.find('Collapse').length).toBe(2);
    });

    it('can toggle the opening and closing of an collapse component when clicked', () => {
        const wrapper = mount(accordion);
        wrapper.find('#accordion1 .vdp-collapse__title').simulate('click');
        expect(
            wrapper
                .find('#accordion1')
                .hostNodes()
                .props()['data-state']
        ).toBe('opened');
        wrapper.find('#accordion1 .vdp-collapse__title').simulate('click');
        expect(
            wrapper
                .find('#accordion1')
                .hostNodes()
                .props()['data-state']
        ).toBe('closed');
    });

    it('should open an Collapse component when click', () => {
        const wrapper = mount(accordion);
        wrapper.find('#accordion1 .vdp-collapse__title').simulate('click');
        expect(
            wrapper
                .find('#accordion1')
                .hostNodes()
                .props()['data-state']
        ).toBe('opened');
        expect(
            wrapper
                .find('#accordion2')
                .hostNodes()
                .props()['data-state']
        ).toBe('closed');
    });

    it('other collapse components should be closed when one collapse is open ', () => {
        const wrapper = mount(accordion);
        wrapper.find('#accordion1 .vdp-collapse__title').simulate('click');
        expect(
            wrapper
                .find('#accordion1')
                .hostNodes()
                .props()['data-state']
        ).toBe('opened');
        expect(
            wrapper
                .find('#accordion2')
                .hostNodes()
                .props()['data-state']
        ).toBe('closed');
        wrapper.find('#accordion2 .vdp-collapse__title').simulate('click');
        expect(
            wrapper
                .find('#accordion2')
                .hostNodes()
                .props()['data-state']
        ).toBe('opened');
        expect(
            wrapper
                .find('#accordion1')
                .hostNodes()
                .props()['data-state']
        ).toBe('closed');
    });

    it('can set an Collapse component to be initially open ', () => {
        const initialIndex = 0;
        const wrapper = mount(
            <Accordion initialOpenedIndex={initialIndex}>
                <Accordion.Collapse id="accordion0" title={title}>
                    {content}
                </Accordion.Collapse>
                <Accordion.Collapse id="accordion1" title={title}>
                    {content}
                </Accordion.Collapse>
            </Accordion>
        );
        expect(
            wrapper
                .find(`#accordion${initialIndex}`)
                .hostNodes()
                .props()['data-state']
        ).toBe('opened');
    });

    it('works as a controlled component', () => {
        const wrapper = mount(
            <Accordion openedIndex={0}>
                <Accordion.Collapse id="accordion0" title={title}>
                    {content}
                </Accordion.Collapse>
                <Accordion.Collapse id="accordion1" title={title}>
                    {content}
                </Accordion.Collapse>
            </Accordion>
        );
        expect(
            wrapper
                .find('#accordion0')
                .hostNodes()
                .props()['data-state']
        ).toBe('opened');
        expect(
            wrapper
                .find('#accordion1')
                .hostNodes()
                .props()['data-state']
        ).toBe('closed');
        wrapper.setProps({ openedIndex: 1 });
        expect(
            wrapper
                .find('#accordion1')
                .hostNodes()
                .props()['data-state']
        ).toBe('opened');
        expect(
            wrapper
                .find('#accordion0')
                .hostNodes()
                .props()['data-state']
        ).toBe('closed');
    });

    it('should call onOpenChange when clicked', () => {
        const mockOnAccordionOpen = jest.fn();
        const wrapper = mount(
            <Accordion openedIndex={1} onAccordionOpen={mockOnAccordionOpen}>
                <Accordion.Collapse id="accordion0" title={title}>
                    {content}
                </Accordion.Collapse>
                <Accordion.Collapse id="accordion1" title={title}>
                    {content}
                </Accordion.Collapse>
            </Accordion>
        );
        wrapper.find('#accordion0 .vdp-collapse__title').simulate('click');
        expect(mockOnAccordionOpen).toBeCalledWith(0);
    });
});
