import React from 'react';
import { mount } from 'enzyme';
import { renderToString } from 'react-dom/server';
import Modal from '../../src/components/molecules/Modal';

window.matchMedia = () => ({
    addListener: () => {},
    removeListener: () => {}
});

describe('<Modal />', () => {
    it('renders a div with .vdp-react-modal', async () => {
        const wrapper = mount(<Modal isOpen />);
        expect(wrapper.find('.vdp-react-modal').exists()).toBe(true);
        expect(wrapper.find('.vdp-react-modal__container').exists()).toBe(true);
    });

    it('does not render a div with .vdp-react-modal when isOpen = false', async () => {
        const wrapper = mount(<Modal isOpen={false} />);
        expect(wrapper.exists('.vdp-react-modal')).toBe(false);
        expect(wrapper.exists('.vdp-react-modal___container')).toBe(false);
    });

    it('does render backdrop when `isOpen` = true', async () => {
        const wrapper = mount(<Modal isOpen />);
        expect(wrapper.exists('.vdp-react-backdrop')).toBe(true);
    });

    it('does not render backdrop when `disableBackdrop` = true', async () => {
        const wrapper = mount(<Modal isOpen disableBackdrop />);
        expect(wrapper.exists('.vdp-react-backdrop')).toBe(false);
    });
    it('calls onClickBackdrop when backdrop is clicked', async () => {
        const mockOnClose = jest.fn();
        const wrapper = mount(<Modal isOpen onClickBackdrop={mockOnClose} />);
        wrapper.find('aside.vdp-react-modal').simulate('click');
        expect(mockOnClose).toHaveBeenCalled();
    });

    it('Does not call onClose when canCloseWithBackdropClick is false ', async () => {
        const mockOnClose = jest.fn();
        const wrapper = mount(<Modal isOpen onClose={mockOnClose} canCloseWithBackdropClick={false} />);
        wrapper
            .find('.vdp-react-backdrop')
            .first()
            .simulate('click');
        expect(mockOnClose).not.toHaveBeenCalled();
    });

    it('renders its child static components', async () => {
        const wrapper = mount(
            <Modal isOpen>
                <Modal.Header> Hello </Modal.Header>
                <Modal.Body> Body </Modal.Body>
                <Modal.Footer>Footer</Modal.Footer>
            </Modal>
        );
        expect(wrapper.exists('.vdp-modal__body')).toBe(true);
        expect(wrapper.exists('.vdp-modal__footer')).toBe(true);
        expect(wrapper.exists('.vdp-modal__header')).toBe(true);
    });

    it('keeps components mounted when destroyOnClose is false', () => {
        const wrapper = mount(
            <Modal isOpen={false} destroyOnClose={false}>
                <Modal.Header>Hello </Modal.Header>
                <Modal.Body>Body</Modal.Body>
                <Modal.Footer>Footer</Modal.Footer>
            </Modal>
        );

        expect(wrapper.exists('.vdp-modal__footer')).toBe(true);
        expect(wrapper.exists('.vdp-modal__header')).toBe(true);
        expect(
            wrapper
                .find('aside .vdp-react-modal__container')
                .hostNodes()
                .props().style.opacity
        ).toBe(0);
    });

    it('works with SSR', () => {
        const wrapper = renderToString(
            <Modal isOpen={true}>
                <Modal.Header>Hello </Modal.Header>
                <Modal.Body>Body</Modal.Body>
                <Modal.Footer>Footer</Modal.Footer>
            </Modal>
        );

        expect(wrapper.includes('vdp-modal__body')).toBe(true);
        expect(wrapper.includes('vdp-modal__footer')).toBe(true);
        expect(wrapper.includes('vdp-modal__header')).toBe(true);
    });
});
