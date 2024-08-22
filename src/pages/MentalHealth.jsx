import React from 'react';
import health_image from '../assets/Mental-Health-images/CUNY-wellness-center4.jpg';
import health_stats from "../assets/Mental-Health-images/MH+infographic.png";


const MentalHealth = () => {
    return (
        <div className="grid grid-cols-1 gap-10 pl-20 py-10 md:grid-cols-2 mr-10">


            <div className='flex justify-center items-center'>
                <img src={health_image} alt="Hunger Students" className="w-full h-auto max-w-[600px]  drop-shadow-xl z-0" />
            </div>

             {/*Text Area */}
             <div className="flex flex-col justify-center">
                <h1 className="font-bold mb-4">
                    CUNY Mental Health Counseling
                </h1>
                <p className='text-base mr-10 text-gray-800'>
                CUNY campus counseling centers aim to help students succeed academically by offering high-quality counseling and mental health services. They also provide guidance to faculty and staff and connect students with community resources when needed. Counselors assist students with issues like depression, anxiety, relationships, and time management, which can affect academic performance and overall well-being. The centers work closely with the campus community to foster an environment that supports students' mental health. Healthy CUNY supports efforts to hire more counselors to better meet student needs.
                </p>
            </div>

            <div className='flex md:flex-row items-center md:gap-10'>
                <div className='flex flex-col'>
                        <p className="font-bold text-xl mb-4">
                        Healthy CUNY is committed to reducing untreated mental health issues among CUNY students to enhance their well-being, 
                        retention, and success. 
                        </p>
                </div>
            </div>


            
            <div className="flex justify-center items-center pr-10">
                <img 
                    src={health_stats} 
                    alt="Food Insecurity Stats" 
                    className='w-full max-w-[600px] h-auto drop-shadow-xl z-0' 
                />
            </div>  

            
        </div>
    );
}

export default MentalHealth;
