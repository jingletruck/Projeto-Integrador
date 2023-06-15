const connection = require("./connection");

const getALL = async () => {
    const users = await conennction.execute("SELECT * FROM users");
    return users;
};

module.exports = {
    getALL
};