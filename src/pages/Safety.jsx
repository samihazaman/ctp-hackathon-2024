import React from 'react';
import security_images from '../assets/Security-images/public_safety.jpg';
import public_safety1 from "../assets/Security-images/public_safety1.png";
import public_safety2 from '../assets/Security-images/public_safety2.jpg';
import { useLocation } from 'react-router-dom';

const Safety = () => {
    /*Plan For tomorrow: Finishing up the design and adding final touch to the interactiveness
    and depending on user result prompt the school's info*/

    const location = useLocation();
    const college = location.state?.college.trim() || ""; // Safely r
    console.log(college)
    const renderCollegeContent = () => {
        switch (college) {
            case 'The City College Of New York':
                return (
                    <>
                <div className='grid grid-cols-2 gap-10 m-6 max-md:grid-cols-1'>
                    <div className="grid grid-cols-2 mt-14 gap-10 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                        <div className="col-span-1 mb-6">
                            <img src={security_images} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">CAMPUS FOOD PANTRIES</h2>
                            <p>
                                Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                            </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/cuny-food-pantries'>Learn More</a></button>
                        </div>
                        
                        <div className="col-span-1 mb-6">
                            <img src={security_images} alt="Community Food Resources" className="w-full h-auto mb-8 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">COMMUNITY FOOD RESOURCES</h2>
                            <p className='mb-10'>
                                Connect with organizations in your community that can help you access free groceries or hot meals.
                            </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/community-food-resources'>Learn More</a></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10 mt-14 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                            <div className="col-span-1 mb-6">
                                <img src={security_images} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">SNAP FOR CUNY STUDENTS</h2>
                                <p className='mb-4'>
                                    Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                                </p>
                                <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/snap-help'>Learn More</a></button>
                            </div>

                            <div className="col-span-1 mb-6">
                                <img src={security_images} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
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
                            <img src={security_images} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">CAMPUS FOOD PANTRIES</h2>
                            <p>
                                Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                            </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/cuny-food-pantries'>Learn More</a></button>
                        </div>
                        
                        <div className="col-span-1 mb-6">
                            <img src={security_images} alt="Community Food Resources" className="w-full h-auto mb-8 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">COMMUNITY FOOD RESOURCES</h2>
                            <p className='mb-10'>
                                Connect with organizations in your community that can help you access free groceries or hot meals.
                            </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/community-food-resources'>Learn More</a></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10 mt-14 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                            <div className="col-span-1 mb-6">
                                <img src={security_images} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">SNAP FOR CUNY STUDENTS</h2>
                                <p className='mb-4'>
                                    Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                                </p>
                                <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/snap-help'>Learn More</a></button>
                            </div>

                            <div className="col-span-1 mb-6">
                                <img src={security_images} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
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
    }

    return (
        <div>
            {college ? renderCollegeContent() : renderDefaultContent()}
        </div>
    )
}

export default Safety;
