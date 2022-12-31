const User = require("../db/model/user");

const login = async (username, password) => {
  const user = await User.findOne({
    where: {
      username,
      password,
    },
  });
  if (user == null) return null;
  return user.dataValues;
};

module.exports = {
  login,
};
