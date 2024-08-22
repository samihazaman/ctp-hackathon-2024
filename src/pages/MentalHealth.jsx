import React from 'react';
import health_image from '../assets/Mental-Health-images/CUNY-wellness-center4.jpg';
import health_stats from "../assets/Mental-Health-images/MH+infographic.png";
import mentalhealth_1 from "../assets/Mental-Health-images/mental_health1.jpg";
import mentalhealth_2 from "../assets/Mental-Health-images/mental_health2.jpg";



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


            <div className="grid grid-cols-1 mt-14 gap-10 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                <div className="col-span-1 mb-6">
                    <img src={mentalhealth_1} alt="Housing Information" className="w-full h-auto mb-16 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">FIND OUT MORE BELOW</h2>
                    <p>
                        This link will provide you with all the help CUNY has to offer for mental health counseling.
                    </p>
                    <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.cuny.edu/current-students/student-affairs/student-services/counseling/'>Learn More</a></button>
                </div>
            </div>

            <div className="grid grid-cols-1 mt-14 gap-10 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                <div className="col-span-1 mb-6">
                    <img src={mentalhealth_2} alt="Housing" className="w-full h-auto mb-16 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">CUNY CENTER FOR INNOVATION IN MENTAL HEALTH</h2>
                    <p>
                        The CUNY Center for Innovation in Mental Health is a university-wide initiative that aims to improve mental health services for CUNY students.
                    </p>
                    <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://cimh.sph.cuny.edu/'>Learn More</a></button>
                </div>
                </div>
               
            
        </div>
    );
}

export default MentalHealth;
