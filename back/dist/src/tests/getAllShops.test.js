"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const Shop_1 = require("../../models/Shop");
const globals_1 = require("@jest/globals");
globals_1.jest.mock("../../models/Shop", () => {
    const actualModule = globals_1.jest.requireActual("../../models/Shop");
    return Object.assign(Object.assign({ __esModule: true }, actualModule), { Shop: {
            findAll: globals_1.jest.fn(),
        } });
});
describe("GET /shops", () => {
    it("should return a list of shops", () => __awaiter(void 0, void 0, void 0, function* () {
        Shop_1.Shop.findAll.mockResolvedValue([
            { id: 1, companyName: "Boulangerie Dupont" },
            { id: 2, companyName: "Coiffeur Parisien" },
        ]);
        const response = yield (0, supertest_1.default)(index_1.default).get("/shops/");
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(2);
        expect(response.body[0].companyName).toBe("Boulangerie Dupont");
    }));
    it("should return 500 if database query fails", () => __awaiter(void 0, void 0, void 0, function* () {
        Shop_1.Shop.findAll.mockRejectedValue(new Error("DB Error"));
        const response = yield (0, supertest_1.default)(index_1.default).get("/shops/");
        expect(response.status).toBe(500);
        expect(response.body.error).toBe("Erreur lors de la récupération des shops");
    }));
});
