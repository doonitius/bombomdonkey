const controller = require('../controller/position');
const control = require('../controller/department');

module.exports = function(app) {
    app.post("/api/position/add", controller.add, control.add);
}