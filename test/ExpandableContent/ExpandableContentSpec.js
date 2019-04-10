import React from 'react';
import { /* shallow, */ mount } from 'enzyme';
import ExpandableContent from '../../src/components/molecules/ExpandableContent';

describe('<ExpandableContent />', () => {
    it('renders an expandable container', () => {
        const wrapper = mount(<ExpandableContent>Four score and seven years ago...</ExpandableContent>);
        const container = wrapper.find('.vdp-expandable-content');
        expect(container.exists()).toBe(true);
        expect(container.hasClass('__collapsed')).toBe(true);
    });

    // it('renders an anchor card which is clickable', () => {
    //     const mockOnClick = jest.fn();
    //     const wrapper = mount(
    //         <ExpandableContent type="anchor" onClick={mockOnClick} role="Anchor">
    //             <ExpandableContent.Header>Anchor ExpandableContent</ExpandableContent.Header>
    //             <ExpandableContent.Body>Might as well live in Anchorage, Alaska, 'cuz I'm anchored all day.</ExpandableContent.Body>
    //         </ExpandableContent>
    //     );
    //     const cardAnchor = wrapper.find('.vdp-card--anchor');
    //     cardAnchor.simulate('click');
    //     expect(cardAnchor.exists()).toBe(true);
    //     expect(mockOnClick).toHaveBeenCalledTimes(1);
    // });
});
