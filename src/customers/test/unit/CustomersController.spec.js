const CustomersController = require("../../api/controller/CustomersController");
const customersList = require("../../../db/customersList");

const validCustomer = customersList.data[0];

describe("CustomersController", () => {
  describe("When Customer exist", () => {
    it("Should return a valid Customer Object", () => {
      const customer = CustomersController._findCustomer(validCustomer._id);
      expect(customer).toMatchObject(validCustomer);
    });
  });
});
