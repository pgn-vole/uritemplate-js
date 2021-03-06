module.exports = (function () {
    "use strict";

    var
        sandbox = require('nodeunit').utils.sandbox,
        context = {};
    sandbox('src/charHelper.js', context);
    sandbox('src/pctEncoder.js', context);
    sandbox('src/rfcCharHelper.js', context);
    sandbox('src/encodingHelper.js', context);
    sandbox('src/LiteralExpression.js', context);
    var LiteralExpression = context.LiteralExpression;

    return {
        'LiteralExpression has an expand method': function (test) {
            test.equal(typeof LiteralExpression.prototype.expand, 'function');
            test.done();
        }
    };
}());