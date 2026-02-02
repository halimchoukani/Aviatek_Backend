import express from "express";
import { account } from "../appwrite.js";
import { v4 as uuidv4 } from "uuid"; // install uuid first

const router = express.Router();

// Get current account info
router.get("/me", async (req, res) => {
  try {
    const user = await account.get(req.headers["x-appwrite-user-id"]);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const session = await account.createEmailPasswordSession(email, password);
    res.json(session);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Create a new user
router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const user = await account.create(
      uuidv4(), // <-- unique ID for Node SDK
      email,
      password,
      name,
    );
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
