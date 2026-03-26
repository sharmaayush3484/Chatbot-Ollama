const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* ================= CHAT ROUTE ================= */
app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "tinyllama",
                prompt: userMessage,
                stream: false
            })
        });

        const data = await response.json();

        res.json({ reply: data.response });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

/* ================= SERVER ================= */
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});