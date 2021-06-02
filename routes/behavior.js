const controller = require('../controller/Behavior');

module.exports = function (app) {
    app.post("/api/behavior/add", controller.add);
}