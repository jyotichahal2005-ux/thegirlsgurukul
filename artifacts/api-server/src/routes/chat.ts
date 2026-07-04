import { Router } from "express";
import Groq from "groq-sdk";

const router = Router();

const SYSTEM_PROMPT = `You are a helpful school assistant for "The Girls Gurukul", a prestigious CBSE-affiliated girls school located in Kalayat, Kaithal District, Haryana - 136027, India.

Key school information:
- School Name: The Girls Gurukul, Kalayat
- Affiliation: CBSE (Central Board of Secondary Education)
- Classes: Nursery to Class XII
- Streams offered: Science (PCM/PCB), Commerce (with Maths)
- Phone: +91-1742-271XXX
- Email: info@girlsgurukul.edu.in
- Office Hours: Monday to Saturday, 9:00 AM – 4:00 PM
- School Hours: 8:00 AM – 2:30 PM
- Location: Kalayat, Kaithal District, Haryana – 136027

Facilities: Physics/Chemistry/Biology Labs, Computer Lab (100+ systems), Library (15,000+ books), Archery Range, Multi-Sports Ground, Art Studio, Music Room, Cafeteria, Smart Classrooms, School Bus Service.

Admissions 2026-27 are open. Documents required: Birth Certificate, Aadhaar Card, Transfer Certificate, Previous marksheet, 4 passport photos, Residence proof, Caste certificate (if applicable).

Eligibility:
- Nursery/LKG: 3–4 years
- Class I–V: 6–11 years
- Class VI–VIII: 11–14 years (Entrance test)
- Class IX: 14–15 years (Min 50% in Class VIII)
- Class XI Science: Min 60% in Class X
- Class XI Commerce: Min 50% in Class X

Scholarships: Sibling discount (10%), Merit scholarship, SC/ST concession as per Govt norms, Single parent consideration, Sports excellence fee waiver.

Academic achievements: 100% pass rate in CBSE Board exams for 10 consecutive years, District Topper in Kaithal 2024, Best Girls School award by Haryana Govt 2023.

Transport: School bus service available for nearby villages.

Rules:
- Answer only questions related to the school, admissions, fees, academics, facilities, timings, and contact information.
- Be warm, helpful, and professional.
- Keep answers concise but informative.
- If you don't know specific fee amounts, direct users to contact the school office or visit the Fee Structure page.
- Respond in the same language the user uses (Hindi or English).
- Use emojis sparingly to make responses friendly.`;

router.post("/chat", async (req, res) => {
  const { messages } = req.body as { messages: { role: string; content: string }[] };

  if (!messages || !Array.isArray(messages)) {
    res.status(400).json({ error: "messages array is required" });
    return;
  }

  const apiKey = process.env["GROQ_API_KEY"];
  if (!apiKey) {
    res.status(500).json({ error: "API key not configured" });
    return;
  }

  try {
    const client = new Groq({ apiKey });

    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ],
      max_tokens: 180,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? "Sorry, I couldn't generate a response.";
    res.json({ reply });
  } catch (err: unknown) {
    req.log.error({ err }, "Groq API error");
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: message });
  }
});

export default router;
