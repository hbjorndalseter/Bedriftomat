export interface Answer {
    id: number;
    text: string;
    rewarded_companies: number[];
}

export interface Question {
    id: number;
    question: string;
    answers: Answer[];
}

export interface Company {
    id: number;
    name: string;
    logo: string;
}