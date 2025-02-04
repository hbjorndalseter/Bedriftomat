//import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import static components
import Header from './components/Header.tsx';

// import pages for routing
import StartPage from './pages/StartPage.tsx';
import QuestionPage from './pages/QuestionPage.tsx';
import ResultPage from './pages/ResultPage.tsx';


export default function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen relative overflow-hidden bg-gradient-to-b from-[#2c3a86] via-[#c5793a] to-[#ec8927]">
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/q" element={<QuestionPage />} />
          <Route path="/r" element={<ResultPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}