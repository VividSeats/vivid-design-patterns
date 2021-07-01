import React from 'react';
import { shallow, mount } from 'enzyme';
import Banner from '../../src/components/molecules/Banner';
import BodyText from '../../src/components/atoms/BodyText';
import Overline from '../../src/components/atoms/Overline';
import Caption from '../../src/components/atoms/Caption';

describe('<Banner />', () => {
    it('renders a banner that displays a child', () => {
        const wrapper = shallow(
            <Banner>
                <BodyText>"Banner Content"</BodyText>
            </Banner>
        );
        expect(wrapper.exists('.vdp-banner'));
        expect(wrapper.exists('.vdp-type-body'));
    });

    it('displays details on carat click', () => {
        const wrapper = mount(
            <Banner className="bg-neutral-800">
                <Overline className="--gold">Offer Type</Overline>
                <Overline state="inverted">Offer Headline</Overline>
                <Overline state="inverted">Offer Overlineline</Overline>
                <Banner.Details>
                    <Caption state="muted">Legal Text</Caption>
                </Banner.Details>
            </Banner>
        );
        expect(wrapper.exists('.vdp-banner__details')).toBe(false);
        expect(wrapper.exists('.vdp-icon-carat-down')).toBe(true);
        wrapper.find('.vdp-icon').simulate('click');
        expect(wrapper.exists('.vdp-banner__details')).toBe(true);
        expect(wrapper.exists('.vdp-icon-carat-up')).toBe(true);
        wrapper.find('.vdp-icon').simulate('click');
        expect(wrapper.exists('.vdp-banner__details')).toBe(false);
        expect(wrapper.exists('.vdp-icon-carat-down')).toBe(true);
    });
});
