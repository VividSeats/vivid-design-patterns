import { FC, SyntheticEvent } from 'react';

interface BackdropProps {
    className?: string;
    dataState: 'opening' | 'closing' | 'opened' | 'closed';
    onClick: () => void;
}
declare var Backdrop: FC<BackdropProps>;

interface BadgeProps {
    className?: string;
    type?: 'angle' | 'count' | 'rounded';
    styleAs?: 'sucess' | 'warning' | 'error';
    large?: boolean;
}

interface TypographyProps {
    className?: string;
    weight: 'black' | 'bold' | 'medium' | 'regular';
    height: 'compressed' | 'expanded';
    state: 'disabled' | 'inverted' | 'muted';
    alignment: 'left' | 'center' | 'right';
    capitalization: 'uppercase' | 'lowercase';
    truncate: boolean;
    list: boolean;
    opaque: boolean;
}

declare var Badge: FC<BadgeProps>;

interface BodyTextProps extends TypographyProps {
    importance: 1 | 2;
}
declare var BodyText: FC<BodyTextProps>;

interface ButtonProps extends HTMLButtonElement {
    type: string;
    block: boolean;
    muted: boolean;
    size: 'small' | 'large';
    raised: boolean;
    selected: boolean;
    href: string;
    disabled: boolean;
    className: string;
    grouped: boolean;
    importance: 'secondary' | 'tertiary' | 'text';
}

declare var Button: FC<ButtonProps>
