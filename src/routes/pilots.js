import express from "express";
import { databases } from "../appwrite.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await databases.listDocuments(
      process.env.DATABASE_ID,
      process.env.COLLECTION_ID
    );

    res.json(result.documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
