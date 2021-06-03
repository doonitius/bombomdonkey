const controller = require('../controller/history')

module.exports = function (app) {
    app.post('/api/history/add', controller.add);
}