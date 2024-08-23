import React from 'react';
import health_stats from "../assets/Mental-Health-images/MH+infographic.png";
import mentalhealth_1 from "../assets/Mental-Health-images/mental_health1.jpg";
import mentalhealth_2 from "../assets/Mental-Health-images/mental_health2.jpg";
import mentalhealth_3 from "../assets/Mental-Health-images/mental_health3.png";
import { useLocation } from 'react-router-dom';

const MentalHealth = () => {

    /*Plan For tomorrow adding in interactiveness and depending on the user's prompted answer 
    decide what kind of information needs to be printed*/

    const location = useLocation();
    const college = location.state?.college.trim() || ""; // Safely r
    const renderCollegeContent = () => {
        switch (college) {
            case 'The City College Of New York':
                return (
                    <>
                <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                    <div className="grid grid-cols-2 mt-14 gap-10 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                        <div className="col-span-1 mb-6">
                            <img src={health_stats} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">CAMPUS FOOD PANTRIES</h2>
                            <p>
                                Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                            </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/cuny-food-pantries'>Learn More</a></button>
                        </div>
                        
                        <div className="col-span-1 mb-6">
                            <img src={health_stats} alt="Community Food Resources" className="w-full h-auto mb-8 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">COMMUNITY FOOD RESOURCES</h2>
                            <p className='mb-10'>
                                Connect with organizations in your community that can help you access free groceries or hot meals.
                            </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/community-food-resources'>Learn More</a></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10 mt-14 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                            <div className="col-span-1 mb-6">
                                <img src={health_stats} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">SNAP FOR CUNY STUDENTS</h2>
                                <p className='mb-4'>
                                    Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                                </p>
                                <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/snap-help'>Learn More</a></button>
                            </div>

                            <div className="col-span-1 mb-6">
                                <img src={health_stats} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Articles regarding Food Insecurities</h2>
                                <p className='mb-8'>
                                A Report by Healthy CUNY and CUNY Graduate School of Public Health and Health Policy                    </p>
                                <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://sph.cuny.edu/wp-content/uploads/2019/03/Report_02_Food-Insecurity_Final.pdf'>Learn More</a></button>
                            </div>
                    </div>
                </div>
                    </>
                );
            case 'Brooklyn College':
                return (
                    <>
                <div className='grid grid-cols-2 gap-10 m-6'>
                    <div className="grid grid-cols-2 mt-14 gap-10 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                        <div className="col-span-1 mb-6">
                            <img src={health_stats} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">CAMPUS FOOD PANTRIES</h2>
                            <p>
                                Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                            </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/cuny-food-pantries'>Learn More</a></button>
                        </div>
                        
                        <div className="col-span-1 mb-6">
                            <img src={health_stats} alt="Community Food Resources" className="w-full h-auto mb-8 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">COMMUNITY FOOD RESOURCES</h2>
                            <p className='mb-10'>
                                Connect with organizations in your community that can help you access free groceries or hot meals.
                            </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/community-food-resources'>Learn More</a></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10 mt-14 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                            <div className="col-span-1 mb-6">
                                <img src={health_stats} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">SNAP FOR CUNY STUDENTS</h2>
                                <p className='mb-4'>
                                    Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                                </p>
                                <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/snap-help'>Learn More</a></button>
                            </div>

                            <div className="col-span-1 mb-6">
                                <img src={health_stats} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Articles regarding Food Insecurities</h2>
                                <p className='mb-8'>
                                A Report by Healthy CUNY and CUNY Graduate School of Public Health and Health Policy                    </p>
                                <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://sph.cuny.edu/wp-content/uploads/2019/03/Report_02_Food-Insecurity_Final.pdf'>Learn More</a></button>
                            </div>
                    </div>
                </div>
                    </>
                );
                case 'College of Staten Island':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for College of Staten Island */}
                            </div>
                        </>
                    );
                case 'York College':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for York College */}
                            </div>
                        </>
                    );
                case 'Lehman College, CUNY':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for Lehman College, CUNY */}
                            </div>
                        </>
                    );
                case 'LaGuardia Community College':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for LaGuardia Community College */}
                            </div>
                        </>
                    );
                case 'CUNY School of Law':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for CUNY School of Law */}
                            </div>
                        </>
                    );
                case 'CUNY Graduate School of Public Health & Health Policy':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for CUNY Graduate School of Public Health & Health Policy */}
                            </div>
                        </>
                    );
                case 'Hunter College':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for Hunter College */}
                            </div>
                        </>
                    );
                case 'New York City College of Technology':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for New York City College of Technology */}
                            </div>
                        </>
                    );
                case 'CUNY School of Professional Studies | CUNY SPS':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for CUNY School of Professional Studies | CUNY SPS */}
                            </div>
                        </>
                    );
                case 'Medgar Evers College, CUNY':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for Medgar Evers College, CUNY */}
                            </div>
                        </>
                    );
                case 'John Jay College of Criminal Justice':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for John Jay College of Criminal Justice */}
                            </div>
                        </>
                    );
                case 'CUNY Graduate Center':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for CUNY Graduate Center */}
                            </div>
                        </>
                    );
                case 'CUNY School of Labor and Urban Studies':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for CUNY School of Labor and Urban Studies */}
                            </div>
                        </>
                    );
                case 'CUNY School of Medicine':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for CUNY School of Medicine */}
                            </div>
                        </>
                    );
                case 'Queens College, City University of New York':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for Queens College, City University of New York */}
                            </div>
                        </>
                    );
                case 'Baruch College':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for Baruch College */}
                            </div>
                        </>
                    );
                case 'Kingsborough Community College':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for Kingsborough Community College */}
                            </div>
                        </>
                    );
                case 'Borough of Manhattan Community College':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for Borough of Manhattan Community College */}
                            </div>
                        </>
                    );
                case 'Hostos Community College':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for Hostos Community College */}
                            </div>
                        </>
                    );
                case 'Macaulay Honors College':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for Macaulay Honors College */}
                            </div>
                        </>
                    );
                case 'Craig Newmark Graduate School of Journalism at CUNY':
                    return (
                        <>
                            <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                                {/* Content for Craig Newmark Graduate School of Journalism at CUNY */}
                            </div>
                        </>
                    );
                default:
                    return null; // No content for unrecognized schools
            }   
    };
    const renderDefaultContent = () => {
        <div className="grid grid-cols-1 gap-10 pl-20 py-10 md:grid-cols-2 mr-10">

            <div className='flex justify-center items-center'>
                <img src={mentalhealth_3} alt="Hunger Students" className="w-full h-auto max-w-[600px]  drop-shadow-xl z-0" />
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
    }

    return(
        <div>
            {college ? renderCollegeContent() : renderDefaultContent()}
        </div>
    )
}

export default MentalHealth;
