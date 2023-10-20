const ical = require('ical-generator').default;
const crypto = require('crypto');


module.exports = function getIcalObjectInstance(starttime, endtime, summary, description, location, url, name, email, attendees) {
    const cal = ical({
        domain: "omania.se",
        name: 'Webbinarium inbjudan',
        prodId: '//omania.se//Webbinarium//SV', // Product identifier
        method: 'REQUEST', // To show this as an invitation
        timezone: 'Europe/Stockholm',
    });
    // cal.domain("mytestwebsite.com");
    cal.createEvent({
        start: starttime, // e.g., moment()
        end: endtime, // e.g., moment(1, 'days')
        summary: summary, // 'Summary of your event'
        timestamp: new Date(), // Timestamp
        description: description, // 'More description'
        location: location, // 'Delhi'
        url: url, // 'event url'
        attendees: attendees,

        organizer: { // 'organizer details'
            name: name,
            email: email
        },
        alarms: [{ // An alarm
            type: 'display',
            trigger: 600, // 10 minutes in seconds
        }]
    });
    return cal;
};