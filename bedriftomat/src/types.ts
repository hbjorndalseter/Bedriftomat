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

export interface QuestionProps {
    text: string;
}

export interface NextButtonProps {
    onClick: () => void;
    disabled: boolean;
  }
  
  export interface QuizData {
    questions: Question[];
  }

  export interface SelectedAnswer {
    answerId: number;
    rewardedCompanies: number[];
  }