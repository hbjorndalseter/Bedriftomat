import express, { Request, Response } from 'express';
import fs from "fs";
import cors from 'cors';
import { Company } from "../types";
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Allow cross-origin requests
app.use(express.json())

// Test endepunkt
app.get("/test", (req: Request, res: Response) => {
    res.json({ text: "You clicked a button." });
})

// Hent antall bedrifter fra companies.json
app.get("/numCompanies", (req: Request, res: Response) => {
    try {
        const rawData = fs.readFileSync("companies.json", "utf-8");
        const jsonData = JSON.parse(rawData)
        const companies: Company[] = jsonData.companies;
        res.json({ count: companies.length }) // Send antall bedrifter til klienten
    } catch (error) {
        res.status(500).json({ error: "Failed to load companies data." })
    }
})

app.get("/randomQuestions", (req: Request, res: Response) => { })

app.post("/results", (req: Request, res: Response) => { })

// Serveren er på port 3000 (clienten er på port 5173)
app.listen(3000, () => {
    console.log("Lytter til en port.")
})

module.exports = app