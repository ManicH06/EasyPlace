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
const index_1 = __importDefault(require("../index")); // Import de l'instance Express
const User_1 = __importDefault(require("../../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const globals_1 = require("@jest/globals");
globals_1.jest.mock("bcrypt", () => ({
    hash: globals_1.jest.fn(),
}));
globals_1.jest.mock("../../models/User", () => ({
    __esModule: true,
    default: {
        create: globals_1.jest.fn(),
        findOne: globals_1.jest.fn(),
    },
}));
describe("POST /register", () => {
    it("devrait créer un utilisateur avec un mot de passe haché", () => __awaiter(void 0, void 0, void 0, function* () {
        bcrypt_1.default.hash.mockResolvedValue("hashedpassword");
        User_1.default.create.mockResolvedValue({
            get: () => ({
                id: 1,
                name: "John Doe",
                email: "john@example.com",
                roleId: 4,
                createdAt: new Date(),
            }),
        });
        const response = yield (0, supertest_1.default)(index_1.default).post("/users/register").send({
            name: "John Doe",
            email: "john@example.com",
            password: "mypassword",
        });
        expect(response.status).toBe(201);
        expect(response.body.name).toBe("John Doe");
        expect(response.body.email).toBe("john@example.com");
        expect(response.body.password).toBeUndefined(); // Vérification que le mot de passe n'est pas retourné
    }));
    it("devrait retourner une erreur si l'email est déjà utilisé", () => __awaiter(void 0, void 0, void 0, function* () {
        User_1.default.findOne.mockResolvedValue({
            get: () => ({ email: "john@example.com" }),
        });
        const response = yield (0, supertest_1.default)(index_1.default).post("/users/register").send({
            name: "John Doe",
            email: "john@example.com",
            password: "mypassword",
        });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe("Email déjà utilisé");
    }));
    it("devrait gérer une erreur interne (500)", () => __awaiter(void 0, void 0, void 0, function* () {
        User_1.default.create.mockRejectedValue(new Error("Erreur base de données"));
        const response = yield (0, supertest_1.default)(index_1.default).post("/users/register").send({
            name: "John Doe",
            email: "john@example.com",
            password: "mypassword",
        });
        expect(response.status).toBe(500);
        expect(response.body.error).toBe("Erreur lors de la création de l'utilisateur");
    }));
});
