const nodemailer = require("nodemailer");
const fs = require("fs");
var path = require("path");
const ejs = require("ejs");
const ics = require('ics');
const ical = require('ical-generator');
const getIcalObjectInstance = require('./createIcaObject');
const moment = require('moment');

// eslint-disable-next-line no-undef
module.exports = ePostContoller = {


    async kundBekräftelse(data) {
        try {
            const htmlKundTemplate = fs.readFileSync(
                path.resolve(__dirname, "../emailTemplate/emailToKund.ejs"),
                "utf-8"
            ); // create a transporter with your SMTP server settings

            const htmlToKund = ejs.render(htmlKundTemplate, {});
            let transporter = nodemailer.createTransport({
                host: "smtp.titan.email", // Update the host
                port: 465, // Update the port number
                secure: true, // Update to true for SSL encryption
                auth: {
                    user: process.env.INFO_EMAIL, // Replace with your Hostinger email
                    pass: process.env.INFO_LOSENORD,
                },
                tls: {
                    rejectUnauthorized: false, // ignore untrusted certificates (not recommended for production)
                },
                timeout: 60000,
            });
            // create an email message

            let messageToCient = {
                from: process.env.INFO_EMAIL,
                to: data.mail,
                subject: "Angående din kontakt förfråga",
                html: htmlToKund,
            };

            let info = await transporter.sendMail(messageToCient)
            console.log("Email sent: " + info.response);
        } catch (e) {
            console.log(e);

            throw e;
        }
    },
    async kotaktemailToTeam(data) {
        try {
            const htmlTemplate = fs.readFileSync(
                path.resolve(__dirname, "../emailTemplate/emailToTeam.ejs"),
                "utf-8"
            );

            // Render the EJS template
            const htmlToTeam = ejs.render(htmlTemplate, {
                title: `Kontakt fråga från ${data.förNamn}`,
                message: `${data.medelande}`,
                namn: `${data.förNamn} ${data.efterNamn}`,
                telephone: `${data.telephone}`,
                mail: `${data.mail}`,
                företagNamn: `${data.företagNamn}`,
            });

            let transporter = nodemailer.createTransport({
                host: "smtp.titan.email", // Update the host
                port: 465, // Update the port number
                secure: true, // Update to true for SSL encryption
                auth: {
                    user: process.env.INFO_EMAIL, // Replace with your Hostinger email
                    pass: process.env.INFO_LOSENORD,
                },
                tls: {
                    rejectUnauthorized: false, // ignore untrusted certificates (not recommended for production)
                },
                timeout: 60000,
            });
            // create an email message

            let messageToTeam = {
                from: "info@enormt.se",
                to: ["Mouayad.mouayad@enormt.se"],
                subject: "Email bekräftelse",
                html: htmlToTeam,
            };
            // send the email using the transporter
            let info = await transporter.sendMail(messageToTeam)
            console.log("Email sent: " + info.response);


        } catch (e) {
            throw e;
        }
    },
    async webinareReg(data) {
        try {
            const htmlTemplate = fs.readFileSync(
                path.resolve(__dirname, "../emailTemplate/webinare.ejs"),
                "utf-8"
            );
            // Render the EJS template
            let eventDetails = {
                title: 'OpenAI Seminar',
                start: new Date('2023-12-21T10:00:00Z'),
                end: new Date('2023-12-21T11:00:00Z'),
                location: 'Online'
            };
            const htmlToUser = ejs.render(htmlTemplate, {
                webinarTitle: `Kontakt fråga från ${data.title}`,
                webinarDate: `${data.date}`,
                webinarTime: `${data.tid}`,
                webinarLocation: `${data.location}`,
                joinLink: `${data.joinLink}`,
                webinarStartDateTime: eventDetails.start,
                webinarEndDateTime: eventDetails.end,
            });
            let transporter = nodemailer.createTransport({
                host: "smtp.titan.email", // Update the host
                port: 465, // Update the port number
                secure: true, // Update to true for SSL encryption
                auth: {
                    user: process.env.INFO_EMAIL, // Replace with your Hostinger email
                    pass: process.env.INFO_LOSENORD,
                },
                tls: {
                    rejectUnauthorized: false, // ignore untrusted certificates (not recommended for production)
                },
                timeout: 60000,
            });

            // const calendar = ical({ name: 'my first iCal' });
            let webinar = {
                title: 'Startups webinar',
                start: [2023, 12, 21, 10, 0],
                duration: { hours: 1 },
                location: 'Online'
            };

            let iCalendarData = '';
            ics.createEvent(webinar, (error, value) => {
                if (error) {
                    console.log(error);
                } else {
                    iCalendarData = value;

                }
            });
            const starttime = moment();
            const endtime = moment().add(1, 'days');
            const summary = 'Webbseminarium';
            const description = 'Discuss project requirements and timelines';
            const location = 'Zoom';
            const url = 'https://example.com/event';
            const orgName = 'Omania';
            const orgEmail = 'mouayad.mouayad@omania.se';
            let calendarObj = getIcalObjectInstance(starttime, endtime, summary, description, location, url, orgName, orgEmail, [{ // Attendees
                email: data.mail,
                role: 'REQ-PARTICIPANT',
                rsvp: true,
                status: 'NEEDS-ACTION', // this should be 'NEEDS-ACTION' instead of 'DECLINED'
                type: 'INDIVIDUAL',
            }], )
            let msg = {
                from: "info@omania.se",
                to: data.mail,
                subject: "Webbseminarium inbjudande",
                // html: htmlToUser,

                // text: "Sioasndasndoasbdoiasodbasdoi",
                attachments: [
                    // {
                    //     filename: "webinare.html",
                    //     content: htmlToUser,
                    //     contentType: "text/html",
                    // }, 
                    {
                        filename: 'Inbjudande.ics',
                        content: Buffer.from(calendarObj.toString(), 'utf-8').toString('base64'),
                        encoding: 'base64',
                        contentDisposition: 'attachment; filename="Inbjudande.ics"',
                        contentType: 'text/calendar; charset=utf-8; method=REQUEST'
                    }
                ]

            };
            transporter.debug = true;
            // send the email using the transporter
            let info = await transporter.sendMail(msg)
            console.log("Email sent: " + info.response);

        } catch (e) {
            throw e;
        }
    },

    async demoEmailToTeam(data) {
        try {
            const htmlTemplate = fs.readFileSync(
                path.resolve(__dirname, "../emailTemplate/demo-to-team.ejs"),
                "utf-8"
            );

            const htmlToTeam = ejs.render(htmlTemplate, {
                title: `Demo förfråga från ${data.namn}`,
                namn: `${data.namn}`,
                org: `${data.org}`,
                org_nummer: `${data.org_nummer}`,
                budget: `${data.budget}`,
                land: `${data.land}`,
                medelande: `${data.medelande}`,
                mail: `${data.mail}`,
            });

            let transporter = nodemailer.createTransport({
                host: "send.one.com",
                port: 587,
                secure: false, // set to true if your SMTP server requires TLS encryption
                auth: {
                    user: "info@omania.se",
                    pass: process.env.OMANIA_INFO_LOSENORD,
                },
                tls: {
                    rejectUnauthorized: false, // ignore untrusted certificates (not recommended for production)
                },
                timeout: 60000,
            });
            // create an email message
            let messageToTeam = {
                from: "info@omania.se",
                to: ["Mouayad.mouayad@enormt.se"],
                subject: "Email bekräftelse",
                html: htmlToTeam,
            };
            // send the email using the transporter
            let info = await transporter.sendMail(messageToTeam)
            console.log("Email sent: " + info.response);
        } catch (e) {
            throw e;
        }
    },
};