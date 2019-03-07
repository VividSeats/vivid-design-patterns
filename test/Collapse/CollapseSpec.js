import React from 'react';
import { mount } from 'enzyme';
import Collapse from '../../src/components/molecules/Collapse';

describe('<Collapse />', () => {
    const title = 'collapse';
    const content = 'content';
    const collapse = <Collapse title={title}>{content}</Collapse>;

    it('renders a Collapse component', () => {
        const wrapper = mount(collapse);
        expect(
            wrapper
                .find('.vdp-collapse__title')
                .hostNodes()
                .text()
        ).toBe(title);
    });

    it('should toggle collapsing itself when the title is clicked', () => {
        const wrapper = mount(collapse);
        const titleNode = wrapper.find('.vdp-collapse__title').hostNodes();
        titleNode.simulate('click');
        expect(wrapper.find('.vdp-collapse').props()['data-state']).toBe('opened');
        titleNode.simulate('click');
        expect(wrapper.find('.vdp-collapse').props()['data-state']).toBe('closed');
    });

    it('should be open if passed true for initialOpen prop', () => {
        const wrapper = mount(
            <Collapse initialOpen title={title}>
                {content}
            </Collapse>
        );
        const titleNode = wrapper.find('.vdp-collapse__title').hostNodes();
        expect(wrapper.find('.vdp-collapse').props()['data-state']).toBe('opened');
        titleNode.simulate('click');
        expect(wrapper.find('.vdp-collapse').props()['data-state']).toBe('closed');
    });

    it('works as a controlled component', () => {
        const wrapper = mount(<Collapse title={title} open={true} />);
        expect(wrapper.find('.vdp-collapse').props()['data-state']).toBe('opened');
    });

    it('should call onOpenChange when clicked', () => {
        const mockOnChange = jest.fn();
        const wrapper = mount(<Collapse title={title} open={false} onOpenChange={mockOnChange} />);

        wrapper
            .find('.vdp-collapse__title')
            .hostNodes()
            .simulate('click');
        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
});
