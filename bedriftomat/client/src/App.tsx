import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import static components
import Header from './components/Header';

// import pages for routing
import StartPage from './pages/StartPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';


export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}