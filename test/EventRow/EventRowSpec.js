import React from 'react';
import { shallow, mount } from 'enzyme';
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
        const wrapper = shallow(<EventRow href={href} title={title} subtitle={subtitle} />);

        expect(wrapper.exists()).toBe(true);
        expectColExists(wrapper, INFO);
        expect(wrapper.find(`[href="${href}"]`).length).toBe(1);
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

    it('renders a thumbnail event row', () => {
        const wrapper = shallow(
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
        expect(wrapper.find(`[href="${href}"]`).length).toBe(1);
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
});
