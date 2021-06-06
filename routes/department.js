const controller = require('../controller/department');

module.exports = function (app) {
    app.post("/api/department/add", controller.add);
}
    