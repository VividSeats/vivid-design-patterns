import {
    FC,
    SyntheticEvent,
    HTMLAttributes,
    FocusEvent,
    MouseEvent,
    ReactNode,
    FormEvent,
    ReactElement,
    ChangeEventHandler,
    EventHandler,
    FormEventHandler,
    Context,
    Ref,
    MouseEventHandler,
    FocusEventHandler,
    KeyboardEventHandler,
    RefObject,
    MutableRefObject,
    AnchorHTMLAttributes
} from 'react';

type ValidationMethod = (value: string) => string | null;

interface BackdropProps {
    isOpen: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}
declare const Backdrop: FC<BackdropProps>;

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
    state?: 'disabled' | 'inverted' | 'muted' | 'hover';
    alignment?: 'left' | 'center' | 'right';
    capitalization?: 'uppercase' | 'lowercase';
    truncate?: boolean;
    list?: boolean;
    as?: string,
    opaque?: boolean;
}

declare var Badge: FC<BadgeProps>;

interface BodyTextProps extends TypographyProps<HTMLParagraphElement> {
    importance?: 1 | 2;
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
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    onFocus?: FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    onBlur?: FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    onMouseLeave?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    onMouseEnter?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    icon?: string;
}

declare const Button: FC<ButtonProps>;

interface CardBodyProps {
    className?: string;
}
declare const CardBody: FC<CardBodyProps>;

interface CardFooterProps {
    className?: string;
    children: ReactNode;
    centered?: boolean;
}
declare const CardFooter: FC<CardFooterProps>;

interface CardHeaderProps {
    className?: string;
    children: ReactNode;
}
declare const CardHeader: FC<CardHeaderProps>;

interface CardHeroProps {
    alt: string;
    className?: string;
    imageSrc: string;
    loadImageViaCss?: boolean;
}
declare const CardHero: FC<CardHeroProps>;

interface CheckboxProps {
    id?: string;
    onChange?: (e: FormEvent<HTMLInputElement>) => void;
    checked?: boolean;
    defaultChecked?: boolean;
    validationMethod?: ValidationMethod;
    label?: string;
    className?: string;
}
declare const Checkbox: FC<CheckboxProps>;

interface ChipProps {
    label: string;
    className?: string;
    value?: string;
    onClose?: (value?: string) => void;
}
declare const Chip: FC<ChipProps>;

interface DateColProps {
    date: string | number | Date;
    isTimeTdb?: boolean;
}

declare const DateColumn: FC<DateColProps>;

interface ErrorMessageProps {
    error: string;
}

declare const ErrorMessage: FC<ErrorMessageProps>;

interface FabChild extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    isDivider?: boolean;
}

declare const FabChild: FC<FabChild>;

interface FilterGroupItem extends HTMLAttributes<HTMLLIElement> {
    children: ReactNode;
    className?: string;
}

declare const FilterGroupItem: FC<FilterGroupItem>;

interface Headline extends TypographyProps<HTMLHeadingElement> {
    importance?: 1 | 2 | 3 | 4 | 5 | 6;
}

declare const Headline: FC<Headline>;

interface Icon extends HTMLAttributes<HTMLElement> {
    className?: string;
    size?: 'lg' | 'xl';
    type?: string;
}

declare const Icon: FC<Icon>;

interface Input extends HTMLAttributes<HTMLInputElement> {}

declare const Input: FC<Input>;

interface Label {
    label?: string;
    id?: string;
}

declare const Label: FC<Label>;

interface Link extends TypographyProps<HTMLAnchorElement>, AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    className?: string;
    type?: 'link' | 'anchor';
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

declare const Link: FC<Link>;

interface ModalBody extends HTMLAttributes<HTMLDivElement> {}

declare const ModalBody: FC<ModalBody>;

interface ModalFooter extends HTMLAttributes<HTMLDivElement> {
    onDismiss?: MouseEventHandler<HTMLButtonElement>;
}

declare const ModalFooter: FC<ModalFooter>;

interface ModalHeader extends HTMLAttributes<HTMLDivElement> {
    importance?: 1 | 2 | 3 | 4 | 5 | 6;
    title?: string;
}

declare const ModalHeader: FC<ModalHeader>;

interface NativeSelect extends HTMLAttributes<HTMLSelectElement> {
    /** could be more specific -- should only be <option> elements */
    children: ReactNode;
    label?: string;
    small?: boolean;
    medium?: boolean;
}

declare const NativeSelect: FC<NativeSelect>;

interface Radio extends HTMLAttributes<HTMLInputElement> {
    label: string;
    checked?: boolean;
    id?: string;
}

declare const Radio: FC<Radio>;

interface SelectOption extends HTMLAttributes<HTMLOptionElement> {}
declare const SelectOption: FC<SelectOption>;

interface SkeletonBone {
    firstColumnLineCount?: number;
    secondColumnLineCount?: number;
}
declare const SkeletonBone: FC<SkeletonBone>;

interface SmallText extends TypographyProps<HTMLParagraphElement> {}
declare const SmallText: FC<SmallText>;

interface Subhead extends TypographyProps<HTMLParagraphElement> {}
declare const Subhead: FC<Subhead>;

interface Subtitle extends TypographyProps<HTMLParagraphElement> {
    importance?: 1 | 2;
}
declare const Subtitle: FC<Subtitle>;

interface Tab extends TypographyProps<HTMLLIElement> {
    active?: boolean;
}
declare const Tab: FC<Tab>;

interface TinyText extends TypographyProps<HTMLLIElement> {}
declare const TinyText: FC<TinyText>;

interface Toggle extends HTMLAttributes<HTMLLabelElement> {
    title?: string;
    ariaLabel?: string;
    on?: boolean;
    onToggle?: ChangeEventHandler<HTMLInputElement>;
    defaultOn?: boolean;
}
declare const Toggle: FC<Toggle>;

interface VividSeatsLogo extends HTMLAttributes<HTMLAnchorElement> {
    href?: string;
    width?: string;
    height?: string;
}
declare const VividSeatsLogo: FC<VividSeatsLogo>;

interface Accordion {
    children?: ReactNode;
    initialOpenedIndex?: number;
    /** For controlled components. Use -1 to indicate no Collapse components are open. */
    openedIndex?: number;
    /** For use with controlled props. Fires when an accordion is open with the opened element's index */
    onAccordionOpen?: (currentIndex: number) => void;
}
declare const Accordion: FC<Accordion> & { Collapse: FC<Collapse> };

interface Card extends HTMLAttributes<HTMLDivElement> {
    type?: 'standard' | 'list' | 'anchor';
    /** this method is also called upon when users presses the enter key on the card element */
    onClick?: (e: MouseEvent<HTMLElement> | KeyboardEvent) => void;
    children: ReactNode;
    role?: string;
}

declare const Card: FC<Card> & {
    Footer: FC<CardFooterProps>;
    Header: FC<CardHeaderProps>;
    Body: FC<CardBodyProps>;
    Hero: FC<CardHeroProps>;
};

interface Collapse extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    open?: boolean;
    initialOpen?: boolean;
    wrap?: boolean;
    collapseOnMobileOnly?: boolean;
    onOpenChange?: (openState: boolean) => void;
    title?: ReactNode;
}

interface Title {
    onClick: MouseEventHandler;
    onKeyPress: KeyboardEventHandler;
}

declare const Collapse: FC<Collapse> & { Title: FC<Title> };

interface Column extends HTMLAttributes<HTMLDivElement> {}
declare const Column: FC<Column>;

interface Venue {
    name?: string;
    city?: string;
    regionCode?: string;
    countryCode?: string;
}

interface Thumbnail {
    src?: string;
    alt?: string;
}
interface EventRow extends Omit<Omit<HTMLAttributes<HTMLDivElement>, 'title'>, 'onChange'> {
    href?: string;
    venue?: Venue;
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
    hasCheckbox?: boolean;
    onChange?: (checked: boolean) => void;
}
declare const EventRow: FC<EventRow>;

interface ExpandableContent extends HTMLAttributes<HTMLDivElement> {
    maxHeight?: string;
    buttonText?: string;
    forceExpanded?: boolean;
    children: ReactNode;
}

declare const ExpandableContent: FC<ExpandableContent>;

interface Fab extends HTMLAttributes<HTMLDivElement> {
    visible?: boolean;
}

declare const Fab: FC<Fab>;

interface FilterGroup extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    groupName: string;
    children: ReactNode;
    onSelect?: (e?: MouseEvent<HTMLElement>) => void;
    limit?: number;
}

declare const FilterGroup: FC<FilterGroup>;

interface Form extends HTMLAttributes<HTMLFormElement> {
    /** Callback is passed plain JavaScript object with key/value pairs of `name` props and input value at time of submission. */
    onSubmit: (output: any) => void;
    /** Custom callback when validation fails on the form. Takes in an array of inputs with errors as the parameter */
    onValidationFailure: (errors: ReactElement[]) => void;
    children?: FormContextConsumer | ReactNode;
}
declare const Form: FC<Form>;

interface FormContextConsumer {
    children: (ctx: Context<{ setForm: (ref: Ref<ReactNode>) => void }>) => ReactNode;
}

declare const FormContextConsumer: FC<FormContextConsumer>;

interface LinkGroup extends HTMLAttributes<HTMLUListElement> {
    type?: 'striped' | 'muted' | 'hover';
}

declare const LinkGroup: FC<LinkGroup>;

interface Modal extends HTMLAttributes<HTMLElement> {
    isOpen: boolean;
    backgroundImage?: string;
    disableBackdrop?: boolean;
    type?: 'sheet' | 'full-screen';
    onClickBackdrop?: () => void;
}

declare const Modal: FC<Modal> & { Footer: FC<ModalFooter>; Header: FC<ModalHeader>; Body: FC<ModalBody>; Backdrop: FC<BackdropProps> };

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

interface Select extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    id?: string;
    name?: string;
    value?: string;
    type?: string;
    error?: string;
    label?: string;
    onChange?: (value: string) => void;
    onBlur?: FocusEventHandler;
    validationMethod?: ValidationMethod;
    outlined?: boolean;
    small?: boolean;
    medium?: boolean;
    disabled?: boolean;
}
declare const Select: FC<Select>;

interface SkeletonLoader {
    rowCount?: number;
    isLoading: boolean;
    firstColumnLineCount?: number;
    secondColumnLineCount?: number;
    skeletonBone?: ReactNode;
    children?: ReactNode;
}
declare const SkeletonLoader: FC<SkeletonLoader>;

interface TabGroup extends HTMLAttributes<HTMLUListElement> {
    dark?: boolean;
    compressed?: boolean;
    type?: 'bar' | 'group';
}
declare const TabGroup: FC<TabGroup>;

interface TextField extends Input {
    id?: string;
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
    validationMethod?: ValidationMethod;
    trailingIcon?: ReactNode;
    helperText?: string;
}
declare const TextField: FC<TextField>;

interface LoadingSpinner {
    size?: number;
    className?: string;
}
declare const LoadingSpinner: FC<LoadingSpinner>;

interface Notification extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    children?: ReactNode;
    onClickClose?: () => void;
    onClickBackdrop?: () => void;
    hasBackdrop?: boolean;
}
declare const Notification: FC<Notification>;

interface RenderArgument<T = any> {
    isHighlighted: boolean;
    suggestionProps: {
        onClick: MouseEventHandler<HTMLElement>;
        onMouseEnter: MouseEventHandler<HTMLElement>;
    };
    suggestion: T;
}

type SuggestionRenderProp<T = any> = (args: RenderArgument<T>) => ReactNode;

export interface SuggestionGroup<T = any> {
    title: string;
    items: T[];
    renderSuggestion: SuggestionRenderProp<T>;
}

/** refine these types!!! */
interface Typeahead {
    placeholder: string;
    onChange: (query: string) => void;
    suggestions?: SuggestionGroup[] | any[];
    onDropdownShown?: () => void;
    onDropdownHidden?: () => void;
    showHierarchicalDropdown?: boolean;
    onSelect?: (item: any) => void;
    renderSuggestion?: SuggestionRenderProp;
    renderDropdown?: (dropdownContent: ReactNode) => ReactNode;
    renderInput?: (inputProps: any) => ReactNode;
    displayLimit?: number;
    minQueryLength?: number;
    dismissOnSelect?: boolean;
    renderSelectedValue?: (item: any) => string;
}

declare const Typeahead: FC<Typeahead> & { Dropdown: any; SuggestionItem: any; DropdownSection: any; DropdownHeader: any };

interface DrawerHeader extends HTMLAttributes<HTMLDivElement> {}
declare const DrawerHeader: FC<DrawerHeader>;

interface DrawerFooter extends HTMLAttributes<HTMLDivElement> {}
declare const DrawerFooter: FC<DrawerFooter>;

interface DrawerBody extends HTMLAttributes<HTMLDivElement> {
    compressed?: boolean;
}
declare const DrawerBody: FC<DrawerBody>;

interface Drawer extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    small?: boolean;
    visible?: boolean;
    position?: '0' | '1' | '2';
}
declare const Drawer: FC<Drawer> & { Header: FC<DrawerHeader>; Body: FC<DrawerBody>; Footer: FC<DrawerFooter> };

interface Header {
    inputRef?: MutableRefObject<HTMLElement | undefined>;
    children?: ReactNode;
}
declare const Header: FC<Header>;
