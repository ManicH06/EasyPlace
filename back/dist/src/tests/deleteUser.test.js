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
const index_1 = __importDefault(require("../index")); // Instance Express
const User_1 = __importDefault(require("../../models/User")); // Modèle Sequelize
const globals_1 = require("@jest/globals");
globals_1.jest.mock("../../models/User", () => {
    return {
        __esModule: true,
        default: {
            findByPk: globals_1.jest.fn(),
        },
    };
});
describe("DELETE /users/:id", () => {
    it("devrait supprimer un utilisateur existant", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockDestroy = globals_1.jest.fn().mockResolvedValue(undefined);
        const mockUser = {
            destroy: mockDestroy,
            get: globals_1.jest.fn(() => ({
                id: 23,
                name: "John Doe",
                email: "john@example.com",
            })),
        };
        User_1.default.findByPk.mockResolvedValue(mockUser);
        const response = yield (0, supertest_1.default)(index_1.default).delete("/users/23");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Utilisateur supprimé avec succès");
        expect(mockDestroy).toHaveBeenCalled();
    }));
    it("devrait retourner une erreur 404 si l'utilisateur n'existe pas", () => __awaiter(void 0, void 0, void 0, function* () {
        User_1.default.findByPk.mockResolvedValue(null);
        const response = yield (0, supertest_1.default)(index_1.default).delete("/users/999");
        expect(response.status).toBe(404);
        expect(response.body.error).toBe("Utilisateur non trouvé");
    }));
    it("devrait gérer une erreur interne (500) si la suppression échoue", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockDestroy = globals_1.jest.fn().mockRejectedValue(new Error("Erreur serveur"));
        const mockUser = {
            destroy: mockDestroy,
            get: globals_1.jest.fn(() => ({
                id: 1,
                name: "John Doe",
                email: "john@example.com",
            })),
        };
        User_1.default.findByPk.mockResolvedValue(mockUser);
        const response = yield (0, supertest_1.default)(index_1.default).delete("/users/1");
        expect(response.status).toBe(500);
        expect(response.body.error).toBe("Erreur lors de la suppression de l'utilisateur");
        expect(mockDestroy).toHaveBeenCalled();
    }));
});
