import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("City - GetAll", () => {
  it("Search all records", async () => {
    const res = await testServer.post("/city").send({ name: "Matatas" });

    expect(res.statusCode).toEqual(StatusCodes.CREATED);

    const resSought = await testServer.get("/city").send();

    expect(Number(resSought.header["x-total-count"])).toBeGreaterThan(0);
    expect(resSought.statusCode).toEqual(StatusCodes.OK);
    expect(resSought.body.length).toBeGreaterThan(0);
  });
});
