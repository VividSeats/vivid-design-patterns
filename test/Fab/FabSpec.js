import React from 'react';
import { shallow, mount } from 'enzyme';
import Fab from '../../src/components/molecules/Fab';

/* eslint no-constant-condition: 0 */

describe('<Fab />', () => {
    it('renders', () => {
        const wrapper = shallow(<Fab />);
        expect(wrapper.hasClass('vdp-fab')).toBe(true);
    });

    it('supports FabChild subcomponents', () => {
        const wrapper = mount(
            <Fab>
                <Fab.Child className="child1">Child1</Fab.Child>
                <Fab.Child className="child2">Child2</Fab.Child>
            </Fab>
        );

        expect(wrapper.exists('.vdp-fab__child.child1'));
        expect(wrapper.exists('.vdp-fab__child.child2'));
    });

    it('wraps a FabChild subcomponent around children that are not subcomponents', () => {
        const wrapper = mount(
            <Fab>
                <span>I am a child</span>
            </Fab>
        );

        expect(wrapper.exists('.vdp-fab__child span'));
    });

    it('handles falsey children', () => {
        const wrapper = mount(
            <Fab>
                <Fab.Child>Child 1</Fab.Child>
                {false && <Fab.Child>Child 2</Fab.Child>}
                {false ? <Fab.Child>Child 3</Fab.Child> : null}
            </Fab>
        );

        expect(wrapper.children().length).toEqual(1);
    });
});
