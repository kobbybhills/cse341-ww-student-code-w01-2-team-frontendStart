const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My Contacts API",
    description: "Contacts API for CSE341 Week 2",
  },
  host: "cse341-contacts-scfd.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"]; // Points to my main router file

swaggerAutogen(outputFile, endpointsFiles, doc);
