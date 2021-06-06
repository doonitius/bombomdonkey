const controller = require('../controller/Behavior');

module.exports = function (app) {
    app.post("/api/behavior/add", controller.add);
    app.get("/api/behavior/view/All", controller.viewAll);
}