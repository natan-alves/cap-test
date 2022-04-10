const { startServer, closeServer } = require("../../../server");

const response = require("../samples/newAccountViewHandler");

let server;

beforeAll(async () => {
  server = await startServer();
});

afterAll(async () => {
  await closeServer();
});

jest.setTimeout(25000);

describe("New Account View", () => {
  it("Should display form", async () => {
    const request = await server.inject({
      url: `/new-account`,
      method: "GET",
    });

    expect(request.statusCode).toEqual(200);
    expect(request.payload).toEqual(response.success);
  });
});
