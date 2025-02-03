export default {
  setupFilesAfterEnv: ["<rootDir>/src/tests/setup.ts"],
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],
  moduleFileExtensions: ["ts", "js"],
  clearMocks: true
};