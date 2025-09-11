// --- Server Setup ---
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// ✅ CORS setup
app.use(cors({
  origin: [
    "https://bakeryv7.netlify.app", // ✅ correct production frontend
    "http://localhost:3000"            // local frontend
  ],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true
}));

app.use(express.json());

// --- MongoDB Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// --- Root route for health check ---
app.get('/', (req, res) => {
  res.send('🍰 Bakery Backend is running!');
});

// --- Feedback Schema ---
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  status: { type: String, default: "pending" },
  date: { type: Date, default: Date.now }
});
const Feedback = mongoose.model("Feedback", feedbackSchema);

// --- API Routes ---
// Save feedback
app.post("/feedback", async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json({ message: "Feedback saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get all feedbacks
app.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});

// Get approved feedbacks
app.get("/feedback/approved", async (req, res) => {
  try {
    const approvedFeedbacks = await Feedback.find({ status: "approved" });
    res.json(approvedFeedbacks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch approved feedbacks" });
  }
});

// Approve feedback
app.patch("/approve/:id", async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );
    if (!feedback) return res.status(404).json({ message: "Feedback not found" });
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: "Failed to approve feedback" });
  }
});

// Delete feedback
app.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await Feedback.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Feedback not found" });
    res.json({ message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete feedback" });
  }
});

// --- Serve Admin Panel ---
app.get("/admin", (req, res) => {
  res.send(`... your existing HTML ...`);
});

// --- Serve Frontend Static Files ---
app.use(express.static(path.join(__dirname, "frontend"))); 
// ✅ Just this is enough for HTML/CSS projects
// ❌ Don't use React-style catch-all route

// --- Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
