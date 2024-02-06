import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './pages/Menu'
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'
import MyExperience from './pages/MyExperience'
import CheckYourself from './pages/CheckYourself'
import ExamPreparation from './pages/ExamPreparation'
import Interestingly from './pages/Interestingly'
import WriteMe from './pages/WriteMe'
import { createContext } from 'react'

export const Context = createContext(null);

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes className="page">
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/my-experience" element={<MyExperience />} />
        <Route path="/check-yourself" element={<CheckYourself />} />
        <Route path="/exam-preparation" element={<ExamPreparation />} />
        <Route path="/interestingly" element={<Interestingly />} />
        <Route path="/write-me" element={<WriteMe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
