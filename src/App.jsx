import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import MyExperience from './components/MyExperience'
import CheckYourself from './components/CheckYourself'
import ExamPreparation from './components/ExamPreparation'
import Interestingly from './components/Interestingly'
import WriteMe from './components/WriteMe'

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
