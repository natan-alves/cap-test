const newAccountSchema = {
  description: "Create new Account",
  body: {
    type: "object",
    properties: {
      ammount: { type: "number" },
      customerId: { type: "string" },
    },
    required: ["ammount", "customerId"],
  },
  response: {
    200: {
      description: "Sucessful response",
      type: "string",
      example: "<html>HTML text</html>",
    },
    500: {
      description: "Internal Server Error",
      type: "object",
      properties: {
        code: { type: "integer" },
        error: { type: "string" },
        message: { type: "string" },
      },
      required: ["code", "error", "message"],
    },
  },
};

const accountsSchema = {
  description: "Show all accounts",
  response: {
    200: {
      description: "List of all accounts",
      type: "string",
      example: "<html>HTML text</html>",
    },
    500: {
      description: "Internal Server Error",
      type: "object",
      properties: {
        code: { type: "integer" },
        error: { type: "string" },
        message: { type: "string" },
      },
      required: ["code", "error", "message"],
    },
  },
};

const newAccountFormSchema = {
  description: "Form to create a new account",
  response: {
    200: {
      description: "Form to create a new account",
      type: "string",
      example: "<html>HTML text</html>",
    },
    500: {
      description: "Internal Server Error",
      type: "object",
      properties: {
        code: { type: "integer" },
        error: { type: "string" },
        message: { type: "string" },
      },
      required: ["code", "error", "message"],
    },
  },
};

module.exports = { newAccountSchema, accountsSchema, newAccountFormSchema };
