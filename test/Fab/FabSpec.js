import React from 'react';
import { shallow, mount } from 'enzyme';
import Fab from '../../src/components/molecules/Fab';

/* eslint react/jsx-filename-extension: 0 */

describe('<Fab />', () => {
    it('renders', () => {
        const wrapper = shallow(<Fab />);
        expect(wrapper.hasClass('vp-fab')).toBe(true);
    });

    it('does not render a component with dataState hidden prop', () => {
        const wrapper = mount(<Fab dataState="hidden" />);
        expect(wrapper.exists('.vp-fab')).toBe(false);
    });

    it('supports FabChild subcomponents', () => {
        const wrapper = mount(
            <Fab>
                <Fab.Child className="child1">Child1</Fab.Child>
                <Fab.Child className="child2">Child2</Fab.Child>
            </Fab>
        );

        expect(wrapper.exists('.vp-fab__child.child1'));
        expect(wrapper.exists('.vp-fab__child.child2'));
    });

    it('wraps a FabChild subcomponent around children that are not subcomponents', () => {
        const wrapper = mount(
            <Fab>
                <span>I am a child</span>
            </Fab>
        );

        expect(wrapper.exists('.vp-fab__child span'));
    });
});
