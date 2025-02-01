"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MWErrorDecorator_1 = __importDefault(require("../../decorators/MWErrorDecorator"));
const productController_1 = require("../../controllers/productController");
const router = (0, express_1.Router)();
router.get("/", (0, MWErrorDecorator_1.default)(productController_1.getAllProducts));
router.get("/:id", (0, MWErrorDecorator_1.default)(productController_1.getProduct));
exports.default = router;
