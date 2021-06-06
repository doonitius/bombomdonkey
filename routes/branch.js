const controller = require('../controller/branch');

module.exports = function(app) {
    app.post("/api/branch/add", controller.add);
}