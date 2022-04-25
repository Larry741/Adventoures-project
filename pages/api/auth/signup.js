import { connectDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/passwordEncrypt";

import handler from "../../../lib/handler";

export default handler().post(async (req, res) => {
  const { email, password, name } = req.body;

  //add validation for data

  const client = await connectDatabase();
  const db = client.db();

  const userExists = await db.collection("users").findOne({ email: email });

  if (userExists) {
    client.close();
    return res
      .status(422)
      .json({ message: "user already exists, login instead!" });
  }

  await db.collection("users").insertOne({
    email,
    password: await hashPassword(password),
    name
  });

  client.close();
  return res.status(200).json({ message: "user created" });
});
