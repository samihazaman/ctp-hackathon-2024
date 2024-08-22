import React from 'react';
import health_image from '../assets/Mental-Health-images/CUNY-wellness-center4.jpg';
import health_stats from "../assets/Mental-Health-images/MH+infographic.png";


const MentalHealth = () => {
    return (
        <div className="grid grid-cols-1 gap-10 pl-20 py-10 md:grid-cols-2 mr-10">


            <div className='flex justify-center items-center'>
                <img src={health_image} alt="Hunger Students" className="w-full h-auto max-w-[600px]" />
            </div>

            <div className="flex justify-center items-center flex-shrink-0 pr-10">
                <img 
                    src={health_stats} 
                    alt="Food Insecurity Stats" 
                    className='w-full max-w-[600px] h-auto' 
                />
            </div>  

            {/*Text Area */}
            <div className="flex flex-col justify-center">
                <h1 className="font-bold mb-4">
                    CUNY Mental Health Counseling
                </h1>
                <p className='text-base mr-10'>
                CUNY campus counseling centers seek to support the academic mission of the university and 
                the academic success of students by providing high quality counseling and mental health services to students and 
                consultative services to faculty and staff. They also refer students to appropriate community services.
                Counselors assist students in addressing psychological and adjustment issues (i.e., depression, anxiety, and relationships) 
                and problems or issues including stress/time management that can negatively influence academic performance, 
                student retention, graduation rates, and quality of life. The Centers work collaboratively with students, faculty, 
                and staff to create and maintain a campus environment that encourages and supports psychological well-being. 
                Healthy CUNY supports CUNY's efforts to hire more professional staff for mental health counseling centers in order to better meet student needs.

                </p>
            </div>

           


            <div className='flex md:flex-row items-center md:gap-10'>
                <div className='flex flex-col'>
                        <p className="font-bold text-xl mb-4">
                        Healthy CUNY aims to decrease rates of untreated mental health problems among CUNY students, thereby improving student quality of life and retention and success.  
                        We have partnered with NYC DOHMH and others to create a multi-level response to mental health. 
                        Our student advocates work in partnership with the mental health counseling staff and receive training to develop evidence-based messages 
                        that promote mental health awareness and reduce stigma for seeking treatment.
                        </p>
                </div>
            </div>


            
        </div>
    );
}

export default MentalHealth;
