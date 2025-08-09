const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample vibes
const vibes = [
  { text: "Pure chill — everything's soft and calm.", emoji: "😌", colors: ["#FFDDE2", "#FEE9B2"] },
  { text: "Full energy — go crush it!", emoji: "⚡️", colors: ["#FFDEE9", "#B5FFFC"] },
  { text: "Cozy & warm — blankets and hot chocolate.", emoji: "🫶", colors: ["#FFEEAD", "#D4F1F4"] },
  { text: "Focused mode — time to grind.", emoji: "🎯", colors: ["#C2FFD8", "#465EFB"] },
  { text: "Playful vibes — let's have fun!", emoji: "🤹‍♂️", colors: ["#FF9A9E", "#FAD0C4"] }
];

// API route to get a random vibe
app.get("/vibe", (req, res) => {
  const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
  res.json(randomVibe);
});

// Serve frontend files (if your frontend is in 'public' folder)
app.use(express.static("public"));

// Start the server
app.listen(PORT, () => {
  console.log(VibeCheck backend running on http://localhost:${PORT});
});