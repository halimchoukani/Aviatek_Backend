import express from "express";
import { account } from "../appwrite.js";
import { v4 as uuidv4 } from "uuid"; // install uuid first

const router = express.Router();

// Get current account info
router.get("/me", async (req, res) => {
  try {
    const user = await account.get();
    res.json(user);
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
