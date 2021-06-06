const controller = require('../controller/Auth');

module.exports = function (app) {
    app.post("api/login", controller.login);
}