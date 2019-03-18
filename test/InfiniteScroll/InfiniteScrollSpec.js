import React from 'react';
import { mount } from 'enzyme';
import InfiniteScroll from '../../src/components/molecules/InfiniteScroll';
import EventRow from '../../src/components/molecules/EventRow';

describe('<InfiniteScroll />', () => {
    const mockLoadMore = jest.fn();
    const numberOfChildren = 7;
    const childHeight = 50;
    const InfiniteScrollComponent = (
        <InfiniteScroll style={{ height: '100px', overflowY: 'scroll' }} onLoadMore={mockLoadMore} isLoading={false}>
            {Array.from({ length: numberOfChildren }).map((value, index) => (
                <EventRow style={{ height: `${childHeight}px` }} subtitle="Event Location" href="!#" title="Event Name" key={index} />
            ))}
        </InfiniteScroll>
    );

    it('renders with its children', () => {
        const wrapper = mount(InfiniteScrollComponent);
        expect(wrapper.find('.vdp-infinite-scroll').exists()).toBe(true);
        expect(wrapper.find('.vdp-infinite-scroll').children().length).toBe(numberOfChildren);
    });

    it('calls loadmore when you scroll to the bottom of the list', () => {
        const wrapper = mount(InfiniteScrollComponent);
        const rootDomNode = wrapper.getDOMNode();
        rootDomNode.scrollTop = numberOfChildren * childHeight;
        wrapper.simulate('scroll', {
            target: rootDomNode
        });
        expect(mockLoadMore).toBeCalled();
    });
});
