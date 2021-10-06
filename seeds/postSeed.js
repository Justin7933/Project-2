const { Post } = require("../models");

const postData = [
  {
    title: "New Post 1",
    body: "Here you can see your first blog post!",
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;