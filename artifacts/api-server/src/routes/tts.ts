import { Router } from "express";

const router = Router();

router.post("/tts", async (req, res) => {
  const { text } = req.body as { text: string };

  if (!text?.trim()) {
    res.status(400).json({ error: "text is required" });
    return;
  }

  const apiKey = process.env["CARTESIA_API_KEY"];
  if (!apiKey) {
    res.status(500).json({ error: "Cartesia API key not configured" });
    return;
  }

  // Detect Hindi (Devanagari) to set correct language
  const isHindi = /[\u0900-\u097F]/.test(text);

  try {
    const response = await fetch("https://api.cartesia.ai/tts/bytes", {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Cartesia-Version": "2024-06-10",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model_id: "sonic-2",
        transcript: text,
        voice: {
          mode: "id",
          id: "910fb75e-1d20-4840-ac63-ac6b26a71bdc",
        },
        output_format: {
          container: "mp3",
          encoding: "mp3",
          sample_rate: 44100,
        },
        language: isHindi ? "hi" : "en",
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      req.log.error({ status: response.status, errText }, "Cartesia TTS error");
      res.status(502).json({ error: "TTS service error" });
      return;
    }

    const buffer = await response.arrayBuffer();
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "no-cache");
    res.send(Buffer.from(buffer));
  } catch (err) {
    req.log.error({ err }, "Cartesia TTS request failed");
    res.status(500).json({ error: "TTS request failed" });
  }
});

export default router;
