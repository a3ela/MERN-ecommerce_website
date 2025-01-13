const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "john doe",
    email: "johndoe@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
  {
    name: "jone doe",
    email: "jonedoe@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
];

module.exports = users;
