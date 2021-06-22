const axios = require('axios');
const db = require('../../db/index')
const token = require('../token')
module.exports = {

    setRoutes: (server, apiHost)=>{

        server.putAsync(`/api/funds`, async (req, res) => {
            const username = token.validateToken(req.cookies["token"]);
            if (!username) {
                return res.status(401).send({
                    "message": "invalid user"
                });
            }
            const { points } = req.body;
            await db.updateFunds(username, points);
            return res.send({username, points});
        });

        server.getAsync(`/api/funds`, async (req, res) => {
            const username = token.validateToken(req.cookies["token"]);
            if (!username) {
                return res.status(401).send({
                    "message": "invalid user"
                });
            }
            const result = await db.getFunds(username);
            return res.send(result);
        });

        server.postAsync(`/api/signin`, async (req, res) => {
            const {
                username,
                password
            } = req.body;

            const result = await db.userValid(username, password);

            if(result) {
                res.cookie("token", token.toToken(username, password));
                return res.send(result);
            } else {
                return res.status(401).send({
                    "message": "invalid user"
                });
            }

        });
    }
}