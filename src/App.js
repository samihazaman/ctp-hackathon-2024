import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Food from './pages/Food';
import Housing from './pages/Housing';
import MentalHealth from './pages/MentalHealth';
import Safety from './pages/Safety';
import Quiz from './pages/Quiz';
import QuizView from './pages/QuizView';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import './index.css';


function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <PageTransition location={location}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quizview" element={<QuizView />} />
        </Routes>
      </PageTransition>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
