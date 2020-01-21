import React from 'react';
import { mount } from 'enzyme';
import EventCard from '../../src/components/molecules/EventCard';

describe('<EventCard />', () => {
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
        expect(wrapper.find('.vdp-card__hero').getElement().props['aria-label']).toBe(alt);
        expect(wrapper.getElement().props.href).toBe(href);
        expect(wrapper.find('.vdp-card__hero').getElement().props.style.backgroundImage).toBe(`url('${imageSrc}')`);
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
});
