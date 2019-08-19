import React from 'react';
import { shallow, mount } from 'enzyme';
import Banner from '../../src/components/molecules/Banner';
import BodyText from '../../src/components/atoms/BodyText';
import Subhead from '../../src/components/atoms/Subhead';
import TinyText from '../../src/components/atoms/TinyText';

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
            <Banner className="bg-slate">
                <Subhead className="--gold">Offer Type</Subhead>
                <Subhead state="inverted">Offer Headline</Subhead>
                <Subhead state="inverted">Offer Subheadline</Subhead>
                <Banner.Details>
                    <TinyText state="muted">Legal Text</TinyText>
                </Banner.Details>
            </Banner>
        );
        expect(wrapper.exists('.vdp-banner__details')).toBe(false);
        expect(wrapper.exists('.vdp-icon-carat-down')).toBe(true);
        wrapper.find('.vdp-icon').simulate('click');
        expect(wrapper.exists('.vdp-banner__details')).toBe(true);
        expect(wrapper.exists('.vdp-icon-carat-up')).toBe(true);
    });
});
