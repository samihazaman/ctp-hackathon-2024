import React from 'react';
import security_images from '../assets/Security-images/public_safety.jpg';
import public_safety1 from "../assets/Security-images/public_safety1.png";
import public_safety2 from '../assets/Security-images/public_safety2.jpg';

const Safety = () => {
    /*Plan For tomorrow: Finishing up the design and adding final touch to the interactiveness
    and depending on user result prompt the school's info*/
    return (
        <div className="grid gap-10 pl-20 py-10 grid-cols-2 mr-10 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                <div className='col-span-2 max-md:grid-cols-1 max-md:col-span-1'>
                    <img src={security_images} alt="Hunger Students" className=" drop-shadow-xl z-0 w-full h-auto max-w-[1600px]" />
                </div>
                {/*Text Area */}
                <div className="col-span-2 max-md:grid-cols-1 max-md:col-span-1 mt-6 flex flex-col items-center">
                    <h1 className="font-bold mb-4 text-center">
                        CUNY Public Safety
                    </h1>
                    <p className='text-base max-w-3xl text-center'>
                    CUNY (City University of New York) public safety focuses on maintaining a safe and 
                    secure environment for students, faculty, and staff across its various campuses. 
                    Here are some key aspects of CUNY's public safety efforts:
                    </p>
                </div>

            <div className="grid grid-cols-2 gap-10 mt-14 max-md:grid-cols-1 ">
                <div className="col-span-2 mb-6">
                    <img src={public_safety1} alt="Campus Food Pantries" className="w-full h-96 mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">PERSONAL SAFETY INFORMATION</h2>
                    <p className='mb-4'>
                        Trainings are meant to help students, faculty, and staff learn how to respond to emergencies and stay safe on campus.
                    </p>
                    <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.cuny.edu/about/administration/offices/publicsafety/personal-safety-information/'>Learn More</a></button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10 mt-14 max-md:grid-cols-1">
                <div className="col-span-2 mb-6">
                        <img src={public_safety2} alt="Campus Food Pantries" className="w-full h-96 mb-4 drop-shadow-xl z-0" />
                        <h2 className="font-bold mb-2">CUNY ALERT</h2>
                        <p className='mb-8'>
                            CUNY Alert allows you to receive text, email and/or voice alerts of emergencies or weather related closings on your campus. You can choose your campus or office locations, phone numbers for voice and text messages, and/or email addresses for emergency notifications delivered directly to you.
                        </p>
                        <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.cuny.edu/cuny-alert/#1539372868246-dd7b86d0-0143'>Learn More</a></button>
                    </div>
            </div>
    </div>
    );
}

export default Safety;
