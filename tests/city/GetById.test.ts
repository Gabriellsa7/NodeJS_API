import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("City - GetById", () => {
  it("Search record by id", async () => {
    const res = await testServer.post("/city").send({ name: "Matatas" });

    expect(res.statusCode).toEqual(StatusCodes.CREATED);

    const resSought = await testServer.get(`/city/${res.body}`).send();

    expect(resSought.statusCode).toEqual(StatusCodes.OK);
    expect(resSought.body).toHaveProperty("name");
  });

  it("Trying search record that not exist", async () => {
    const res = await testServer.get("/city/99999").send();

    expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res.body).toHaveProperty("errors.default");
  });
});
