const db = require("../models");
const { responseObject } = require("../response/responseObject");
const emailController = require("./e-post");

// eslint-disable-next-line no-undef
module.exports = PorjectController = {
    async create(req, res) {
        try {
            if (!req.body.mail || !req.body.medelande) {
                return res
                    .status(400)
                    .send(responseObject(false, "Obligatoriska fält saknas"));
            }
            const data = {
                namn: req.body.namn,
                org: req.body.org,
                org_nummer: req.body.org_nummer,
                mail: req.body.mail,
                budget: req.body.budget,
                // land: req.body.land,
                medelande: req.body.medelande,
            };

            const cre = await db.project_demo_request.create(data);
            res
                .status(200)
                .send(responseObject(true, "Projektdemobegäran har skapats"));
            await emailController.kundBekräftelse(req.body);
            await emailController.demoEmailToTeam(req.body);
            return;
        } catch (e) {
            console.log(e);
            return res
                .status(400)
                .send(
                    responseObject(false, { message: "Ett fel inträffad", reason: e })
                );
        }
    },
};