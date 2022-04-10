const { startServer, closeServer } = require("../../../server");
const customersList = require("../../../db/customersList");

const response = require("../samples/newAccountHandler");

let server;

beforeAll(async () => {
  server = await startServer();
});

afterAll(async () => {
  await closeServer();
});

jest.setTimeout(25000);

describe("New Account", () => {
  describe("When Customer Exists", () => {
    describe("Passing initial credit value grater than 0", () => {
      it("Should create Account", async () => {
        const request = await server.inject({
          url: `/new-account`,
          method: "POST",
          payload: {
            customerId: customersList.data[0]._id,
            ammount: 120,
          },
        });

        expect(request.statusCode).toEqual(200);
        expect(request.payload).toEqual(response.success);
      });
    });

    describe("Passing initial credit value equal 0", () => {
      it("Should create Account", async () => {
        const request = await server.inject({
          url: `/new-account`,
          method: "POST",
          payload: {
            customerId: customersList.data[0]._id,
            ammount: 0,
          },
        });

        expect(request.statusCode).toEqual(200);
        expect(request.payload).toEqual(response.success);
      });
    });
  });

  describe("When Customer Not Exists", () => {
    it("Should not create Account", async () => {
      const request = await server.inject({
        url: `/new-account`,
        method: "POST",
        payload: {
          customerId: "some-text",
          ammount: 120,
        },
      });

      expect(request.statusCode).toEqual(200);
      expect(request.payload).toEqual(response.error);
    });
  });
});
