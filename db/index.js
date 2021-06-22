const sqlite = require('sqlite3');
const { promisify } = require('util');
let db = new sqlite.Database(':memory:');
const dbRun = promisify(db.run).bind(db);
const dbGet = promisify(db.get).bind(db);
const init = async () => {
        await dbRun("CREATE TABLE users (username TEXT, password TEXT)");
        await dbRun("INSERT INTO users (username, password) VALUES ('alice', 'password')");
        await dbRun("INSERT INTO users (username, password) VALUES ('bob', 'password')");
        await dbRun("INSERT INTO users (username, password) VALUES ('mary', 'password')");
        await dbRun("INSERT INTO users (username, password) VALUES ('jayden', 'password')");
        await dbRun("INSERT INTO users (username, password) VALUES ('admin', 'password')");
        await dbRun("CREATE TABLE funds (username TEXT, card TEXT, points BIGINT)");
        await dbRun("INSERT INTO funds (username, card, points) VALUES ('alice', '8458-4488-XXXX-XXXX', 750)");
        await dbRun("INSERT INTO funds (username, card, points) VALUES ('bob', '6788-3388-XXXX-XXXX', 320)");
        await dbRun("INSERT INTO funds (username, card, points) VALUES ('mary', '8458-3388-XXXX-XXXX', 260)");
        await dbRun("INSERT INTO funds (username, card, points) VALUES ('jayden', '2888-8488-XXXX-XXXX', 210)");
        await dbRun("INSERT INTO funds (username, card, points) VALUES ('admin', '1188-1588-XXXX-XXXX', 1300)");
}

const userValid = async (username, password) => {
    console.log(`SELECT username FROM users WHERE username = '${username}' AND password = '${password}';`);
    return await dbGet(`SELECT username FROM users WHERE username = '${username}' AND password = '${password}';`);
}

const updateFunds = async (username, points) => {
    return await dbRun(`UPDATE funds SET points=${points} WHERE username='${username}'`);
}
const getFunds = async (username) => {
    console.log(`SELECT username, card, points FROM funds WHERE username = '${username}';`);

    return await dbGet(`SELECT username, card, points FROM funds WHERE username = '${username}';`);
}
module.exports = {
    init,
    userValid,
    updateFunds,
    getFunds
}