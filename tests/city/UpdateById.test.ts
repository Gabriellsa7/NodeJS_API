import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("City - GetById", () => {
  it("updated record by id", async () => {
    const res = await testServer.post("/city").send({ name: "Matatas" });

    expect(res.statusCode).toEqual(StatusCodes.CREATED);

    const resUpdated = await testServer.put(`/city/${res.body}`).send();

    expect(resUpdated.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it("Trying updated record that not exist", async () => {
    const res = await testServer.put("/city/99999").send();

    expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res.body).toHaveProperty("errors.default");
  });
});
