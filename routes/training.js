const controller = require('../controller/training');

module.exports = function(app) {
    app.post("/api/training/add/info", controller.addInfo);
    app.post("/api/training/add/emp", controller.addEmp);
    app.get("/api/training/view", controller.view);
    app.post("/api/training/delete", controller.delete);
    app.post("/api/training/viewOne", controller.viewOne);
}