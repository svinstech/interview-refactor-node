import { expect } from "chai";
import applicationReview from "./application.review";
const desiredHash = require("./application.review.expected.json");

describe("Application Review", () => {
  it("metadata is correct", () => {
    const result = applicationReview;

    expect(result.$schema).to.equal(desiredHash.$schema);
    expect(result.type).to.equal(desiredHash.type);
    expect(result.title).to.equal(desiredHash.title);

  });
  it("has the correct keys in allOf", () => {
    const result = Object.keys(applicationReview.allOf);

    expect(result).to.eql(Object.keys(desiredHash.allOf));
  });
  it("has expected hash", () => {
    const result = applicationReview.allOf;

    expect(JSON.stringify(result)).to.eql(JSON.stringify(desiredHash.allOf));
  });

  it("generates pii fields correctly", () => {
    const result = applicationReview.allOf[0];

    expect(result).to.deep.eql(desiredHash.allOf[0]);
  });

  it("generates engineering contractor dependencies fields correctly", () => {
    const result = applicationReview.allOf[1];

    expect(result).to.deep.eql(desiredHash.allOf[1]);
  });

  it("generates engineering contractor dependencies fields correctly", () => {
    const result = applicationReview.allOf[2];

    expect(result).to.deep.eql(desiredHash.allOf[2]);
  });

  it("generates benefits dependencies fields correctly", () => {
    const result = applicationReview.allOf[3];

    expect(result).to.deep.eql(desiredHash.allOf[3]);
  });

  it("generates pending claims dependencies fields correctly", () => {
    const result = applicationReview.allOf[4];

    expect(result).to.deep.eql(desiredHash.allOf[4]);
  });

  it("generates current claims dependencies fields correctly", () => {
    const result = applicationReview.allOf[5];

    expect(result).to.deep.eql(desiredHash.allOf[5]);
  });

  it("generates denied coverage dependencies fields correctly", () => {
    const result = applicationReview.allOf[6];

    expect(result).to.deep.eql(desiredHash.allOf[6]);
  });

  it("generates filed liability claim dependencies fields correctly", () => {
    const result = applicationReview.allOf[7];

    expect(result).to.deep.eql(desiredHash.allOf[7]);
  });

  it("generates full time worker dependencies fields correctly", () => {
    const result = applicationReview.allOf[8];

    expect(result).to.deep.eql(desiredHash.allOf[8]);
  });

});
