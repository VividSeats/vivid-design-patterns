import React from 'react';
import { shallow, mount } from 'enzyme';
import Headline from '../../src/components/atoms/Headline';
import Subtitle from '../../src/components/atoms/Subtitle';
import BodyText from '../../src/components/atoms/BodyText';
import Subhead from '../../src/components/atoms/Subhead';
import TinyText from '../../src/components/atoms/TinyText';
import SmallText from '../../src/components/atoms/SmallText';

const typographyBaseStyle = 'vdp-type-';
const typographyPropTests = [
    { describes: 'Headline', component: Headline, defaultElement: 'h1', defaultStyle: 'headline1' },
    { describes: 'Subtitle', component: Subtitle, defaultElement: 'p', defaultStyle: 'subtitle1' },
    { describes: 'BodyText', component: BodyText, defaultElement: 'p', defaultStyle: 'body1' },
    { describes: 'Subhead', component: Subhead, defaultElement: 'p', defaultStyle: 'subhead' },
    { describes: 'SmallText', component: SmallText, defaultElement: 'p', defaultStyle: 'small' },
    { describes: 'TinyText', component: TinyText, defaultElement: 'small', defaultStyle: 'tiny' }
];

// Component-specific tests
describe('<Headline />', () => {
    [1, 2, 3, 4, 5, 6].forEach(importance => {
        it(`renders h1 tag with the style 'vdp-type-headline${importance}'`, () => {
            const wrapper = mount(<Headline importance={importance} />);
            expect(wrapper.find(`h${importance}.vdp-type-headline${importance}`).exists()).toBe(true);
        });
    });
});

describe('<Subtitle />', () => {
    [1, 2].forEach(importance => {
        it(`renders p tag with the style 'vdp-type-subtitle${importance}'`, () => {
            const wrapper = mount(<Subtitle importance={importance} />);
            expect(wrapper.find(`p.vdp-type-subtitle${importance}`).exists()).toBe(true);
        });
    });
});

describe('<BodyText />', () => {
    [1, 2].forEach(importance => {
        it(`renders p tag with the style 'vdp-type-body${importance}'`, () => {
            const wrapper = mount(<BodyText importance={importance} />);
            expect(wrapper.find(`p.vdp-type-body${importance}`).exists()).toBe(true);
        });
    });
});

// Standardized tests, as Typography components share common property types
typographyPropTests.forEach(({ describes, component, defaultElement, defaultStyle }) =>
    describe(`<${describes} />`, () => {
        const constructedComponent = { component };

        it(`renders ${defaultElement} tag with the style '${defaultElement}.${typographyBaseStyle}${defaultStyle}'`, () => {
            const wrapper = shallow(<constructedComponent.component>Welcome, Bob.</constructedComponent.component>);
            const searchQuery = wrapper.find(`${defaultElement}.${typographyBaseStyle}${defaultStyle}`);
            expect(searchQuery.exists()).toBe(true);
        });

        ['disabled', 'inverted', 'muted'].forEach(state => {
            it(`renders ${defaultElement} tag with the style '--${state}'`, () => {
                const wrapper = mount(<constructedComponent.component state={state} />);
                const searchQuery = wrapper.find(`${defaultElement}.${typographyBaseStyle}${defaultStyle}`);
                expect(searchQuery.exists()).toBe(true);
                expect(searchQuery.hasClass(`--${state}`)).toBe(true);
            });
        });

        ['left', 'center', 'right'].forEach(alignment => {
            it(`renders ${defaultElement} tag with the style '--${alignment}'`, () => {
                const wrapper = mount(<constructedComponent.component alignment={alignment} />);
                const searchQuery = wrapper.find(`${defaultElement}.${typographyBaseStyle}${defaultStyle}`);
                expect(searchQuery.exists()).toBe(true);
                expect(searchQuery.hasClass(`--${alignment}`)).toBe(true);
            });
        });

        [['blk', 'black'], ['bld', 'bold'], ['med', 'medium']].forEach(weight => {
            it(`renders ${defaultElement} tag with the style '--${weight[0]}'`, () => {
                const wrapper = mount(<constructedComponent.component weight={weight[1]} />);
                const searchQuery = wrapper.find(`${defaultElement}.${typographyBaseStyle}${defaultStyle}`);
                expect(searchQuery.exists()).toBe(true);
                expect(searchQuery.hasClass(`--${weight[0]}`)).toBe(true);
            });
        });

        ['compressed', 'expanded'].forEach(height => {
            it(`renders ${defaultElement} tag with the style '--${height}'`, () => {
                const wrapper = mount(<constructedComponent.component height={height} />);
                const searchQuery = wrapper.find(`${defaultElement}.${typographyBaseStyle}${defaultStyle}`);
                expect(searchQuery.exists()).toBe(true);
                expect(searchQuery.hasClass(`--${height}`)).toBe(true);
            });
        });

        ['uppercase', 'lowercase'].forEach(capitalization => {
            it(`renders ${defaultElement} tag with the style '--${capitalization}'`, () => {
                const wrapper = mount(<constructedComponent.component capitalization={capitalization} />);
                const searchQuery = wrapper.find(`${defaultElement}.${typographyBaseStyle}${defaultStyle}`);
                expect(searchQuery.exists()).toBe(true);
                expect(searchQuery.hasClass(`--${capitalization}`)).toBe(true);
            });
        });

        it(`renders ${defaultElement} tag with the list style`, () => {
            const wrapper = shallow(<constructedComponent.component list />);
            expect(wrapper.find(`${defaultElement}.${typographyBaseStyle}${defaultStyle}`).hasClass('--list')).toBe(true);
        });

        it(`renders ${defaultElement} tag with custom attributes`, () => {
            const wrapper = shallow(<constructedComponent.component id="myFakeId" />);
            expect(wrapper.find('#myFakeId').hasClass(`vdp-type-${defaultStyle}`)).toBe(true);
        });

        it(`renders ${defaultElement} tag that is truncated`, () => {
            const wrapper = shallow(<constructedComponent.component truncate />);
            expect(wrapper.find(`${defaultElement}.${typographyBaseStyle}${defaultStyle}`).hasClass('--truncate')).toBe(true);
        });
    })
);
