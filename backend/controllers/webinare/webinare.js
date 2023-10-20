const db = require("../../models/");
const { responseObject } = require("../../response/responseObject");
const mailSender = require('./mailSender')
const validator = require('validator');

// eslint-disable-next-line no-undef
module.exports = webinare = {
    async create(req, res) {
        try {
            var status = "";
            if (!req.body.email || !validator.isEmail(req.body.email)) {
                return res
                    .status(400)
                    .send(responseObject(false, "Obligatoriska fält saknas eller ogiltig e-post"));
            }
            const existingEntry = await db.webinare.findOne({ where: { email: req.body.email } });
            const data = {
                email: req.body.email,
            };
            if (!existingEntry) {
                const cre = await db.webinare.create(data);
                status = 200
            } else {
                status = 201
            }

            res.status(status).send(responseObject(true, "Kontakt begäran har skapats"));
            await mailSender({
                title: "Så lyckas du med din första mobil-/webbapp",
                date: "2023-07-06",
                tid: "10:00:00",
                location: "Zoom Meeting",
                joinLink: "https://us05web.zoom.us/j/88482475230?pwd=OW00eWc0Y0NveURCaThIMFpCKzFaUT09",
                mail: data.email,
                meetingId: "884 8247 5230"
            });
            return;
        } catch (e) {
            console.log(e)

        }
    },


};