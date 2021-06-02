const controller = require('../controller/BonusRecord');

module.exports = function (app) {
    app.post("/api/bonus/add", controller.add);
}