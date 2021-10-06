const { User } = require("../models");

const userInfo = [
  {
    username: "Michael Scott",
    email: "dundermifflin@gmail.com",
    password: "password",
  },
  {
    username: "Danny Phantom",
    email: "phantom@gmail.com",
    password: "password",
  },
  {
    username: "Babe Ruth",
    email: "yankees@gmail.com",
    password: "password",
  },
  {
    username: "Shia Labeouf",
    email: "transformers@gmail.com",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userInfo);
module.exports = seedUser;