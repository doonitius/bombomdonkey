const controller = require('../controller/promotionHistory');

module.exports = function (app) {
    app.post("/api/promotionhistory/add", controller.add);
    app.post("/api/promotionhistory/viewOne", controller.viewOne);
}