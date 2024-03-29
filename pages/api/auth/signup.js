import isEmail from "validator/lib/isEmail";

import handler from "../../../lib/handler";
import { hashPassword } from "../../../lib/passwordEncrypt";
import { saveUser } from "../../../lib/user/user.model";

export default handler().post(async (req, res) => {
  const formData = req.body;

  if (
    !isEmail(formData.email) ||
    !formData.password ||
    !formData.name ||
    typeof formData.name !== "string" ||
    typeof formData.password !== "string"
  ) {
    return res.status(405).json({
      error: "Bad request",
    });
  }

  const user = {
    _id: formData.email,
    password: await hashPassword(formData.password),
    name: formData.name,
  };

  try {
    await saveUser(user);
  } catch (err) {
    console.log(err.message);
    if (err.code === 11000) {
      return res.status(409).json({ error: "Email already exists" });
    }
    return res
      .status(500)
      .json({ error: "Server error, we could not complete your request" });
  }

  return res.status(200).json({ message: "Signup successfull" });
});
