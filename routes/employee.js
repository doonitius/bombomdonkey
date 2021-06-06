const controller = require('../controller/Employee')
const upload = require('../middleware/upload')

module.exports = function (app) {
    app.post("/api/employee/add",upload.single('image'), controller.add);
    //app.post("api/employee/addimage",, controller.addimage);
    app.post("/api/employee/view", controller.viewOne);
    app.get("/api/employee/viewAll", controller.view);
    app.post("/api/employee/delete", controller.delete);
    app.post("/api/employee/edit", controller.edit);

}