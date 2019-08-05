import {
    FC,
    SyntheticEvent,
    HTMLAttributes,
    FocusEvent,
    MouseEvent,
    ReactNode,
    ReactNodeArray,
    FormEvent,
    ReactElement,
    ChangeEventHandler,
    EventHandler,
    FormEventHandler,
    Context,
    Ref,
    MouseEventHandler,
    FocusEventHandler,
    KeyboardEventHandler
} from 'react';

type ValidationMethod = (value: string) => string | null;

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

interface TypographyProps<T> extends HTMLAttributes<T> {
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
    onFocus?: (e?: FocusEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    onBlur?: (e?: FocusEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    onMouseLeave?: (e?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    onMouseEnter?: (e?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

declare var Button: FC<ButtonProps>;

interface CardBodyProps {
    className?: string;
}
declare var CardBody: FC<CardBodyProps>;

interface CardFooterProps {
    className?: string;
    children: ReactNode | ReactNodeArray;
    centered?: boolean;
}
declare var CardFooter: FC<CardFooterProps>;

interface CardHeaderProps {
    className?: string;
    children: ReactNode | ReactNodeArray;
}
declare var CardHeader: FC<CardHeaderProps>;

interface CardHeroProps {
    alt: string;
    className?: string;
    imageSrc: string;
    loadImageViaCss?: boolean;
}
declare var CardHero: FC<CardHeroProps>;

interface CheckboxProps {
    id: string;
    onChange?: (e: FormEvent<HTMLInputElement>) => void;
    checked?: boolean;
    defaultChecked?: boolean;
    validationMethod?: ValidationMethod;
    label?: string;
    className?: string;
}
declare var Checkbox: FC<CheckboxProps>;

interface ChipProps {
    label: string;
    className?: string;
    value?: string;
    onClose?: (value?: string) => void;
}
declare var Chip: FC<ChipProps>;

interface DateColProps {
    date: string | number | Date;
    isTimeTdb?: boolean;
}

declare var DateColumn: FC<DateColProps>;

interface ErrorMessageProps {
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
    importance: 1 | 2 | 3 | 4 | 5 | 6;
}

declare var Headline: FC<Headline>;

interface Icon extends HTMLAttributes<HTMLElement> {
    className?: string;
    size?: 'lg' | 'xl';
    type?: string;
}

declare var Icon: FC<Icon>;

interface Input extends HTMLAttributes<HTMLInputElement> {}

declare var Input: FC<Input>;

interface Label {
    label?: string;
    id?: string;
}

declare var Label: FC<Label>;

interface Link extends TypographyProps<HTMLAnchorElement> {
    href: string;
    className?: string;
    type?: 'link' | 'anchor';
    onClick?: (e?: MouseEvent<HTMLAnchorElement>) => void;
}

declare var Link: FC<Link>;

interface ModalBody extends HTMLAttributes<HTMLDivElement> {}

declare var ModalBody: FC<ModalBody>;

interface ModalFooter extends HTMLAttributes<HTMLDivElement> {
    onDismiss?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

declare var ModalFooter: FC<ModalFooter>;

interface ModalFooter extends HTMLAttributes<HTMLDivElement> {
    onDismiss?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

declare var ModalFooter: FC<ModalFooter>;

interface ModalHeader extends HTMLAttributes<HTMLDivElement> {
    importance?: 1 | 2 | 3 | 4 | 5 | 6;
    title?: string;
}

declare var ModalHeader: FC<ModalHeader>;

interface NativeSelect extends HTMLAttributes<HTMLSelectElement> {
    /** could be more specific -- should only be <option> elements */
    children: ReactNode;
    label?: string;
    small?: boolean;
    medium?: boolean;
}

declare var NativeSelect: FC<NativeSelect>;

interface Radio extends HTMLAttributes<HTMLInputElement> {
    label: string;
    checked?: boolean;
    id?: string;
}

declare var Radio: FC<Radio>;

interface SelectOption extends HTMLAttributes<HTMLOptionElement> {}
declare var SelectOption: FC<SelectOption>;

interface SkeletonBone {
    firstColumnLineCount?: number;
    secondColumnLineCount?: number;
}
declare var SkeletonBone: FC<SkeletonBone>;

interface SmallText extends TypographyProps<HTMLParagraphElement> {}
declare var SmallText: FC<SmallText>;

interface Subhead extends TypographyProps<HTMLParagraphElement> {}
declare var Subhead: FC<Subhead>;

interface Subtitle extends TypographyProps<HTMLParagraphElement> {
    importance?: 1 | 2;
}
declare var Subtitle: FC<Subtitle>;

interface Tab extends TypographyProps<HTMLLIElement> {
    active?: boolean;
}
declare var Tab: FC<Tab>;

interface TinyText extends TypographyProps<HTMLLIElement> {}
declare var TinyText: FC<TinyText>;

interface Toggle extends HTMLAttributes<HTMLLabelElement> {
    title?: string;
    ariaLabel?: string;
    on?: boolean;
    onToggle?: ChangeEventHandler<HTMLInputElement>;
    defaultOn?: boolean;
}
declare var Toggle: FC<Toggle>;

interface VividSeatsLogo extends HTMLAttributes<HTMLAnchorElement> {
    href?: string;
    width?: string;
    height?: string;
}
declare var VividSeatsLogo: FC<VividSeatsLogo>;

interface Accordion {
    initialOpenedIndex?: number;
    /** For controlled components. Use -1 to indicate no Collapse components are open. */
    openedIndex?: number;
    /** For use with controlled props. Fires when an accordion is open with the opened element's index */
    onAccordionOpen: (currentIndex: number) => void;
}
declare var Accordion: FC<Accordion>;

interface Card {
    type?: 'standard' | 'list' | 'anchor';
    /** this method is also called upon when users presses the enter key on the card element */
    onClick?: (e?: MouseEvent<HTMLElement> | KeyboardEvent) => void;
    children: ReactNode | ReactNodeArray;
    role?: string;
}

declare var Card: FC<Card>;

interface Collapse extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    open?: boolean;
    initialOpen?: boolean;
    wrap?: boolean;
    collapseOnMobileOnly?: boolean;
    onOpenChange?: (openState: boolean) => void;
    title: ReactNode;
}

declare var Collapse: FC<Collapse>;

interface Column extends HTMLAttributes<HTMLDivElement> {}
declare var Column: FC<Column>;

interface Venue {
    name: string;
    city: string;
    regionCode: string;
    countryCode?: string;
}

interface Thumbnail {
    src?: string;
    alt?: string;
}
interface EventRow extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    href: string;
    venue: Venue;
    title: ReactNode;
    subtitle?: ReactNode;
    dateRange?: string;
    date: string | number | Date;
    thumbnail?: Thumbnail;
    isTimeTbd?: boolean;
    imageUrl?: string;
    minListPrice?: number;
    schemaDescription?: string;
    ticketCount?: number;
    performerName?: string;
    performerType?: string;
    performerUrl?: string;
    hasButton?: boolean;
}
declare var EventRow: FC<EventRow>;

interface ExpandableContent extends HTMLAttributes<HTMLDivElement> {
    maxHeight?: string;
    buttonText?: string;
    forceExpanded?: boolean;
    children: ReactNode | ReactNodeArray;
}

declare var ExpandableContent: FC<ExpandableContent>;

interface Fab extends HTMLAttributes<HTMLDivElement> {
    visible?: boolean;
}

declare var Fab: FC<Fab>;

interface FilterGroup extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    groupName: string;
    children: ReactNode | ReactNodeArray;
    onSelect?: (e?: MouseEvent<HTMLElement>) => void;
    limit?: number;
}

declare var FilterGroup: FC<FilterGroup>;

interface Form extends HTMLAttributes<HTMLFormElement> {
    /** Callback is passed plain JavaScript object with key/value pairs of `name` props and input value at time of submission. */
    onSubmit: (output: object) => void;
    /** Custom callback when validation fails on the form. Takes in an array of inputs with errors as the parameter */
    onValidationFailure: (errors: ReactElement[]) => void;
    children?: FormContextConsumer | ReactNode;
}
declare const Form: FC<Form>;

interface FormContextConsumer {
    children: (ctx: Context<{ setForm: (ref: Ref<ReactNode>) => void }>) => ReactNode | ReactNodeArray;
}

declare const FormContextConsumer: FC<FormContextConsumer>;

interface LinkGroup extends HTMLAttributes<HTMLUListElement> {
    type: 'striped' | 'muted';
}

declare const LinkGroup: FC<LinkGroup>;

interface Modal extends HTMLAttributes<HTMLElement> {
    backgroundImage?: string;
    dataState?: 'opened' | 'closed';
    disableBackdrop?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    title?: string;
    type?: 'sheet' | 'full-screen';
    closeOnBackdropClick?: boolean;
}

declare const Modal: FC<Modal>;

interface PasswordInput extends Input {}
declare const PasswordInput: FC<PasswordInput>;

interface Row extends HTMLAttributes<HTMLDivElement> {}
declare const Row: FC<Row>;

interface SearchField {
    id?: string;
    name?: string;
    value?: string;
    type?: string;
    autoComplete?: string;
    placeholder?: string;
    className?: string;
    onClick?: MouseEventHandler;
    onFocus?: FocusEventHandler;
    onBlur?: FocusEventHandler;
    onChange?: (value: string) => void;
    onMouseLeave?: MouseEventHandler;
    onMouseEnter?: MouseEventHandler;
    onKeyPress?: (value: string) => void;
    onSubmit?: (value: string) => void;
}
declare const SearchField: FC<SearchField>;

interface Select extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>{
    id?: string;
    name?: string;
    value?: string;
    type?: string;
    error?: string;
    label?: string;
    onChange?: (value: string) => void;
    onBlur?: FocusEventHandler;
    validationMethod?: ValidationMethod,
    outlined?: boolean;
    small?: boolean;
    medium?: boolean;
    disabled?: boolean;
}
declare const Select: FC<Select>;


interface SkeletonLoader {
    rowCount?: number;
    isLoading: boolean,
    firstColumnLineCount?: number;
    secondColumnLineCount?: number,
    skeletonBone?: ReactNode,
    children: ReactNode | ReactNodeArray;
}
declare const SkeletonLoader: FC<SkeletonLoader>;

interface TabGroup extends HTMLAttributes<HTMLUListElement>{
    dark?: boolean,
    compressed?: boolean;
}
declare const TabGroup: FC<TabGroup>;

interface TextField extends Input{
        id: string;
        label: string;
        name: string;
        /** If the noValidate prop is present, the field will not turn green or red to indicate its validation status. Do not pass this in if you are passing in a validationMethod Prop */
        noValidate?: boolean; 
        type?: string;
        outlined?: boolean;
        defaultValue?: string;
        error?: string;
        value?: string;
        /** Validation method that should return a string for the error to displayed. Do not pass in validationMethod if you pass in noValidate prop */
        validationMethod?: ValidationMethod,
        trailingIcon?: ReactNode
        helperText?: string
}
declare const TextField: FC<TextField>;
