import React from 'react';
import { mount, shallow } from 'enzyme';
import EventRow from '../../src/components/molecules/EventRow';
import DateColumn from '../../src/components/atoms/DateColumn';

/* eslint no-script-url: 0 */

describe('<EventRow />', () => {
    const href = "javascript:alert('click')";
    const title = 'Los Angeles Kings at Washington Capitals';
    const subtitle = 'Capital One Arena - Washington, DC';

    const { getColClassName, COL_CLASSNAMES, BUTTON_TEXT } = EventRow;
    const { BUTTON, DATE_RANGE, INFO, THUMBNAIL } = COL_CLASSNAMES;

    const expectColExists = (wrapper, colName, exists = true) => {
        expect(wrapper.find(`.${getColClassName(colName)}`).exists()).toBe(exists);
    };

    it('renders a default event row', () => {
        const wrapper = mount(<EventRow href={href} title={title} subtitle={subtitle} />);

        expect(wrapper.exists()).toBe(true);
        expectColExists(wrapper, INFO);
        expect(wrapper.find('a').getElement().props.href).toBe(href);
        expect(wrapper.find('.schema-url').getElement().props.href).toBe(`${href}?utm_medium=organic&utm_source=google_eventsearch`);
    });

    it('renders a date range event row', () => {
        const wrapper = mount(<EventRow href={href} title={title} subtitle={subtitle} dateRange="Aug 21. 2018 - Sept 16, 2018" />);

        expect(wrapper.exists()).toBe(true);
        expectColExists(wrapper, INFO);
        expectColExists(wrapper, DATE_RANGE);
        expectColExists(wrapper, BUTTON);
        expect(wrapper.find('.vdp-button').text()).toEqual(BUTTON_TEXT.DATE_RANGE);
        expect(wrapper.find(`[href="${href}"]`).exists()).toBe(true);
    });

    it('renders a thumbnail event row without a date', () => {
        const wrapper = mount(
            <EventRow
                href={href}
                title={title}
                subtitle={subtitle}
                thumbnail={{
                    src: 'https://a.vsstatic.com/event/concerts/taylor-swift.jpg',
                    alt: 'Taylor Swift Tickets'
                }}
            />
        );

        expect(wrapper.exists()).toBe(true);
        expectColExists(wrapper, INFO);
        expectColExists(wrapper, THUMBNAIL);
        expect(wrapper.find('a').getElement().props.href).toBe(href);
        expect(wrapper.find('.schema-url').getElement().props.href).toBe(`${href}?utm_medium=organic&utm_source=google_eventsearch`);
    });

    it('renders a thumbnail event row with a date', () => {
        const wrapper = mount(
            <EventRow
                href={href}
                title={title}
                subtitle={subtitle}
                date={new Date().toUTCString()}
                thumbnail={{
                    src: 'https://a.vsstatic.com/event/concerts/taylor-swift.jpg',
                    alt: 'Taylor Swift Tickets'
                }}
            />
        );

        expect(wrapper.exists()).toBe(true);
        expectColExists(wrapper, INFO);
        expectColExists(wrapper, THUMBNAIL);
        expect(wrapper.find('.thumb-date').exists()).toBe(true);
        expect(wrapper.find('a').getElement().props.href).toBe(href);
        expect(wrapper.find('.schema-url').getElement().props.href).toBe(`${href}?utm_medium=organic&utm_source=google_eventsearch`);
    });

    it('renders a date event row', () => {
        const wrapper = mount(<EventRow href={href} title={title} subtitle={subtitle} date={new Date().toUTCString()} />);

        expect(wrapper.exists()).toBe(true);
        expectColExists(wrapper, INFO);
        expectColExists(wrapper, BUTTON);
        expect(wrapper.find(DateColumn).exists()).toBe(true);
        expect(wrapper.find('.vdp-button').text()).toEqual(BUTTON_TEXT.DATE);
        expect(wrapper.find(`[href="${href}"]`).exists()).toBe(true);
    });

    it('renders a date with a year badge if the event date is not the current year', () => {
        const date = new Date().setFullYear(new Date().getFullYear() + 1);
        const wrapper = mount(<EventRow href={href} title={title} subtitle={subtitle} date={date} />);
        expect(wrapper.find('.vdp-badge').text()).toEqual(new Date(date).getFullYear().toString());
    });

    it('renders a an a tag when an href prop is passed', () => {
        const wrapper = shallow(<EventRow href={href} title={title} subtitle={subtitle} />);
        expect(wrapper.getElement().props.type).toBe('anchor');
    });

    it('renders a div when no href prop is passed', () => {
        const wrapper = shallow(<EventRow title={title} subtitle={subtitle} />);
        expect(wrapper.getElement().type).toBe('div');
    });

    it('renders a event row with schema data', () => {
        const itemTypeBase = 'http://schema.org/';

        const props = {
            alt: 'Maroon 5 Tickets',
            date: new Date().toUTCString(),
            href: 'https://www.vividseats.com/concerts/maroon-5-tickets/maroon-5-wrigley-field-6-13-3360655.html',
            imageSrc: 'https://a.vsstatic.com/banner/event/concerts/maroon-5.jpg',
            minListPrice: 25,
            subtitle: 'Wrigley Field - Chicago, IL',
            title: 'Chicago Blackhawks',
            eventType: 'MusicEvent',
            venue: {
                name: 'Wrigley Field',
                city: 'Chicago',
                regionCode: 'IL'
            },
            schemaDescription: 'Ticket listings for Maroon 5 at Wrigley Field in Chicago, IL on 6/13/2020',
            ticketCount: 10,
            isTimeTbd: false,
            performerType: 'MusicGroup',
            performerName: 'Maroon 5',
            performerUrl: 'https://www.vividseats.com/concerts/maroon-5-tickets.html'
        };

        const wrapper1 = shallow(<EventRow href={href} {...props} />);
        expect(wrapper1.props().itemScope).toBe(true);
        expect(wrapper1.props().itemType).toBe(`${itemTypeBase}${props.eventType}`);
        expect(wrapper1.find('div[itemProp="performer"]').props().itemType).toBe(`${itemTypeBase}${props.performerType}`);
        expect(wrapper1.find("meta[itemProp='description']").props().content).toBe(props.schemaDescription);
        expect(
            wrapper1
                .find("span[itemProp='addressLocality']")
                .text()
                .trim()
        ).toBe(props.venue.city);

        const wrapper2 = shallow(<EventRow {...props} />);
        expect(wrapper2.props().itemScope).toBe(true);
        expect(wrapper2.props().itemType).toBe(`${itemTypeBase}${props.eventType}`);
        expect(wrapper2.find('div[itemProp="performer"]').props().itemType).toBe(`${itemTypeBase}${props.performerType}`);
    });
});
