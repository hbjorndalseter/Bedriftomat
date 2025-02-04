import express, {Request, Response} from 'express';
import fs from "fs";
import { Company } from "../../types";
const app = express();

app.get("/test", (req: Request, res: Response) => {
    console.log("Siu")});

app.get("/numCompanies", (req: Request, res: Response) => {
    let numberOfCompanies : number;
    const rawData = fs.readFileSync("../companies.json");
    const jsonData = JSON.parse(rawData)
    console.log(jsonData);
})

app.get("/randomQuestions",)

app.post("/results")

app.listen(3000, () =>{
    console.log("Lytter til en port.")
})