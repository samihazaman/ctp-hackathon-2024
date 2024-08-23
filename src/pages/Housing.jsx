import React from 'react';
import housing_image from '../assets/Housing-images/CUNY-Hunter-College_1-1000x750.jpg';
import housing_stats from "../assets/Housing-images/housing_insecurity.jpg";
import housing_info1 from "../assets/Housing-images/housing_1.jpg";
import housing_info2 from "../assets/Housing-images/housing_2.jpg";
import { useLocation } from 'react-router-dom';


const Housing = () => {
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
                            <img src={housing_image} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">CAMPUS FOOD PANTRIES</h2>
                            <p>
                                Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                            </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/cuny-food-pantries'>Learn More</a></button>
                        </div>
                        
                        <div className="col-span-1 mb-6">
                            <img src={housing_info1} alt="Community Food Resources" className="w-full h-auto mb-8 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">COMMUNITY FOOD RESOURCES</h2>
                            <p className='mb-10'>
                                Connect with organizations in your community that can help you access free groceries or hot meals.
                            </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/community-food-resources'>Learn More</a></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10 mt-14 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                            <div className="col-span-1 mb-6">
                                <img src={housing_info1} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">SNAP FOR CUNY STUDENTS</h2>
                                <p className='mb-4'>
                                    Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                                </p>
                                <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/snap-help'>Learn More</a></button>
                            </div>

                            <div className="col-span-1 mb-6">
                                <img src={housing_stats} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
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
                            <img src={housing_image} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">CAMPUS FOOD PANTRIES</h2>
                            <p>
                                Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                            </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/cuny-food-pantries'>Learn More</a></button>
                        </div>
                        
                        <div className="col-span-1 mb-6">
                            <img src={housing_image} alt="Community Food Resources" className="w-full h-auto mb-8 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">COMMUNITY FOOD RESOURCES</h2>
                            <p className='mb-10'>
                                Connect with organizations in your community that can help you access free groceries or hot meals.
                            </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/community-food-resources'>Learn More</a></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10 mt-14 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                            <div className="col-span-1 mb-6">
                                <img src={housing_info1} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">SNAP FOR CUNY STUDENTS</h2>
                                <p className='mb-4'>
                                    Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                                </p>
                                <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/snap-help'>Learn More</a></button>
                            </div>

                            <div className="col-span-1 mb-6">
                                <img src={housing_image} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
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
    /*Plan For tomorrow adding in interactiveness and depending on the user's prompted answer 
    decide what kind of information needs to be printed*/
    const renderDefaultContent = () => (
        <div className="grid grid-cols-1 gap-10 items-center justify-center px-4 pl-20 py-10 md:grid-cols-1 md:px-20 md:py-10 mr-5">
            <div className='flex md:flex-col items-center md:gap-10'>
                <div className='flex flex-col justify-center items-center'>
                        <h1 className="font-bold text-xl mb-4 italic">
                            HOUSING INSECURITY AND HOMELESSNESS  
                        </h1>

                        <p className='text-base max-w-[800px] items-center pb-4 m-4'>
                            Many CUNY students experience housing insecurity and homelessness. 
                            This can have a dramatic effect on academic performance and the ability to complete a degree on time. 


                        </p>
                </div>

            <div className="flex justify-center items-center flex-shrink-0 pr-10">
                <img 
                    src={housing_stats} 
                    alt="Food Insecurity Stats" 
                    className='w-full max-w-[800px] h-auto  drop-shadow-xl z-0' 
                />
            </div>  

            </div>
            {/*Text Area */}
            <div className="flex flex-col max-w-[800px] mx-auto justify-center items-center">
                <h1 className="font-bold mb-4 items-center pt-5 ">
                    Resources with CUNY
                </h1>
                <p className='text-base max-w-[800px] items-center pb-4 m-4'>
                Food insecurity is defined as having limited access to adequate food due to a lack of money or other resources. 
                Several recent studies suggest that both two-year and four-year college students are more likely to be food insecure than the general U.S. population, 
                with college prevalence ranging from 14% to 59%. Food insecure students were more likely to have lower GPAs than their food secure peers.e and nutritious food.
                </p>
            </div>

            <div className='flex justify-center items-center'>
                <img src={housing_image} alt="Hunger Students" className="w-full h-auto max-w-[700px] drop-shadow-xl z-0" />
            </div>
            
            <div className="grid grid-cols-2 mt-14 gap-10 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                <div className="col-span-1 mb-6">
                    <img src={housing_info1} alt="Housing Information" className="w-full h-auto mb-16 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">INFO FOR HOUSING</h2>
                    <p>
                        More info on housing resources and support for students in need.
                    </p>
                    <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.coalitionforthehomeless.org/resource-guide/'>Learn More</a></button>
                </div>
                
                <div className="col-span-1 mb-6">
                    <img src={housing_info2} alt="Housing" className="w-full h-auto mb-12 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">CAMPUS SPONSORED HOUSING</h2>
                    <p>
                        The following link will provide you with information on the sponsored housing by CUNY.
                    </p>
                    <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.cuny.edu/current-students/student-affairs/student-life/housing-residence-life/#campussponsored'>Learn More</a></button>
                </div>

            </div>
    </div>
    )

    return(
        <div>
            {college ? renderCollegeContent() : renderDefaultContent()}
        </div>
    )
}

export default Housing;
