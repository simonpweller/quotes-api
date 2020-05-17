const request = require("supertest");
const app = require("./app");
const quotes = require("./quotes");

describe("routes", () => {
  describe("/", () => {
    it("responds with a list of quotes", (done) => {
      request(app).get("/").expect(200, quotes, done);
    });
  });
});
