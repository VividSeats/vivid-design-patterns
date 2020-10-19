import React from 'react';
import moment from 'moment';
import { mount, shallow, render } from 'enzyme';
import EventRow from '../../src/components/molecules/EventRow';
import DateColumn from '../../src/components/atoms/DateColumn';

/* eslint no-script-url: 0 */

describe('<EventRow />', () => {
    const href = "javascript:alert('click')";
    const title = 'Los Angeles Kings at Washington Capitals';
    const subtitle = 'Capital One Arena - Washington, DC';

    const itemTypeBase = 'http://schema.org/';
    const props = {
        alt: 'Maroon 5 Tickets',
        date: '2020-06-19',
        href: 'https://www.vividseats.com/concerts/maroon-5-tickets/maroon-5-wrigley-field-6-13-3360655.html',
        imageUrl: 'https://a.vsstatic.com/banner/event/concerts/maroon-5.jpg',
        subtitle: 'Wrigley Field - Chicago, IL',
        title: 'Maroon 5',
        eventType: 'MusicEvent',
        venue: {
            name: 'Wrigley Field',
            city: 'Chicago',
            regionCode: 'IL',
            countryCode: 'US'
        },
        ticketCount: 10,
        minListPrice: 25,
        schemaDescription: 'Ticket listings for Maroon 5 at Wrigley Field in Chicago, IL on 6/13/2020',
        isTimeTbd: false,
        performerType: 'MusicGroup',
        performerName: 'Maroon 5',
        performerUrl: 'https://www.vividseats.com/concerts/maroon-5-tickets.html',
        showMinListPrice: false
    };

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

    it('verify event with schema data', () => {
        const wrapper = render(<EventRow {...props} />);

        expect(wrapper.attr('itemtype')).toBe(`${itemTypeBase}${props.eventType}`);
        expect(wrapper.attr('href')).toBe(props.href);
        expect(wrapper.find("meta[itemProp='startDate']").attr('content')).toBe(props.date);
        expect(wrapper.find("meta[itemProp='endDate']").attr('content')).toBe(props.date);

        expect(wrapper.find("p[itemProp='name']").text()).toBe(props.title);

        const location = wrapper.find("p[itemProp='location']");
        expect(location.attr('itemtype')).toBe('http://schema.org/Place');
        expect(location.find("span[itemProp='name']").text()).toBe(props.venue.name);

        const address = location.find("span[itemProp='address']");
        expect(address.attr('itemtype')).toBe('http://schema.org/PostalAddress');
        expect(address.find("span[itemProp='addressLocality']").text()).toBe(props.venue.city);
        expect(address.find("span[itemProp='addressRegion']").text()).toBe(props.venue.regionCode);
        expect(address.find("meta[itemProp='addressCountry']").attr('content')).toBe('US');

        expect(wrapper.find("link[itemProp='url']").attr('href')).toContain(props.href);

        expect(wrapper.find("meta[itemProp='sameAs']").attr('content')).toContain(props.href);
        expect(wrapper.find("meta[itemProp='image']").attr('content')).toBe(props.imageUrl);
        expect(wrapper.find("meta[itemProp='description']").attr('content')).toBe(props.schemaDescription);
    });

    it('verify offers with schema data', () => {
        const wrapper1 = shallow(<EventRow {...props} />);

        const perfomer = wrapper1.find("div[itemProp='offers']");
        expect(perfomer.exists()).toBeTruthy();
        expect(perfomer.find("link[itemProp='url']").props().href).toContain(props.href);
        expect(perfomer.find("meta[itemProp='priceCurrency']").props().content).toBe('USD');
        expect(perfomer.find("link[itemProp='availability']").props().href).toBe('http://schema.org/InStock');
        expect(perfomer.find("meta[itemProp='validFrom']").props().content).toBe(moment().format('YYYY-MM-DD'));
        expect(perfomer.find("meta[itemProp='validThrough']").props().content).toBe(props.date);
        expect(perfomer.find("meta[itemProp='price']").props().content).toBe(props.minListPrice);
    });

    it('verify perfomer with schema data', () => {
        const wrapper1 = shallow(<EventRow {...props} />);

        const perfomer = wrapper1.find("div[itemProp='performer']");
        expect(perfomer.exists()).toBeTruthy();
        expect(perfomer.props().itemType).toBe(`${itemTypeBase}${props.performerType}`);
        expect(perfomer.find("meta[itemProp='name']").props().content).toBe(props.performerName);
        expect(perfomer.find("meta[itemProp='sameAs']").props().content).toBe(props.performerUrl);
    });

    it('verify perfomer without schema data', () => {
        const wrapper = shallow(<EventRow {...props} includeSchemaData={false} />);

        expect(wrapper.find("div[itemProp='performer']").exists()).toBeFalsy();
        expect(wrapper.find("meta[itemProp='name']").exists()).toBeFalsy();
        expect(wrapper.find("meta[itemProp='sameAs']").exists()).toBeFalsy();
    });
});
