const controller = require('../controller/Project')

module.exports = function(app) {
    app.post("/api/project/addProject", controller.addProject);
    app.post("/api/project/addParti", controller.addParti);
    app.get("/api/project/viewAll", controller.viewAll);
    app.post("/api/project/viewOne", controller.viewOne);
    app.post("/api/project/editproject", controller.editProject);
    app.post("/api/project/deleteProject", controller.deleteProject);
}