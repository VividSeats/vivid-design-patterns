const eventNames = [
    'Crazy',
    'Rancid',
    'London',
    'Red',
    'West',
    'Monkeys',
    'Twenty',
    'Giraffes',
    'Childish',
    'Crashing',
    'Kittens',
    'Sicko',
    'Node',
    'Mob',
    'Young',
    'Kings',
    'Cloverfield',
    'Saving',
    'Yellow',
    'Money',
    'Whiskey',
    'James',
    'Malone',
    'Jackson',
    'Drake',
    'Raptors',
    'Lil',
    'Five',
    'War',
    'Fire',
    'Arcade',
    'Artic',
    'Glock',
    '500',
    '$cott',
    'Brown'
];
const cities = ['Chicago, IL', 'Los Angeles, CA', 'Miami, FL', 'Austin, TX', 'Seattle, WA'];
const stadiums = ['Alliance Center', 'United Field', 'Chippewa Energy Stadium', 'Constance Field', 'SafeRate Field', 'Tropicana Center'];

function getEventName() {
    return `${eventNames[Math.floor(Math.random() * eventNames.length)]} ${eventNames[Math.round(Math.random() * eventNames.length)]}`;
}

function getEventCity() {
    return `${cities[Math.floor(Math.random() * cities.length)]}`;
}

function getEventStadium() {
    return `${stadiums[Math.floor(Math.random() * stadiums.length)]}`;
}

function getRandomEvent() {
    return {
        id: Math.floor(Math.random() * 100),
        eventName: getEventName(),
        eventLocation: `${getEventStadium()} - ${getEventCity()}`
    };
}

export default getRandomEvent;
