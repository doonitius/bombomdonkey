const controller = require('../controller/payment');

module.exports = function (app) {
    app.post('/api/paymentslip/add', controller.add);
}