const controller = require('../controller/timerec');

module.exports = function (app) {
    app.post("/api/timerecord/add", controller.add);
}