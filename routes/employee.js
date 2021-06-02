const controller = require('../controller/Employee')

module.exports = function (app) {
    app.post("/api/employee/add", controller.add);
}