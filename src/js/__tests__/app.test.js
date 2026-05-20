import { getHealthStatus } from "../app";

describe("getHealthStatus", () => {
  describe("healthy status (health > 50)", () => {
    test('should return "healthy" when health is 51', () => {
      const character = { name: "Маг", health: 51 };
      expect(getHealthStatus(character)).toBe("healthy");
    });
  });

  describe("wounded status (15 <= health <= 50)", () => {
    test('should return "wounded" when health is exactly 50', () => {
      const character = { name: "Маг", health: 50 };
      expect(getHealthStatus(character)).toBe("wounded");
    });

    test('should return "wounded" when health is 30', () => {
      const character = { name: "Воин", health: 30 };
      expect(getHealthStatus(character)).toBe("wounded");
    });

    test('should return "wounded" when health is exactly 15', () => {
      const character = { name: "Лучник", health: 15 };
      expect(getHealthStatus(character)).toBe("wounded");
    });
  });

  describe("critical status (health < 15)", () => {
    test('should return "critical" when health is 14', () => {
      const character = { name: "Маг", health: 14 };
      expect(getHealthStatus(character)).toBe("critical");
    });
  });
});
