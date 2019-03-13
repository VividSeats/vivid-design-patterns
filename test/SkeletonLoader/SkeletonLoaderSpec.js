import React from 'react';
import { mount } from 'enzyme';
import SkeletonLoader from '../../src/components/molecules/SkeletonLoader';
import SkeletonBone from '../../src/components/atoms/SkeletonBone';

describe('<SkeletonLoader />', () => {
    const rowCount = 5;
    const firstColumnLineCount = 2;
    const secondColumnLineCount = 3;

    const skeletonLoaderComponent = (
        <SkeletonLoader
            rowCount={rowCount}
            firstColumnLineCount={firstColumnLineCount}
            secondColumnLineCount={secondColumnLineCount}
            isLoading={true}>
            <div className="loaded-children">Loaded</div>
            <div className="loaded-children">Loaded</div>
            <div className="loaded-children">Loaded</div>
        </SkeletonLoader>
    );

    it('it renders a skeleton when its loading', () => {
        const wrapper = mount(skeletonLoaderComponent);
        expect(wrapper.find('.loaded-children').exists()).toBe(false);
        expect(wrapper.find('.vdp-event-row--skeleton').length).toBe(rowCount);
    });

    it('it renders its children when its done loading', () => {
        const wrapper = mount(skeletonLoaderComponent);
        wrapper.setProps({ isLoading: false });
        expect(wrapper.find('.loaded-children').length).toBe(3);
        expect(wrapper.find('.vdp-event-row--skeleton').length).toBe(0);
    });

    it('can show different lines in the skeleton loaders first and second column', () => {
        const wrapper = mount(skeletonLoaderComponent);
        expect(
            wrapper
                .find(SkeletonBone)
                .first()
                .find('.vdp-event-row__col--date .skeleton__line').length
        ).toBe(firstColumnLineCount);
        expect(
            wrapper
                .find(SkeletonBone)
                .first()
                .find('.vdp-event-row__col--info .skeleton__line').length
        ).toBe(secondColumnLineCount);
    });

    it('can render custom skeleton bones', () => {
        const customSkeletonLoader = (
            <SkeletonLoader rowCount={rowCount} skeletonBone={<div className="custom-bone">Custom</div>} isLoading={true}>
                <div className="loaded-children">Loaded</div>
                <div className="loaded-children">Loaded</div>
                <div className="loaded-children">Loaded</div>
            </SkeletonLoader>
        );

        const wrapper = mount(customSkeletonLoader);
        expect(wrapper.find('.loaded-children').exists()).toBe(false);
        expect(wrapper.find('.custom-bone').length).toBe(rowCount);
    });
});
