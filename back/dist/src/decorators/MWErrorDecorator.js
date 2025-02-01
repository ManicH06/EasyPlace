"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(middleware) {
    return function (req, res, next) {
        try {
            middleware(req, res, next);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    };
}
