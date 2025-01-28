//import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import QuestionBox from './components/QuestionBox.tsx'

function App() {

  return (
    <div>
      <Header/>
      <QuestionBox question="Hva heter du?"></QuestionBox>
    </div>
  )
}

export default App
