import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

const users = []; // This should be replaced with a real database

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    //if the user already exists
    const userExists = users.find((user) => user.username === username);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: uuidv4(),
      username,
      password: hashedPassword,
    };
    users.push(newUser);

    res.status(201).json({ message: "User registered successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
