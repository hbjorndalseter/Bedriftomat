import express, { Request, Response } from "express";
import companiesData from "../data/companies.json";
import questionsData from "../data/questions.json";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Route: Fetch companies
app.get("/api/numCompanies", (req, res) => {
  try {
    res.json({ count: companiesData.companies.length });
  } catch (error) {
    res.status(500).json({ error: "Failed to load companies data." });
  }
});

// Route: Fetch random questions
app.get("/api/randomQuestions", (req, res) => {
  try {
    const questions = questionsData.questions.sort(() => Math.random() - 0.5).slice(0, 6);
    res.json({ questions });
  } catch (error) {
    res.status(500).json({ error: "Failed to load questions data." });
  }
});

// Route: Match businesses
app.post("/api/matchingBusinesses", (req, res) => {
  const scores = req.body;
  try {
    const companies = companiesData.companies;
    const companiesWithScores = companies.map((company, index) => ({
      company,
      score: scores[index] || 0
    }));

    const topCompanies = companiesWithScores
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.company);

    res.json({ topCompanies });
  } catch (error) {
    res.status(500).json({ error: "Failed to load companies data." });
  }
});

if (process.env.NODE_ENV !== "production") {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

export default app;
