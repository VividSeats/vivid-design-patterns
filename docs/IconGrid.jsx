import React from 'react';
import Row from '../src/components/molecules/Row';
import IconExample from './IconExample';
import Title from '../src/components/atoms/Title';
import BodyText from '../src/components/atoms/BodyText';
import './docz.scss';
import Notification from '../src/components/molecules/Notification';
import SearchField from '../src/components/molecules/SearchField';
const inputs = [
    { type: 'checkbox-off', entity: '&#xe906;' },
    { type: 'checkbox-on', entity: '&#xe907;' },
    { type: 'dropdown', entity: '&#xe908;' },
    { type: 'radio-off', entity: '&#xe93f;' },
    { type: 'radio-on', entity: '&#xe940;' }
];

const interactions = [
    { type: 'back', entity: '&#xe909;' },
    { type: 'call', entity: '&#xe90a;' },
    { type: 'carat-down', entity: '&#xe90b;' },
    { type: 'carat-left', entity: '&#xe90c;' },
    { type: 'carat-right', entity: '&#xe90d;' },
    { type: 'carat-up', entity: '&#xe90e;' },
    { type: 'caution', entity: '&#xe90f;' },
    { type: 'chat', entity: '&#xe910;' },
    { type: 'check', entity: '&#xe911;' },
    { type: 'close-circle', entity: '&#xe912;' },
    { type: 'close', entity: '&#xe913;' },
    { type: 'copy', entity: '&#xe914;' },
    { type: 'delete', entity: '&#xe915;' },
    { type: 'edit', entity: '&#xe916;' },
    { type: 'email-send', entity: '&#xe917;' },
    { type: 'expand', entity: '&#xe93b;' },
    { type: 'favorite-filled', entity: '&#xe918;' },
    { type: 'favorite', entity: '&#xe919;' },
    { type: 'filter', entity: '&#xe91a;' },
    { type: 'info', entity: '&#xe91b;' },
    { type: 'location', entity: '&#xe91c;' },
    { type: 'menu', entity: '&#xe91d;' },
    { type: 'minus-circle', entity: '&#xe91e;' },
    { type: 'minus', entity: '&#xe91f;' },
    { type: 'more', entity: '&#xe920;' },
    { type: 'plus-circle', entity: '&#xe921;' },
    { type: 'plus', entity: '&#xe922;' },
    { type: 'recent-arrow', entity: '&#xe923;' },
    { type: 'refresh', entity: '&#xe924;' },
    { type: 'search', entity: '&#xe925;' },
    { type: 'share-android', entity: '&#xe926;' },
    { type: 'share-ios', entity: '&#xe927;' },
    { type: 'target', entity: '&#xe928;' },
    { type: 'transfer', entity: '&#xe929;' }
];

const objects = [
    { type: 'bell', entity: '&#xe900;' },
    { type: 'building', entity: '&#xe901;' },
    { type: 'calendar-multi', entity: '&#xe902;' },
    { type: 'calendar', entity: '&#xe903;' },
    { type: 'camera', entity: '&#xe904;' },
    { type: 'checklist', entity: '&#xe905;' },
    { type: 'cog', entity: '&#xe92a;' },
    { type: 'eye-filled', entity: '&#xe92b;' },
    { type: 'eye', entity: '&#xe92c;' },
    { type: 'flame', entity: '&#xe92d;' },
    { type: 'gift-box', entity: '&#xe92e;' },
    { type: 'home', entity: '&#xe92f;' },
    { type: 'id-face', entity: '&#xe930;' },
    { type: 'id-touch', entity: '&#xe931' },
    { type: 'location-user', entity: '&#xe932;' },
    { type: 'lock', entity: '&#xe933;' },
    { type: 'map', entity: '&#xe934;' },
    { type: 'money', entity: '&#xe935;' },
    { type: 'news', entity: '&#xe936;' },
    { type: 'paper-airplane', entity: '&#xe937;' },
    { type: 'receipt', entity: '&#xe938;' },
    { type: 'sale', entity: '&#xe939;' },
    { type: 'seat', entity: '&#xe93a;' },
    { type: 'ticket-in-hand', entity: '&#xe93c;' },
    { type: 'ticket', entity: '&#xe93d;' },
    { type: 'user', entity: '&#xe93e;' }
];

const states = [
    { type: 'state-fail', entity: '&#xe941;' },
    { type: 'state-future', entity: '&#xe942;' },
    { type: 'state-in-process', entity: '&#xe943;' },
    { type: 'state-success', entity: '&#xe944;' },
    { type: 'state-warning', entity: '&#xe945;' }
];

const thirdParty = [
    { type: 'apple', entity: '&#xe946;' },
    { type: 'facebook-square', entity: '&#xe947;' },
    { type: 'facebook', entity: '&#xe948;' },
    { type: 'instagram', entity: '&#xe949;' },
    { type: 'linkedin', entity: '&#xe94a;' },
    { type: 'play-store', entity: '&#xe94b;' },
    { type: 'twitter', entity: '&#xe94c;' }
];

const tickets = [
    { type: 'ticket-electronic', entity: '&#xe94d;' },
    { type: 'ticket-guarantee-filled', entity: '&#xe94e;' },
    { type: 'ticket-guarantee', entity: '&#xe94f;' },
    { type: 'ticket-instant-filled', entity: '&#xe95b;' },
    { type: 'ticket-instant', entity: '&#xe950;' },
    { type: 'ticket-mobile', entity: '&#xe951;' },
    { type: 'ticket-note', entity: '&#xe952;' },
    { type: 'ticket-pdf', entity: '&#xe953;' },
    { type: 'ticket-pick-up', entity: '&#xe954;' },
    { type: 'ticket-preferred', entity: '&#xe955;' },
    { type: 'ticket-print', entity: '&#xe956;' },
    { type: 'ticket-super-seller', entity: '&#xe95c;' },
    { type: 'ticket-transfer', entity: '&#xe957;' },
    { type: 'ticket-truck', entity: '&#xe958;' },
    { type: 'ticket-zone', entity: '&#xe959;' }
];

const IconGrid = () => {
    const [showNotification, setShowNotification] = React.useState(false);
    const [copiedText, setCopiedText] = React.useState('');
    const [query, setQuery] = React.useState('');

    const onCopyText = copiedText => {
        setCopiedText(copiedText);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 5000);
    };

    const filterByQuery = icon => {
        if (query === '') {
            return icon;
        }

        return icon.type.includes(query);
    };

    const inputIcons = inputs.sort().filter(filterByQuery);
    const interactionIcons = interactions.sort().filter(filterByQuery);
    const objectIcons = objects.sort().filter(filterByQuery);
    const stateIcons = states.sort().filter(filterByQuery);
    const thirdPartyIcons = thirdParty.sort().filter(filterByQuery);
    const ticketIcons = tickets.sort().filter(filterByQuery);
    return (
        <>
            <div style={{ margin: '1rem' }}>
                <SearchField
                    placeholder="Search icons..."
                    onReset={() => setQuery('')}
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                />
            </div>
            {!!inputIcons.length && <Title>Inputs</Title>}
            <Row>
                {inputIcons.map(({ type, entity }) => (
                    <IconExample onCopy={onCopyText} type={type} entity={entity} />
                ))}
            </Row>
            {!!interactionIcons.length && <Title>Interaction</Title>}
            <Row>
                {interactionIcons.map(({ type, entity }) => (
                    <IconExample onCopy={onCopyText} type={type} entity={entity} />
                ))}
            </Row>
            {!!objectIcons.length && <Title>Objects</Title>}
            <Row>
                {objectIcons.map(({ type, entity }) => (
                    <IconExample onCopy={onCopyText} type={type} entity={entity} />
                ))}
            </Row>
            {!!stateIcons.length && <Title>States</Title>}
            <Row>
                {stateIcons.map(({ type, entity }) => (
                    <IconExample onCopy={onCopyText} type={type} entity={entity} />
                ))}
            </Row>
            {!!thirdPartyIcons.length && <Title>Third Party</Title>}
            <Row>
                {thirdPartyIcons.map(({ type, entity }) => (
                    <IconExample onCopy={onCopyText} type={type} entity={entity} />
                ))}
            </Row>
            {!!ticketIcons.length && <Title>Tickets</Title>}
            <Row>
                {ticketIcons.map(({ type, entity }) => (
                    <IconExample onCopy={onCopyText} type={type} entity={entity} />
                ))}
            </Row>
            <Notification isOpen={showNotification} style={{ background: 'white' }}>
                <BodyText weight="medium" importance={2}>
                    {copiedText}
                </BodyText>{' '}
                copied to clipboard!
            </Notification>
        </>
    );
};

export default IconGrid;
