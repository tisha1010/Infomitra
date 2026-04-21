import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { fetchFromGemini } from "./utils/gemini.js";
import Info from "./models/Info.js"; // ✅ MongoDB model

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ API route
app.post("/api/query", async (req, res) => {
  let { query, language } = req.body;

  try {
    // Normalize query (lowercase + trim)
    const normalizedQuery = query.trim().toLowerCase();

    // Log the incoming query in terminal
    console.log(`🔍 User searched: "${query}" → Normalized: "${normalizedQuery}"`);

    // Check MongoDB first
    let existing = await Info.findOne({ query: normalizedQuery, language });

    if (existing) {
      console.log("✅ Served from MongoDB cache:", normalizedQuery);
      return res.json({ response: existing.response });
    }

    // If not in DB → Call Gemini API
    const response = await fetchFromGemini(normalizedQuery, language);

    // Save new record in MongoDB
    const newInfo = new Info({ query: normalizedQuery, response, language });
    await newInfo.save();

    console.log("✨ Saved new info in MongoDB:", normalizedQuery);
    res.json({ response });
  } catch (error) {
    console.error("❌ Error in /api/query:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

