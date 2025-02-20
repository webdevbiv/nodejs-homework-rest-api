const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

// live server: https://nodejs-homework-rest-api-34tv.onrender.com/api/contacts

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running and connected to DB");
      console.log("Contacts: http://localhost:3000/api/contacts");
      console.log("Users: http://localhost:3000/api/users");
      console.log("Live server: https://nodejs-homework-rest-api-34tv.onrender.com/api/contacts");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
