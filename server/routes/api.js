const axios = require('axios');
const db = require('../../db/index')
module.exports = {

    setRoutes: (server, apiHost)=>{

        server.getAsync(`/api/posts`, async (req, res) => {
            const response = await axios.get(`${apiHost}/posts`);
            return res.send(response.data);
        });

        server.getAsync(`/api/posts/:postId`, async (req, res) => {
            const response = await axios.get(`${apiHost}/posts/${req.params.postId}`);
            return res.send(response.data);
        });

        server.getAsync(`/api/posts/:postId/comments`, async (req, res) => {
            const response = await axios.get(`${apiHost}/posts/${req.params.postId}/comments`);
            return res.send(response.data);
        });

        server.postAsync(`/api/signin`, async (req, res) => {
            const {
                username,
                password
            } = req.body;

            const result = await db.userValid(username, password);

            if(result) {
                res.cookie("token", `${result.username}_XXXOOXXXX`);//for demo
                return res.send(result);
            } else {
                return res.status(401).send({
                    "message": "invalid user"
                });
            }

        });
    }
}