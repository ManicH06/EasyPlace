import request from "supertest";
import app from "../index"; // Import de l'instance Express
import User from "../../models/User";
import bcrypt from "bcrypt";
import { jest } from "@jest/globals";
import { Model } from "sequelize";

jest.mock("bcrypt", () => ({
  hash: jest.fn() as jest.MockedFunction<
    (data: string, saltOrRounds: number) => Promise<string>
  >,
}));

jest.mock("../../models/User", () => ({
  __esModule: true,
  default: {
    create: jest.fn(),
    findOne: jest.fn(),
  },
}));

describe("POST /register", () => {
  it("devrait créer un utilisateur avec un mot de passe haché", async () => {
    (
      bcrypt.hash as jest.MockedFunction<
        (data: string, saltOrRounds: number) => Promise<string>
      >
    ).mockResolvedValue("hashedpassword");

    (User.create as jest.MockedFunction<typeof User.create>).mockResolvedValue({
      get: () => ({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        roleId: 4,
        createdAt: new Date(),
      }),
    } as unknown as Model);

    const response = await request(app).post("/users/register").send({
      name: "John Doe",
      email: "john@example.com",
      password: "mypassword",
    });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe("John Doe");
    expect(response.body.email).toBe("john@example.com");
    expect(response.body.password).toBeUndefined(); // Vérification que le mot de passe n'est pas retourné
  });

  it("devrait retourner une erreur si l'email est déjà utilisé", async () => {
    (
      User.findOne as jest.MockedFunction<typeof User.findOne>
    ).mockResolvedValue({
      get: () => ({ email: "john@example.com" }),
    } as unknown as Model);

    const response = await request(app).post("/users/register").send({
      name: "John Doe",
      email: "john@example.com",
      password: "mypassword",
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Email déjà utilisé");
  });

  it("devrait gérer une erreur interne (500)", async () => {
    (User.create as jest.MockedFunction<typeof User.create>).mockRejectedValue(
      new Error("Erreur base de données")
    );

    const response = await request(app).post("/users/register").send({
      name: "John Doe",
      email: "john@example.com",
      password: "mypassword",
    });

    expect(response.status).toBe(500);
    expect(response.body.error).toBe(
      "Erreur lors de la création de l'utilisateur"
    );
  });
});
