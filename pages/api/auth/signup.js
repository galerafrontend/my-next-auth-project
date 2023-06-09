import { hashPassword } from "../../../helpers/authUtil";
import { connectToDatabase } from "../../../helpers/dbUtil";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        "Invalid input - password should also be at least 7 characters long",
    });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  const existigUser = await db.collection("users").findOne({ email: email });
  if (existigUser) {
    res.status(422).json({ message: "User exists already" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user" });
  client.close();
};

export default handler;
