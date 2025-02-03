import request from "supertest";
import app from "../index";
import Shop from "../../models/Shop";
import { jest } from "@jest/globals";


jest.mock("../../models/Shop", () => {
  const actualModule = jest.requireActual<typeof import("../../models/Shop")>("../../models/Shop"); 
  return {
    __esModule: true,
    ...actualModule,
    Shop: {
      findAll: jest.fn(),
    },
  };
});


describe("GET /shops", () => {
  it("should return a list of shops", async () => {
    (
      Shop.findAll as jest.MockedFunction<typeof Shop.findAll>
    ).mockResolvedValue([
      { id: 1, companyName: "Boulangerie Dupont" } as Shop,
      { id: 2, companyName: "Coiffeur Parisien" } as Shop,
    ]);

    const response = await request(app).get("/shops/");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0].companyName).toBe("Boulangerie Dupont");
  });

  it("should return 500 if database query fails", async () => {
    (
      Shop.findAll as jest.MockedFunction<typeof Shop.findAll>
    ).mockRejectedValue(new Error("DB Error"));

    const response = await request(app).get("/shops/");

    expect(response.status).toBe(500);
    expect(response.body.error).toBe(
      "Erreur lors de la récupération des shops"
    );
  });
});
