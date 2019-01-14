import React from 'react';
import Button from '../../src/components/atoms/Button';
import '../../src/styles/_button.scss';

const Buttons = () => (
    <div>
        <h1> Button Sizes </h1>
        <Button size="small">Small</Button>
        <Button>Default</Button>
        <Button size="large">Large</Button>
        <Button>Default</Button>
        <h2> Button Importance </h2>
        <Button importance="secondary">Secondary</Button>
        <Button importance="tertiary">Tertiary</Button>
        <Button importance="text">Text</Button>
        <Button importance="text" muted>
            Muted Text
        </Button>
        <h2>Grouped Buttons</h2>
        <Button grouped>Grouped Button</Button>
        <Button grouped>Grouped Button</Button>
        <Button grouped selected>
            Selected Grouped Button
        </Button>
        <h2>Miscellaneous Buttons</h2>
        <Button block>Block</Button>
        <Button raised>Raised</Button>
        <Button disabled>Disabled</Button>
    </div>
);

export default Buttons;
