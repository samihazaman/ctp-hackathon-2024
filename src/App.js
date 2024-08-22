import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Food from './pages/Food';
import Housing from './pages/Housing';
import MentalHealth from './pages/MentalHealth';
import Safety from './pages/Safety';
import Quiz from './pages/Quiz';
import QuizView from './pages/QuizView'
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quizview" element={<QuizView />} />
        </Routes>
      </div>

      <div>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
