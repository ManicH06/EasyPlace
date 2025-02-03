import request from "supertest";
import app from "../index"; // Instance Express
import User from "../../models/User"; // Modèle Sequelize
import { jest } from "@jest/globals";
import { Model } from "sequelize";

jest.mock("../../models/User", () => {
  const actualModule = jest.requireActual("../../models/User");

  return {
    __esModule: true,
    ...(typeof actualModule === 'object' ? actualModule : {}), // Keep other properties (so associations work)
    default: {
      ...(actualModule as any).default, // Keep Sequelize instance structure
      findByPk: jest.fn(), // Mock findByPk explicitly
      destroy: jest.fn(), // Mock destroy explicitly
    },
  };
});


describe("DELETE /users/:id", () => {
  it("devrait supprimer un utilisateur existant", async () => {
    console.log("🚀 Mocking findByPk for valid user");
    const mockDestroy = jest
      .fn<() => Promise<void>>()
      .mockResolvedValue(undefined);
    const mockUser = {
      destroy: mockDestroy,
      get: jest.fn(() => ({
        id: 23,
        name: "John Doe",
        email: "john@example.com",
      })),
    } as unknown as Model;

    (
      User.findByPk as jest.MockedFunction<typeof User.findByPk>
    ).mockResolvedValue(mockUser);
    console.log("🛠 Mocked user:", mockUser);
    const response = await request(app).delete("/users/23");
    console.log("📤 Response:", response.body);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Utilisateur supprimé avec succès");
    expect(mockDestroy).toHaveBeenCalled();
  });

  it("devrait retourner une erreur 404 si l'utilisateur n'existe pas", async () => {
    console.log("🚀 Mocking findByPk to return null");
    (
      User.findByPk as jest.MockedFunction<typeof User.findByPk>
    ).mockResolvedValue(null);

    const response = await request(app).delete("/users/999");
    console.log("📤 Response:", response.body);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Utilisateur non trouvé");
  });

  it("devrait gérer une erreur interne (500) si la suppression échoue", async () => {
    console.log("🚀 Mocking findByPk for error case");
    const mockDestroy = jest
      .fn<() => Promise<void>>()
      .mockRejectedValue(new Error("Erreur serveur"));
    const mockUser = {
      destroy: mockDestroy,
      get: jest.fn(() => ({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
      })),
    } as unknown as Model;

    (
      User.findByPk as jest.MockedFunction<typeof User.findByPk>
    ).mockResolvedValue(mockUser);
    console.log("🛠 Mocked user for error:", mockUser);
    const response = await request(app).delete("/users/1");
    console.log("📤 Response:", response.body);
    expect(response.status).toBe(500);
    expect(response.body.error).toBe(
      "Erreur lors de la suppression de l'utilisateur"
    );
    expect(mockDestroy).toHaveBeenCalled();
  });
});
