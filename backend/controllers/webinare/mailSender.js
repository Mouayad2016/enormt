const nodemailer = require('nodemailer');
const fs = require('fs');
var path = require('path');
const ejs = require('ejs');
const ics = require('ics');
const getIcalObjectInstance = require('../createIcaObject');
const moment = require('moment');

module.exports = async function mailSender(data) {
  try {
    const htmlTemplate = fs.readFileSync(
      path.resolve(__dirname, '../../emailTemplate/webinare.html'),
      'utf-8',
    );
    const htmlToUser = ejs.render(htmlTemplate, {
      webinarTitle: `${data.title}`,
      webinarDate: `${data.date}`,
      webinarTime: `${data.tid.substring(0, 5)}`,
      webinarLocation: `${data.location}`,
      joinLink: `${data.joinLink}`,
      meetingID: `${data.meetingId}`,
    });
    let transporter = nodemailer.createTransport({
      host: 'send.one.com',
      port: 587,
      secure: false, // set to true if your SMTP server requires TLS encryption
      auth: {
        user: 'info@omania.se',
        pass: process.env.OMANIA_INFO_LOSENORD,
      },
      tls: {
        rejectUnauthorized: false, // ignore untrusted certificates (not recommended for production)
      },
      timeout: 60000,
    });
    const starttime = createEventDate(data.date, data.tid, -2);
    const endtime = addDuration(starttime, 0.75);
    const summary = 'Så lyckas du med din första mobil-/webbapp';
    const description =
      'Konkreta strategier för smidig navigering av din första beställning. Få tips & råd från erfarna företagsledare om tillvägagångssätt som formar din slutprodukt. Dessutom diskuterar vi möjligheterna för sömlös integrering med ChatGPT.';
    const location = 'Zoom';
    const url = data.joinLink;
    const orgName = 'Omania';
    const orgEmail = 'info@omania.se';
    let calendarObj = getIcalObjectInstance(
      starttime,
      endtime,
      summary,
      description,
      location,
      url,
      orgName,
      orgEmail,
      [
        {
          // Attendees
          email: data.mail,
          role: 'REQ-PARTICIPANT',
          rsvp: true,
          status: 'NEEDS-ACTION', // this should be 'NEEDS-ACTION' instead of 'DECLINED'
          type: 'INDIVIDUAL',
        },
      ],
    );
    let msg = {
      from: 'info@omania.se',
      to: data.mail,
      subject: 'Webbseminarium inbjudande',
      html: htmlToUser,
      attachments: [
        {
          filename: 'Inbjudande.ics',
          content: Buffer.from(calendarObj.toString(), 'utf-8').toString(
            'base64',
          ),
          encoding: 'base64',
          contentDisposition: 'attachment; filename="Inbjudande.ics"',
          contentType: 'text/calendar; charset=utf-8; method=REQUEST',
        },
      ],
    };
    transporter.debug = true;
    // send the email using the transporter
    let info = await transporter.sendMail(msg);
    console.log('Email sent: ' + info.response);
  } catch (e) {
    throw e;
  }
};

function createEventDate(date, tid, svenskTidSkilnad) {
  // remove 'PM' from the time and split into hours and minutes
  // remove ' PM' from the time
  const [hours, minutes, seconds] = tid.split(':');
  // join date and 24-hour time into a new string
  const adjustedHours = Number(hours) + svenskTidSkilnad; // adjust this number as needed for your timezone

  const dateAndTime = `${date}T${String(adjustedHours).padStart(
    2,
    '0',
  )}:${minutes}:${seconds}`;
  // create a new Date object and return it
  return new Date(dateAndTime);
  // create a new Date object and return it
}

function addDuration(startDate, durationHours) {
  // Create a new Date object from the start date so the original date isn't modified
  let endDate = new Date(startDate.getTime());
  // Add the duration to the hours of the end date
  endDate.setTime(endDate.getTime() + durationHours * 60 * 60 * 1000);
  return endDate;
}
