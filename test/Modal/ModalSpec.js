import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../../src/components/molecules/Modal';

const wait = async (time = 0) => new Promise(res => setTimeout(() => res(), time));

window.matchMedia = () => ({
    addListener: () => {},
    removeListener: () => {}
});

describe('<Modal />', () => {
    it('renders a div with .vdp-react-modal', async () => {
        const wrapper = mount(<Modal isOpen animate={false} />);
        expect(wrapper.find('.vdp-react-modal').exists()).toBe(true);
        expect(wrapper.find('.vdp-react-modal__container').exists()).toBe(true);
    });

    it('does not render a div with .vdp-react-modal when isOpen = false', async () => {
        const wrapper = shallow(<Modal isOpen={false} animate={false} />);
        expect(wrapper.exists('.vdp-react-modal')).toBe(false);
        expect(wrapper.exists('.vdp-react-modal___container')).toBe(false);
    });

    it('does render backdrop when `isOpen` = true', async () => {
        const wrapper = mount(<Modal isOpen animate={false} />);
        expect(wrapper.exists('.vdp-react-backdrop')).toBe(true);
    });

    it('does not render backdrop when `disableBackdrop` = true', async () => {
        const wrapper = mount(<Modal isOpen disableBackdrop animate={false} />);
        expect(wrapper.exists('.vdp-react-backdrop')).toBe(false);
    });
    it('calls onClickBackdrop when backdrop is clicked', async () => {
        const mockOnClose = jest.fn();
        const wrapper = mount(<Modal isOpen onClickBackdrop={mockOnClose} animate={false} />);
        wrapper
            .find('.vdp-react-backdrop')
            .first()
            .simulate('click');
        expect(mockOnClose).toHaveBeenCalled();
    });
    it('renders its child static components', async () => {
        const wrapper = mount(
            <Modal isOpen animate={false}>
                <Modal.Header> Hello </Modal.Header>
                <Modal.Body> Body </Modal.Body>
                <Modal.Footer>Footer</Modal.Footer>
            </Modal>
        );
        expect(wrapper.exists('.vdp-modal__body')).toBe(true);
        expect(wrapper.exists('.vdp-modal__footer')).toBe(true);
        expect(wrapper.exists('.vdp-modal__header')).toBe(true);
    });
});
