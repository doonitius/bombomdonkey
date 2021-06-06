const controller = require('../controller/home');

module.exports = function(app) {
    app.get("/api/home/ana", controller.show);
    app.get("/api/home/countdep", controller.countdep);
    app.get("/api/home/hardwork", controller.hardwork);
}