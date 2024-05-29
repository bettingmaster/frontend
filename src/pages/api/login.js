import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const users = []; // This should be replaced with a real database

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Find the user
    const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Create a JWT token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      "your_jwt_secret",
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
