import React from 'react';
import { mount, render } from 'enzyme';
import moment from 'moment';
import EventCard from '../../src/components/molecules/EventCard';

describe('<EventCard />', () => {
    const itemTypeBase = 'http://schema.org/';
    const props = {
        alt: 'Maroon 5 Tickets',
        date: '2020-06-19',
        href: 'https://www.vividseats.com/concerts/maroon-5-tickets/maroon-5-wrigley-field-6-13-3360655.html',
        imageSrc: 'https://a.vsstatic.com/banner/event/concerts/maroon-5.jpg',
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
        performerUrl: 'https://www.vividseats.com/concerts/maroon-5-tickets.html'
    };

    it('renders a default event card', () => {
        const alt = 'Taylor Switft Tickets';
        const href = 'https://www.vividseats.com/concerts/taylor-swift-tickets/taylor-swift-gillette-stadium-8-1-3260759.html';
        const imageSrc = 'https://a.vsstatic.com/event/concerts/taylor-swift.jpg';
        const minListPrice = 25;
        const subtitle = 'United Center - Chicago, IL';
        const title = 'Chicago Blackhawks';

        const wrapper = mount(
            <EventCard
                {...{
                    alt,
                    href,
                    imageSrc,
                    minListPrice,
                    title,
                    subtitle,
                    date: new Date().toUTCString()
                }}
            />
        );

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.getElement().props.href).toBe(href);
        /* can only access img props from parent of LazyLoad component */
        const lazyLoadedImg = wrapper.find('.vdp-card__hero').props().children[0].props.children;
        expect(lazyLoadedImg.props.alt).toBe(alt);
        expect(lazyLoadedImg.props.src).toBe(imageSrc);
        expect(
            wrapper
                .find('.vdp-badge')
                .text()
                .trim()
        ).toBe(`from $${minListPrice}`);
        expect(wrapper.find('.vdp-event-row__col--info .vdp-type-body2').text()).toBe(title);
        expect(wrapper.find('.vdp-event-row__col--info .vdp-type-small').text()).toBe(subtitle);
    });

    it('renders a tbd event card for isTimeTbd prop', () => {
        const wrapper = mount(
            <EventCard
                {...{
                    alt: 'Taylor Switft Tickets',
                    href: 'https://www.vividseats.com/concerts/taylor-swift-tickets/taylor-swift-gillette-stadium-8-1-3260759.html',
                    title: 'Chicago Blackhawks',
                    subtitle: 'United Center - Chicago, IL',
                    isTimeTbd: true,
                    imageSrc: 'https://a.vsstatic.com/event/concerts/taylor-swift.jpg',
                    minListPrice: 25
                }}
            />
        );

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.vdp-event-row__col--date .vdp-type-body2').text()).toBe('TBD');
    });

    it('renders a tbd event card when no date passed', () => {
        const wrapper = mount(
            <EventCard
                {...{
                    alt: 'Taylor Switft Tickets',
                    href: 'https://www.vividseats.com/concerts/taylor-swift-tickets/taylor-swift-gillette-stadium-8-1-3260759.html',
                    title: 'Chicago Blackhawks',
                    subtitle: 'United Center - Chicago, IL',
                    imageSrc: 'https://a.vsstatic.com/event/concerts/taylor-swift.jpg',
                    minListPrice: 25
                }}
            />
        );

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.vdp-event-row__col--date .vdp-type-body2').text()).toBe('TBD');
    });

    it('renders currency for international venue', () => {
        const minListPrice = 25;
        const wrapper = mount(
            <EventCard
                {...{
                    alt: 'Taylor Switft Tickets',
                    href: 'https://www.vividseats.com/concerts/taylor-swift-tickets/taylor-swift-gillette-stadium-8-1-3260759.html',
                    isInternationalVenue: true,
                    title: 'Chicago Blackhawks',
                    subtitle: 'United Center - Chicago, IL',
                    imageSrc: 'https://a.vsstatic.com/event/concerts/taylor-swift.jpg',
                    minListPrice
                }}
            />
        );

        expect(wrapper.exists()).toBe(true);
        expect(
            wrapper
                .find('.vdp-badge')
                .text()
                .trim()
        ).toBe(`from $${minListPrice} USD`);
    });

    it('verify event with schema data', () => {
        const wrapper = render(<EventCard {...props} />);

        expect(wrapper.find('.vdp-badge').text()).toContain(props.minListPrice);

        const eventRow = wrapper.find("a[role='row']");
        expect(eventRow.attr('itemtype')).toBe(`${itemTypeBase}${props.eventType}`);
        expect(eventRow.attr('href')).toBe(props.href);
        expect(eventRow.find("meta[itemProp='startDate']").attr('content')).toBe(props.date);
        expect(eventRow.find("meta[itemProp='endDate']").attr('content')).toBe(props.date);

        expect(eventRow.find("p[itemProp='name']").text()).toBe(props.title);

        const location = eventRow.find("p[itemProp='location']");
        expect(location.attr('itemtype')).toBe('http://schema.org/Place');
        expect(location.find("span[itemProp='name']").text()).toBe(props.venue.name);

        const address = location.find("span[itemProp='address']");
        expect(address.attr('itemtype')).toBe('http://schema.org/PostalAddress');
        expect(address.find("span[itemProp='addressLocality']").text()).toBe(props.venue.city);
        expect(address.find("span[itemProp='addressRegion']").text()).toBe(props.venue.regionCode);
        expect(address.find("meta[itemProp='addressCountry']").attr('content')).toBe('US');

        expect(eventRow.find("link[itemProp='url']").attr('href')).toContain(props.href);
        expect(eventRow.find("meta[itemProp='sameAs']").attr('content')).toContain(props.href);
        expect(eventRow.find("meta[itemProp='image']").attr('content')).toBe(props.imageSrc);
        expect(eventRow.find("meta[itemProp='description']").attr('content')).toBe(props.schemaDescription);
    });

    it('verify offers with schema data', () => {
        const eventCard = render(<EventCard {...props} />);

        const offers = eventCard.find("div[itemProp='offers']");
        expect(offers.attr('itemtype')).toBe('http://schema.org/AggregateOffer');
        expect(offers.find("link[itemProp='url']").attr('href')).toContain(props.href);
        expect(offers.find("meta[itemProp='priceCurrency']").attr('content')).toBe('USD');
        expect(offers.find("link[itemProp='availability']").attr('href')).toBe('http://schema.org/InStock');
        expect(offers.find("meta[itemProp='validFrom']").attr('content')).toBe(moment().format('YYYY-MM-DD'));
        expect(offers.find("meta[itemProp='validThrough']").attr('content')).toBe(props.date);
        expect(offers.find("meta[itemProp='price']").attr('content')).toBe(`${props.minListPrice}`);
    });

    it('verify perfomer with schema data', () => {
        const eventCard = render(<EventCard {...props} />);

        const perfomer = eventCard.find("div[itemProp='performer']");
        expect(perfomer.attr('itemtype')).toBe(`${itemTypeBase}${props.performerType}`);
        expect(perfomer.find("meta[itemProp='name']").attr('content')).toBe(props.performerName);
        expect(perfomer.find("meta[itemProp='sameAs']").attr('content')).toBe(props.performerUrl);
    });
});
