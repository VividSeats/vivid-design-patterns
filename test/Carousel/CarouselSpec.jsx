import React from 'react';
import { shallow, mount } from 'enzyme';
import Carousel from '../../src/components/molecules/Carousel';

describe('<Carousel />', () => {
    const activeIndex = 1;
    const wrapper = mount(
        <Carousel activePanelIndex={activeIndex}>
            <Carousel.Panel>1</Carousel.Panel>
            <Carousel.Panel>2</Carousel.Panel>
            <Carousel.Panel>3</Carousel.Panel>
        </Carousel>
    );

    it(`renders a div with carousel component with three carousel panels`, () => {
        expect(wrapper.find('.vdp-carousel').exists()).toBe(true);
        expect(wrapper.find('.vdp-carousel__slide').length).toBe(3);
    });

    it(`renders the active panel to be visible and the inactive panels as hidden`, () => {
        const carouselContainer = wrapper.find('div.vdp-carousel__container');
        expect(carouselContainer.props().style.transform).toContain(`translateX(-${activeIndex * 100}%)`);
        carouselContainer.children().forEach((child, index) => {
            const expectedValue = index === activeIndex;
            expect(child.props().isVisible).toBe(expectedValue);
        });
    });
});
