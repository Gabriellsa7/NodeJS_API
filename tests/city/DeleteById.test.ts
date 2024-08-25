import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("City - Delete", async () => {
  it("Delete record", async () => {
    const res = await testServer.delete("/city").send({ name: "Matatas" });

    expect(res.statusCode).toEqual(StatusCodes.CREATED);

    const resDeleted = await testServer.delete(`/city/${res.body}`).send();

    expect(resDeleted.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  it("try delete record that not exist", async () => {
    const res = await testServer.delete("/city/99999").send();

    expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res.body).toHaveProperty("errors.default");
  });
});
