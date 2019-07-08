import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../../src/components/molecules/Modal';
import Button from '../../src/components/atoms/Button';

describe('<Modal />', () => {
    it('renders an <aside> element', () => {
        const wrapper = shallow(<Modal dataState="opened" />);
        expect(wrapper.find('aside').hasClass('vdp-modal')).toBe(true);
    });

    it('does not render a component without dataState prop', () => {
        const wrapper = mount(<Modal />);
        expect(wrapper.exists('.vdp-modal')).toBe(false);
    });

    it('should have a backdrop', () => {
        const wrapper = mount(<Modal dataState="opened" />);
        expect(wrapper.exists('.vdp-backdrop')).toBe(true);
    });

    it('should have a backdrop disabled when specified', () => {
        const wrapper = mount(<Modal dataState="opened" disableBackdrop />);
        expect(wrapper.exists('.vdp-backdrop')).toBe(false);
    });

    it('can be a sheet modal', () => {
        const wrapper = mount(<Modal dataState="opened" type="sheet" />);
        expect(wrapper.exists('.vdp-modal--sheet')).toBe(true);
    });

    it('can be dismissed by clicking the dismiss button', done => {
        const mockOnClose = jest.fn();
        const wrapper = mount(<Modal dataState="opened" onClose={mockOnClose} />);
        wrapper.find('.vdp-button').simulate('click');

        setTimeout(() => {
            expect(mockOnClose).toHaveBeenCalledTimes(1);
            expect(wrapper.state('dataState')).toEqual('closed');
            done();
        }, 750);
    });

    it('can be dismissed by clicking on the backdrop', done => {
        const mockOnClose = jest.fn();
        const wrapper = mount(<Modal dataState="opened" onClose={mockOnClose} />);
        wrapper.find('.vdp-backdrop').simulate('click');

        setTimeout(() => {
            expect(mockOnClose).toHaveBeenCalledTimes(1);
            expect(wrapper.state('dataState')).toEqual('closed');
            done();
        }, 750);
    });

    it("won't be dismissed by clicking on the backdrop if prop is false", done => {
        const mockOnClose = jest.fn();
        const wrapper = mount(<Modal dataState="opened" onClose={mockOnClose} closeOnBackdropClick={false} />);
        wrapper.find('.vdp-backdrop').simulate('click');

        setTimeout(() => {
            expect(mockOnClose).toHaveBeenCalledTimes(0);
            expect(wrapper.state('dataState')).toEqual('opened');
            done();
        }, 750);
    });

    it('supports header, body, and footer subcomponents', () => {
        const wrapper = mount(
            <Modal dataState="opened">
                <Modal.Header className="modalHeaderClass" title="Modal Header">
                    <Button className="modalHeaderButtonClass" importance="text">
                        Click
                    </Button>
                </Modal.Header>
                <Modal.Body className="modalBodyClass">Modal Body</Modal.Body>
                <Modal.Footer className="modalFooterClass">
                    <Button className="modalButtonClass" importance="tertiary">
                        Click
                    </Button>
                </Modal.Footer>
            </Modal>
        );

        expect(wrapper.exists('.vdp-modal__header.modalHeaderClass'));
        expect(wrapper.exists('.vdp-modal__header.modalHeaderClass button.modalHeaderButtonClass'));
        expect(wrapper.exists('.vdp-modal__body.modalBodyClass'));
        expect(wrapper.exists('.vdp-modal__footer.modalFooterClass button.modalFooterClass'));
    });

    it('adds child elements to the modal body if they are not subcomponents', () => {
        const someClass = 'someClass';
        const content = 'Modal body content';

        const wrapper = mount(
            <Modal dataState="opened">
                <p className={someClass}>{content}</p>
            </Modal>
        );
        expect(
            wrapper
                .find(`.vdp-modal__body .${someClass}`)
                .render()
                .text()
        ).toEqual(content);
    });

    it('renders a modal header with title if title prop is passed', () => {
        const title = 'Modal Title';
        const wrapper = mount(<Modal dataState="opened" title={title} />);
        expect(
            wrapper
                .find('.vdp-modal__header')
                .render()
                .text()
        ).toEqual(title);
    });
});
