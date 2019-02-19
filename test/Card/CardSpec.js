import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../../src/components/molecules/Card';
import CardBody from '../../src/components/atoms/CardBody';
import CardHeader from '../../src/components/atoms/CardHeader';
import CardFooter from '../../src/components/atoms/CardFooter';

const subComponentTests = [
    { name: 'Card.Header', component: CardHeader, checkForStyles: ['.vdp-card__header'] },
    { name: 'Card.Body', component: CardBody, checkForStyles: ['.vdp-card__body'] },
    { name: 'Card.Footer', component: CardFooter, checkForStyles: ['.vdp-card__footer'] }
];

describe('<Card />', () => {
    // basic test for subcomponents to ensure appropriate styles are added
    subComponentTests.forEach(subComponent =>
        describe(`<${subComponent.name} />`, () =>
            subComponent.checkForStyles.forEach(style =>
                it(`renders a div with class ${style}`, () =>
                    expect(
                        mount(<subComponent.component>Lorem ipsum ivum.</subComponent.component>)
                            .find(style)
                            .exists()
                    ).toBe(true))
            ))
    );

    describe('<Card.Hero/>', () => {
        it('renders a div with an img child element', () => {
            const imageSrc = 'https://a.vsstatic.com/mobile/app/mlb/washington-nationals.jpg';
            const wrapper = mount(<Card.Hero imageSrc={imageSrc} alt="Quite the vivid picture, no?" />);
            expect(wrapper.find('img').props()['src']).toBe(imageSrc);
        });

        it('renders a div with a styled background image', () => {
            const imageSrc = 'https://a.vsstatic.com/mobile/app/mlb/washington-nationals.jpg';
            const wrapper = shallow(<Card.Hero imageSrc={imageSrc} loadImageViaCss alt="Quite the vivid picture, no?" />);
            expect(wrapper.find('div').props()['style']).toHaveProperty('backgroundImage', `url('${imageSrc}');`);
        });
    });

    describe('<Card.Footer />', () => {
        it('renders a div with a centered class', () => {
            const wrapper = mount(<Card.Footer centered>Footing all-day.</Card.Footer>);
            expect(wrapper.find('div').hasClass('--centered')).toBe(true);
        });
    });

    it('renders a card', () => {
        const wrapper = mount(<Card>Four score and seven years ago...</Card>);
        expect(wrapper.find('.vdp-card').exists()).toBe(true);
        const cardBody = wrapper.find(CardBody);
        expect(cardBody.exists()).toBe(true);
        expect(cardBody.find('.vdp-card__body').exists()).toBe(true);
    });

    it('renders a list card with a header border', () => {
        const wrapper = mount(
            <Card type="list">
                <Card.Header>
                    <h5 className="vdp-type-headline6">List Card</h5>
                </Card.Header>
                <Card.Body>
                    <ul>
                        <li> One item </li>
                        <li> Two item </li>
                        <li> Three item </li>
                    </ul>
                </Card.Body>
            </Card>
        );
        const cardHeader = wrapper.find(CardHeader);
        expect(cardHeader.parent().hasClass('vdp-card--list')).toBe(true);
        expect(cardHeader.find('.vdp-card__header').exists()).toBe(true);
    });

    it('renders an anchor card which is clickable', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
            <Card type="anchor" onClick={mockOnClick} role="Anchor">
                <Card.Header>Anchor Card</Card.Header>
                <Card.Body>Might as well live in Anchorage, Alaska, 'cuz I'm anchored all day.</Card.Body>
            </Card>
        );
        const cardAnchor = wrapper.find('.vdp-card--anchor');
        cardAnchor.simulate('click');
        expect(cardAnchor.exists()).toBe(true);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('renders an anchor card which is clickable with the Enter keypress', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(
            <Card type="anchor" onClick={mockOnClick} role="Anchor">
                <Card.Header>Anchor Card</Card.Header>
                <Card.Body>Might as well live in Anchorage, Alaska, 'cuz I'm anchored all day.</Card.Body>
            </Card>
        );
        const cardAnchor = wrapper.find('.vdp-card--anchor');
        cardAnchor.simulate('click', { key: 'Enter' });
        expect(cardAnchor.exists()).toBe(true);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('renders a card with subcomponents', () => {
        const wrapper = mount(
            <Card>
                <Card.Header>Lorem</Card.Header>I should be wrapped in a Card.Body component.
                <Card.Footer>Ivum</Card.Footer>
            </Card>
        );
        const cardHeader = wrapper.find(CardHeader);
        const cardBody = wrapper.find(CardBody);
        const cardFooter = wrapper.find(CardFooter);
        expect(wrapper.find('.vdp-card').exists()).toBe(true);
        expect(cardHeader.exists()).toBe(true);
        expect(cardBody.exists()).toBe(true);
        expect(cardFooter.exists()).toBe(true);
    });
});
