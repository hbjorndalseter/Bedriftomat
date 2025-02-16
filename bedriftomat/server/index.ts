import express, { Request, Response } from 'express';
import fs from "fs";
import path from "path";
import cors from 'cors';
import { Company, Question} from "../client/src/types";
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json())

 //Test endepunkt
 app.get("/test", (req: Request, res: Response) => {
     res.json({ text: "You loaded the data." });
     console.log("Data loaded");
 })

// Hent antall bedrifter fra companies.json
app.get("/numCompanies", (_req: Request, res: Response) => {
    try {
        const filePath = path.join(__dirname, 'data', 'companies.json');
        const rawData = fs.readFileSync(filePath, "utf-8");
        const jsonData = JSON.parse(rawData)
        const companies: Company[] = jsonData.companies;
        res.json({ count: companies.length }) // Send antall bedrifter til klienten
    } catch (error) {
        res.status(500).json({ error: "Failed to load companies data."})
    }
})

// Hent spørsmål fra questions.json
app.get("/randomQuestions", (_req: Request, res: Response) => {
    try {
        const filePath = path.join(__dirname, 'data', 'questions.json');
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const questions : Question[] = data.questions;
        const randomQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 6);
        res.json({ questions: randomQuestions });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to load questions data."})
    }
 })

// Hent bedrifter som matcher brukerens svar
app.post("/matchingBusinesses", (req: Request, res: Response) => {
    const scores = req.body;
    try {
        const filePath = path.join(__dirname, 'data', 'companies.json');
        const rawData = fs.readFileSync(filePath, "utf-8");
        const jsonData = JSON.parse(rawData);
        const companies: Company[] = jsonData.companies;
        
        // Combine companies with their scores
        const companiesWithScores = companies.map((company, index) => ({
            company,
            score: scores[index] || 0
        }));
        
        // Sort companies by score in descending order and get the top 3
        const topCompanies = companiesWithScores
            .sort((a, b) => b.score - a.score)
            .slice(0, 3)
            .map(item => item.company);
        
        res.json({topCompanies: topCompanies});
    } catch (error) {
        res.status(500).json({ error: "Failed to load companies data." });
    }
 })

 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
 });

module.exports = app