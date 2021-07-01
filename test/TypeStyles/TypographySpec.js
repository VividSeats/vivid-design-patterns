import React from 'react';
import { shallow, mount } from 'enzyme';
import Title from '../../src/components/atoms/Title';
import Subtitle from '../../src/components/atoms/Subtitle';
import BodyText from '../../src/components/atoms/BodyText';
import Overline from '../../src/components/atoms/Overline';
import Caption from '../../src/components/atoms/Caption';
import SmallText from '../../src/components/atoms/SmallText';

const typographyBaseStyle = 'vdp-type-';
const typographyPropTests = [
    { describes: 'Title', component: Title, defaultElement: 'h3', defaultStyle: 'title-sm' },
    { describes: 'Subtitle', component: Subtitle, defaultElement: 'p', defaultStyle: 'subtitle-sm' },
    { describes: 'BodyText', component: BodyText, defaultElement: 'p', defaultStyle: 'body' },
    { describes: 'Overline', component: Overline, defaultElement: 'p', defaultStyle: 'overline' },
    { describes: 'SmallText', component: SmallText, defaultElement: 'p', defaultStyle: 'small' },
    { describes: 'Caption', component: Caption, defaultElement: 'p', defaultStyle: 'caption' }
];

// Component-specific tests
describe('<Title />', () => {
    ['sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
        it(`renders h1 tag with the style 'vdp-type-title-${size}'`, () => {
            const wrapper = mount(<Title size={size} />);
            expect(wrapper.find(`.vdp-type-title-${size}`).exists()).toBe(true);
        });
    });
});

describe('<Subtitle />', () => {
    ['sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
        it(`renders p tag with the style 'vdp-type-subtitle-${size}'`, () => {
            const wrapper = mount(<Subtitle size={size} />);
            expect(wrapper.find(`p.vdp-type-subtitle-${size}`).exists()).toBe(true);
        });
    });
});

// Standardized tests, as Typography components share common property types
typographyPropTests.forEach(({ describes, component, defaultElement, defaultStyle }) =>
    describe(`<${describes} />`, () => {
        const constructedComponent = { component };
        it('renders span tag when passed an "as" prop', () => {
            const wrapper = shallow(<constructedComponent.component as="span">Hello</constructedComponent.component>);
            const searchQuery = wrapper.find(`span.${typographyBaseStyle}${defaultStyle}`);
            expect(searchQuery.exists()).toBe(true);
        });

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
