const validator = require("validator");

const cleanUpAndValidate = ({ name, email, password, username }) => {
    return new Promise((resolve, reject) => {
        if (!name || !email || !password || !username) {
            reject("Missing Credential!");
        }
        if (!validator.isEmail(email)) {
            reject("Email format is wrong!");
        }
        if (username.length <= 2 || username.length >= 50) {
            reject("User name should be 3 to 50 characters long!");
        }

        resolve();
    });
};

module.exports = { cleanUpAndValidate };