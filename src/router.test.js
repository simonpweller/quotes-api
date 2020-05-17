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
      expect(quote).toHaveProperty("quoteText");
      expect(quote).toHaveProperty("quoteAuthor");
      expect(quote).toHaveProperty("quoteLink");
      done();
    });
  });
});
