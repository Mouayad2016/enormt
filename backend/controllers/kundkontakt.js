const db = require("../models/");
const { responseObject } = require("../response/responseObject");
const emailController = require("./e-post");
// eslint-disable-next-line no-undef
module.exports = kundKontaktController = {
    async create(req, res) {
        try {
            if (!req.body.medelande || !req.body.mail) {
                return res
                    .status(400)
                    .send(responseObject(false, "Obligatoriska fält saknas"));
            }
            const data = {
                förNamn: req.body.förNamn,
                efterNamn: req.body.efterNamn,
                telephone: req.body.telephone,
                mail: req.body.mail,
                företagNamn: req.body.företagNamn,
                medelande: req.body.medelande,
            };
            const cre = await db.kund_kontakt_fråga.create(data);
            res
                .status(200)
                .send(responseObject(true, "Kontakt begäran har skapats"));
            await emailController.kundBekräftelse(req.body);
            await emailController.kotaktemailToTeam(req.body);
            return;
        } catch (e) {
            console.log(e);
            return res.status(400).send(responseObject(false, "Ett fel inträffad"));
        }
    },
};