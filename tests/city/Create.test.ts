import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("City - Create", () => {
  //test case a test scenario
  it("create record", async () => {
    const res = await testServer.post("/city").send({ name: "Matatas" });

    expect(res.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res.body).toEqual("number");
  });

  it("try create a city", async () => {
    const res = await testServer.post("/city").send({ name: "ca" });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("error.body.name");
  });
});
