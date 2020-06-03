const request = require("supertest");
const app = require("./app");
const quotes = require("./quotes");

describe("routes", () => {
  describe("/", () => {
    it("should respond with a list of quotes", async (done) => {
      const res = await request(app).get("/");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(quotes);
      done();
    });
  });

  describe("/random", () => {
    it("should respond with a quote", async (done) => {
      const res = await request(app).get("/random");
      const quote = res.body;

      expect(res.status).toBe(200);
      expect(quote).toHaveProperty("text");
      expect(quote).toHaveProperty("author");
      expect(quote).toHaveProperty("link");
      expect(quote).toHaveProperty("category");
      done();
    });
  });

  describe("/:quoteID", () => {
    it("should respond with a quote for a valid ID", async (done) => {
      const res = await request(app).get("/0");
      const quote = res.body;

      expect(res.status).toBe(200);
      expect(quote).toHaveProperty("text");
      expect(quote).toHaveProperty("author");
      expect(quote).toHaveProperty("link");
      expect(quote).toHaveProperty("category");
      done();
    });

    it("should respond with status 404 for an invalid ID", async (done) => {
      const res = await request(app).get("/-1");

      expect(res.status).toBe(404);
      done();
    });
  });
});
