import { FC, SyntheticEvent, HTMLAttributes, FocusEvent, MouseEvent, ReactNode, ReactNodeArray, FormEvent, ReactElement, ChangeEventHandler } from 'react';

interface BackdropProps {
    className?: string;
    dataState: 'opening' | 'closing' | 'opened' | 'closed';
    onClick?: (e?: MouseEvent<HTMLDivElement>) => void;
}
declare var Backdrop: FC<BackdropProps>;

interface BadgeProps {
    className?: string;
    type?: 'angle' | 'count' | 'rounded';
    styleAs?: 'sucess' | 'warning' | 'error';
    large?: boolean;
}

interface TypographyProps<T> extends HTMLAttributes<T>{
    className?: string;
    weight?: 'black' | 'bold' | 'medium' | 'regular';
    height?: 'compressed' | 'expanded';
    state?: 'disabled' | 'inverted' | 'muted';
    alignment?: 'left' | 'center' | 'right';
    capitalization?: 'uppercase' | 'lowercase';
    truncate?: boolean;
    list?: boolean;
    opaque?: boolean;
}

declare var Badge: FC<BadgeProps>;

interface BodyTextProps extends TypographyProps<HTMLParagraphElement> {
    importance: 1 | 2;
}
declare var BodyText: FC<BodyTextProps>;

interface ButtonProps extends Partial<HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>> {
    type?: string;
    block?: boolean;
    muted?: boolean;
    size?: 'small' | 'large';
    raised?: boolean;
    selected?: boolean;
    href?: string;
    disabled?: boolean;
    className?: string;
    grouped?: boolean;
    importance?: 'secondary' | 'tertiary' | 'text';
    onClick?: (e?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    onFocus?: (e?: FocusEvent<HTMLButtonElement | HTMLAnchorElement>) => void,
    onBlur?: (e?: FocusEvent<HTMLButtonElement | HTMLAnchorElement>) => void,
    onMouseLeave?: (e?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void,
    onMouseEnter?: (e?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void,
}

declare var Button: FC<ButtonProps>

interface CardBodyProps { 
    className?: string;
}
declare var CardBody: FC<CardBodyProps>;

interface CardFooterProps  { 
    className?: string;
    children: ReactNode | ReactNodeArray;
    centered?: boolean;
}
declare var CardFooter: FC<CardFooterProps>;

interface CardHeaderProps  { 
    className?: string;
    children: ReactNode | ReactNodeArray;
}
declare var CardHeader: FC<CardHeaderProps>;

interface CardHeroProps  { 
    alt: string;
    className?: string;
    imageSrc: string;
    loadImageViaCss?: boolean;
}
declare var CardHero: FC<CardHeroProps>;


interface CheckboxProps  { 
    id: string;
    onChange?: (e: FormEvent<HTMLInputElement>) => void;
    checked?: boolean;
    defaultChecked?: boolean;
    validationMethod?: (value: string) => string | null;
    label?: string;
    className?: string;
}
declare var Checkbox: FC<CheckboxProps>;

interface ChipProps  { 
    label: string;
    className?: string;
    value?: string;
    onClose?: (value?: string) => void;
}
declare var Chip: FC<ChipProps>;

interface DateColProps  { 
    date: string | number | Date;
    isTimeTdb?: boolean;
}

declare var DateColumn: FC<DateColProps>;

interface ErrorMessageProps  { 
    error: string;
}

declare var ErrorMessage: FC<ErrorMessageProps>;

interface FabChild extends HTMLAttributes<HTMLDivElement> { 
    children: ReactNode | ReactNodeArray;
    className?: string;
    isDivider?: boolean;
}

declare var FabChild: FC<FabChild>;

interface FilterGroupItem extends HTMLAttributes<HTMLLIElement> { 
    children: ReactNode | ReactNodeArray;
    className?: string;
}

declare var FilterGroupItem: FC<FilterGroupItem>;

interface Headline extends TypographyProps<HTMLHeadingElement> { 
    importance: 1 | 2 | 3 | 4 | 5 | 6
}

declare var Headline: FC<Headline>;

interface Icon extends HTMLAttributes<HTMLElement>  { 
    className?: string;
    size?: 'lg' | 'xl';
    type?: string;
}

declare var Icon: FC<Icon>;


interface Input extends HTMLAttributes<HTMLInputElement> {}

declare var Input: FC<Input>

interface Label {
    label?: string;
    id?: string;
}

declare var Label: FC<Label>

interface Link extends TypographyProps<HTMLAnchorElement> {
    href: string;
    className?: string;
    type?: 'link' | 'anchor';
    onClick?: (e?: MouseEvent<HTMLAnchorElement>) => void;
}

declare var Link: FC<Link>

interface ModalBody extends HTMLAttributes<HTMLDivElement>{}

declare var ModalBody: FC<ModalBody>

interface ModalFooter extends HTMLAttributes<HTMLDivElement>{
    onDismiss?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

declare var ModalFooter: FC<ModalFooter>

interface ModalFooter extends HTMLAttributes<HTMLDivElement>{
    onDismiss?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

declare var ModalFooter: FC<ModalFooter>

interface ModalHeader extends HTMLAttributes<HTMLDivElement>{
    importance?: 1 | 2 | 3 | 4 | 5 | 6;
    title?: string;
}

declare var ModalHeader: FC<ModalHeader>

interface NativeSelect extends HTMLAttributes<HTMLSelectElement>{
    /** could be more specific -- should only be <option> elements */
    children: ReactNode;
    label?: string;
    small?: boolean;
    medium?: boolean;
}

declare var NativeSelect: FC<NativeSelect>

interface Radio extends HTMLAttributes<HTMLInputElement>{
    label: string;
    checked?: boolean;
    id?: string;
}

declare var Radio: FC<Radio>

interface SelectOption extends HTMLAttributes<HTMLOptionElement>{}
declare var SelectOption: FC<SelectOption>

interface SkeletonBone {
    firstColumnLineCount?: number;
    secondColumnLineCount?: number;
}
declare var SkeletonBone: FC<SkeletonBone>

interface SmallText extends TypographyProps<HTMLParagraphElement>{}
declare var SmallText: FC<SmallText>

interface Subhead extends TypographyProps<HTMLParagraphElement>{}
declare var Subhead: FC<Subhead>

interface Subtitle extends TypographyProps<HTMLParagraphElement>{
    importance?: 1 | 2;
}
declare var Subtitle: FC<Subtitle>

interface Tab extends TypographyProps<HTMLLIElement>{
    active?: boolean;
}
declare var Tab: FC<Tab>

interface TinyText extends TypographyProps<HTMLLIElement>{}
declare var TinyText: FC<TinyText>

interface Toggle extends HTMLAttributes<HTMLLabelElement>{
    title?: string;
    ariaLabel?: string;
    on?: boolean;
    onToggle?: ChangeEventHandler<HTMLInputElement>;
    defaultOn?: boolean;
}
declare var Toggle: FC<Toggle>

interface VividSeatsLogo extends HTMLAttributes<HTMLAnchorElement> {
    href?: string;
    width?: string;
    height?: string;
}
declare var VividSeatsLogo: FC<VividSeatsLogo>

