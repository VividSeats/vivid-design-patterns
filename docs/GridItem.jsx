import React from 'react';
import { Icon } from '../src';

const GridItem = ({ children }) => {
    return <div style={{ background: '#f2f3f4', width: '100px', height: '100px', border: '2px solid #ccc' }}>{children}</div>;
};

export default GridItem;
