const controller = require('../controller/Project')

module.exports = function (app) {
    app.post("/api/project/add", controller.add);
}