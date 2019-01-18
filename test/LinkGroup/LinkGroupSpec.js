import React from 'react';
import { shallow } from 'enzyme';
import LinkGroup from '../../src/components/molecules/LinkGroup';
import Link from '../../src/components/atoms/Link';

/* eslint react/jsx-filename-extension: 0 */

describe('<LinkGroup />', () => {
    it('renders a <ul> tag with three child <li> tags', () => {
        const wrapper = shallow(
            <LinkGroup>
                <Link href="http://vividseats.com">Vivid Seats</Link>
                <Link href="http://vividseats.com/nfl/bears-playoff-tickets.html">Bears Playoff Tickets</Link>
                <Link href="http://vividseats.com">Seats that are Vivid</Link>
            </LinkGroup>
        );
        expect(wrapper.find('ul.vp-link-group').exists()).toBe(true);
        expect(wrapper.find('li.vp-link-group__item').length).toBe(3);
    });

    it("renders a <ul> with the '--striped' class", () => {
        const wrapper = shallow(<LinkGroup type="striped" />);
        expect(wrapper.find('ul.vp-link-group--striped').exists()).toBe(true);
    });

    it("renders a <ul> with the '--muted' class", () => {
        const wrapper = shallow(<LinkGroup type="muted" />);
        expect(wrapper.find('ul.vp-link-group--muted').exists()).toBe(true);
    });

    it('renders a <ul> tag with custom attributes', () => {
        const wrapper = shallow(<LinkGroup id="myLinkGroup" />);
        expect(wrapper.find('#myLinkGroup').hasClass('vp-link-group')).toBe(true);
    });
});
