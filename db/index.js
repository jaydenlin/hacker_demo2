const sqlite = require('sqlite3');
const { promisify } = require('util');
let db = new sqlite.Database(':memory:');
const dbRun = promisify(db.run).bind(db);
const dbGet = promisify(db.get).bind(db);
const init = async () => {
    // try {
        await dbRun("CREATE TABLE users (username TEXT, password TEXT)");
        await dbRun("INSERT INTO users (username, password) VALUES ('alice', 'password')");
        await dbRun("INSERT INTO users (username, password) VALUES ('bob', 'password')");
        await dbRun("INSERT INTO users (username, password) VALUES ('eve', 'password')");
        await dbRun("INSERT INTO users (username, password) VALUES ('ivor', 'password')");
    // } catch (e) {
    //     console.error(e);
    // }
}

const userValid = async (username, password) => {
    console.log(`SELECT username FROM users WHERE username = '${username}' AND password = '${password}';`);
    return await dbGet(`SELECT username FROM users WHERE username = '${username}' AND password = '${password}';`);
}

module.exports = {
    init,
    userValid
}