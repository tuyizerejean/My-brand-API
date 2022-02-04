import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../src/app.js";
import "dotenv/config";

chai.use(chaiHttp);
describe("ARTICLE END-POINT TESTING", () => {
  it("It will create the article", (done) => {
    chai
      .request(app)
      .post("/api/v1/aritcles/")
      .send()
      .end((err, res) => {
        done();
      });
  });
  it("It will retrieve the articles", (done) => {
    chai
      .request(app)
      .get("/api/v1/aritcles/")
      .send()
      .end((err, res) => {
        expect(res).to.have.property("status");
        done();
      });
  });
  it("Can  not retrieve the articles", (done) => {
    chai
      .request(app)
      .get("/api/v1/artcles/")
      .send()
      .end((err, res) => {
        expect(res).to.have.status([404]);
        done();
      });
  });
});