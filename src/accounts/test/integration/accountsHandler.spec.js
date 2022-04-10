const { startServer, closeServer } = require("../../../server");

const response = require("../samples/accountHandler");

let server;

beforeAll(async () => {
  server = await startServer();
});

afterAll(async () => {
  await closeServer();
});

jest.setTimeout(25000);

describe("Accounts List", () => {
  it("Should display the accounts from the customers", async () => {
    const request = await server.inject({
      url: `/accounts`,
      method: "GET",
    });

    expect(request.statusCode).toEqual(200);
    expect(request.payload).toEqual(response.success);
  });
});
