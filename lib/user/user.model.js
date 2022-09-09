const User = require("./user.mongo");

export async function saveUser(userData) {
  return await User.create(userData);
}

export const getUserByEmail = async (id) => {
  return await User.findOne({
    _id: id,
  })
    .select("_id name password")
    .lean();
};
