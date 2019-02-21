import React from 'react';
import { shallow } from 'enzyme';
import LinkGroup from '../../src/components/molecules/LinkGroup';
import Link from '../../src/components/atoms/Link';

describe('<LinkGroup />', () => {
    it('renders a <ul> tag with three child <li> tags', () => {
        const wrapper = shallow(
            <LinkGroup>
                <Link href="http://vividseats.com">Vivid Seats</Link>
                <Link href="http://vividseats.com/nfl/bears-playoff-tickets.html">Bears Playoff Tickets</Link>
                <Link href="http://vividseats.com">Seats that are Vivid</Link>
            </LinkGroup>
        );
        expect(wrapper.find('ul.vdp-link-group').exists()).toBe(true);
        expect(wrapper.find('li.vdp-link-group__item').length).toBe(3);
    });

    it("renders a <ul> with the '--striped' class", () => {
        const wrapper = shallow(<LinkGroup type="striped" />);
        expect(wrapper.find('ul.vdp-link-group--striped').exists()).toBe(true);
    });

    it("renders a <ul> with the '--muted' class", () => {
        const wrapper = shallow(<LinkGroup type="muted" />);
        expect(wrapper.find('ul.vdp-link-group--muted').exists()).toBe(true);
    });

    it('renders a <ul> tag with custom attributes', () => {
        const wrapper = shallow(<LinkGroup id="myLinkGroup" />);
        expect(wrapper.find('#myLinkGroup').hasClass('vdp-link-group')).toBe(true);
    });

    it('handles falsey children', () => {
        const wrapper = shallow(
            <LinkGroup>
                <Link href="#">Child 1</Link>
                {false && <Link href="#">Child 2</Link>}
                {false ? <Link href="#">Child 3</Link> : null}
            </LinkGroup>
        );

        expect(wrapper.children().length).toEqual(1);
    });
});
