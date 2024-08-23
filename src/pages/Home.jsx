import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom';
import foodInsecurityImage from '../assets/Card-images/food-insecurity.jpg';
import housingImage from '../assets/Card-images/cuny-housing.jpg'
import mentalHealthImage from '../assets/Card-images/mental-health-graphic.jpg'
import safetyImage from '../assets/Card-images/public-safety.jpg'

const Home = () => {
    return (
        <div>
        <section className="hero-section">
            <div className="hero-overlay">
                <h1 className="header">CUNY Students Matter</h1>
                <p className="subtitle">Did you know that CUNY provides resources to help students with basic needs such as 
                    food, housing, mental health and many more?</p>
            </div>
        </section>

        <section className="content-section">
            <p>
                At CUNY, we recognize that meeting students' basic needs is crucial for academic success and overall well-being. 
                Essential needs include support for mental health, access to nutritious food, stable housing, and safety. When these 
                needs are not met, students face significant challenges that can hinder their ability to focus on their studies and thrive.
            </p>
            <br></br>
            <p>
                Our goal is to bridge the gap between students and the resources available to address these critical needs. 
                We provide a comprehensive guide to the services CUNY offers, ensuring you have easy access to the support you need. 
                Additionally, our interactive quiz is designed to help you quickly find the resources that are right for you based 
                on your specific needs and college. We’re here to help you navigate these essential services and empower you to succeed.
            </p>
        </section>

        <section className="spotlight-section">
                <h2><b>Spotlight on CUNY’s Essential Needs</b></h2>
                <div className="card">
                    <img src={foodInsecurityImage} alt="Food Insecurity" />
                    <div className="card-content">
                        <h3><b>Food Insecurity</b></h3>
                        <p>Food insecurity is a serious issue that can negatively impact health, well-being, and academic performance.
                        If you are facing food insecurity please know that help is available.
                        </p>
                        <Link to="/food" className="learn-more-btn">Learn more</Link>
                    </div>
                </div>

                <div className="card">
                    <img src= {housingImage} alt="Housing" />
                    <div className="card-content">
                        <h3><b>Housing</b></h3>
                        <p>Facing homelessness can be overwhelming, but you don't have to navigate it alone. 
                            CUNY resource center offer a safe space to connect with individuals who can guide 
                            you to the resources you need.</p>
                        <Link to="/housing" className="learn-more-btn">Learn more</Link>
                    </div>
                </div>

                <div className="card">
                    <img src={mentalHealthImage} alt="Mental Health" />
                    <div className="card-content">
                        <h3><b>Mental Health</b></h3>
                        <p>Taking care of mental health is essential and CUNY is here to help you in your journey.
                        For your needs, we have made available various counseling services that CUNY colleges provide.
                        </p>
                        <Link to="/mental-health" className="learn-more-btn">Learn more</Link>
                    </div>
                </div>

                <div className="card">
                    <img src= {safetyImage} alt="Safety" />
                    <div className="card-content">
                        <h3><b>Safety</b></h3>
                        <p>Safety is essential for everyone including college students to foster a safe environment.
                        To address safety concerns various resources and helplines are available.
                        </p>
                        <Link to="/safety" className="learn-more-btn">Learn more</Link>
                    </div>
                </div>
            </section>

            <section className="quiz-section">
                <h3 className="quiz-title">
                      Take our interactive quiz specifically catered to your college campus to help match you to the right resource:
               </h3>
                <Link to="/quiz" className="start-quiz-btn">Get Started</Link>
            </section>


    </div>


    );
}

export default Home;
