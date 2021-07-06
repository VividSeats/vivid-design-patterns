import React from 'react';
import Row from '../src/components/molecules/Row';
import Column from '../src/components/molecules/Column';
import SmallText from '../src/components/atoms/SmallText';
import './docz.scss';

const brandColors = [{ name: '$color-brand-primary', value: '#ce3197' }, { name: '$color-brand-secondary', value: '#04092c' }];
const neutralColors = [
    { name: '$color-neutral-100', value: '#f6f6fb' },
    { name: '$color-neutral-200', value: '#d3d3dc' },
    { name: '$color-neutral-300', value: '#a0a2b3' },
    { name: '$color-neutral-400', value: '#717488' },
    { name: '$color-neutral-600', value: '#474b5e' },
    { name: '$color-neutral-800', value: '#04092c' }
];
const secondaryColors = [
    { name: '$color-blue-100', value: '#d9f2fc' },
    { name: '$color-blue-200', value: '#b3e4f9' },
    { name: '$color-blue-300', value: '#7ad0f5' },
    { name: '$color-blue-400', value: '#27b2ef' },
    { name: '$color-blue-600', value: '#0983b6' },
    { name: '$color-blue-800', value: '#065474' },
    { name: '$color-cobalt-100', value: '#d6e6fd' },
    { name: '$color-cobalt-200', value: '#afcefb' },
    { name: '$color-cobalt-300', value: '#75aaf6' },
    { name: '$color-cobalt-400', value: '#277cf4' },
    { name: '$color-cobalt-600', value: '#0951b6' },
    { name: '$color-cobalt-800', value: '#003b90' },
    { name: '$color-green-100', value: '#e6ffed' },
    { name: '$color-green-200', value: '#c0eab7' },
    { name: '$color-green-300', value: '#8be475' },
    { name: '$color-green-400', value: '#4ac76d' },
    { name: '$color-green-600', value: '#19aa61' },
    { name: '$color-green-800', value: '#008f67' },
    { name: '$color-indigo-100', value: '#f2f0ff' },
    { name: '$color-indigo-200', value: '#d9d6fd' },
    { name: '$color-indigo-300', value: '#a69fe2' },
    { name: '$color-indigo-400', value: '#5d50cb' },
    { name: '$color-indigo-600', value: '#312784' },
    { name: '$color-indigo-800', value: '#211a58' },
    { name: '$color-lime-100', value: '#f3f7de' },
    { name: '$color-lime-200', value: '#e8ef9f' },
    { name: '$color-lime-300', value: '#c4d75d' },
    { name: '$color-lime-400', value: '#94be24' },
    { name: '$color-lime-600', value: '#62a10a' },
    { name: '$color-lime-800', value: '#2d6d1b' },
    { name: '$color-magenta-100', value: '#fbe5f3' },
    { name: '$color-magenta-200', value: '#f7b4df' },
    { name: '$color-magenta-300', value: '#e07bbd' },
    { name: '$color-magenta-400', value: '#ce3197' },
    { name: '$color-magenta-600', value: '#8f1564' },
    { name: '$color-magenta-800', value: '#440c36' },
    { name: '$color-orange-100', value: '#fff5f0' },
    { name: '$color-orange-200', value: '#ffd5c0' },
    { name: '$color-orange-300', value: '#fea071' },
    { name: '$color-orange-400', value: '#fe894e' },
    { name: '$color-orange-600', value: '#f76e27' },
    { name: '$color-orange-800', value: '#d54700' },
    { name: '$color-red-100', value: '#feecec' },
    { name: '$color-red-200', value: '#ffb1ba' },
    { name: '$color-red-300', value: '#ff7079' },
    { name: '$color-red-400', value: '#f93c3a' },
    { name: '$color-red-600', value: '#dc1818' },
    { name: '$color-red-800', value: '#9d0706' },
    { name: '$color-teal-100', value: '#dafafb' },
    { name: '$color-teal-200', value: '#b5f5f8' },
    { name: '$color-teal-300', value: '#78e4e8' },
    { name: '$color-teal-400', value: '#13bdc3' },
    { name: '$color-teal-600', value: '#1c94a5' },
    { name: '$color-teal-800', value: '#086e88' },
    { name: '$color-yellow-100', value: '#fff9d6' },
    { name: '$color-yellow-200', value: '#fff099' },
    { name: '$color-yellow-300', value: '#ffe75c' },
    { name: '$color-yellow-400', value: '#fcd72d' },
    { name: '$color-yellow-600', value: '#ffc000' },
    { name: '$color-yellow-800', value: '#e8a93a' }
];
const ColorGrid = () => {
    return (
        <>
            <h2>Brand</h2>
            <Row>
                {brandColors.map(({ name, value }) => (
                    <Column sm={6} md={4} className={'mb-xl'}>
                        <div className="swatch" style={{ backgroundColor: value }} />
                        <SmallText weight="medium">{name}</SmallText>
                        <SmallText>{value}</SmallText>
                    </Column>
                ))}
            </Row>
            <h2>Neutral</h2>
            <Row>
                {neutralColors.map(({ name, value }) => (
                    <Column sm={6} md={4} className={'mb-xl'}>
                        <div className="swatch" style={{ backgroundColor: value }} />
                        <SmallText weight="medium">{name}</SmallText>
                        <SmallText>{value}</SmallText>
                    </Column>
                ))}
            </Row>
            <h2>Secondary</h2>
            <Row>
                {secondaryColors.map(({ name, value }) => (
                    <Column sm={6} md={4} className={'mb-xl'}>
                        <div className="swatch" style={{ backgroundColor: value }} />
                        <SmallText weight="medium">{name}</SmallText>
                        <SmallText>{value}</SmallText>
                    </Column>
                ))}
            </Row>
        </>
    );
};

export default ColorGrid;
