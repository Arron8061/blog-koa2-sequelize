const Sequelize = require("sequelize");

const seq = require("../seq");

//User模型
const User = seq.define(
  "user", //表名(自动变成英文复数)
  {
    //id 不用自己定义，会自动加上
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    realname: {
      type: Sequelize.STRING,
    },
  }
);
module.exports = User;
