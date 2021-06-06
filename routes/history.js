const controller = require('../controller/history')

module.exports = function (app) {
    app.post('/api/history/add/education', controller.addEdu);
    app.post('/api/history/add/work', controller.addWork);
    app.post("/api/history/viewEdu", controller.viewEdu);
    app.post("/api/history/viewWork", controller.viewWork);
}