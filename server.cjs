const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api", async (req, res) => {
  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3",
        prompt: req.body.message,
        stream: false
      })
    });

    const data = await response.json();
    res.json({ reply: data.response });

  } catch (err) {
    res.json({ reply: "Ошибка: " + err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});