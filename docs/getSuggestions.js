function getTeamSuggestions(input) {
    const teams = [
        'Wisconsin Badgers',
        'Illinois Fighting Illini',
        'Iowa Hawkeyes',
        'Notre Dame Fighting Irish',
        'Northwestern Wildcats',
        'Clemson Tigers'
    ];
    return teams.filter(team => {
        return !!input && team.includes(input);
    });
}

function getStadiumSuggestions(input) {
    const stadiums = [
        'Notre Dame Stadium',
        ' Memorial Stadium (Illinois)',
        'Camp Randall Stadium',
        'Kinnick Stadium',
        'Ryan Field',
        'Memorial Stadium (Clemson)'
    ];
    return stadiums.filter(stadium => {
        return !!input && stadium.includes(input);
    });
}

function getEventSuggestions(input) {
    const events = ['Notre Dame vs Clemson', 'Wisconsin Badgers vs Iowa Hawkeyes', 'Illinois vs Northwestern'];
    return events.filter(event => {
        return !!input && event.includes(input);
    });
}

function getHiearchalSuggestions(input) {
    const suggestedEvents = getEventSuggestions(input);
    const suggestedStadiums = getStadiumSuggestions(input);
    const suggestedTeams = getTeamSuggestions(input);

    return {
        suggestedTeams,
        suggestedEvents,
        suggestedStadiums
    };
}

function getCustomEventSuggestions(input) {
    const events = [
        {
            id: 1,
            name: 'Notre Dame vs Clemson',
            date: '2019-09-30T20:00:00-0500'
        },
        {
            id: 2,
            name: 'Wisconsin Badgers vs Iowa Hawkeyes',
            date: '2019-08-20T20:00:00-0500'
        },
        {
            id: 3,
            name: 'Illinois vs Northwestern',
            date: '2019-10-20T20:00:00-0500'
        }
    ];

    return events.filter(event => {
        return !!input && event.name.includes(input);
    });
}


export { getTeamSuggestions, getHiearchalSuggestions, getCustomEventSuggestions, getCustomHiearchalSuggestions };
