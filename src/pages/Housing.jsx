import React from 'react';
import housing_info from '../assets/Housing-images/CUNY-Hunter-College_1-1000x750.jpg';
import housing_stats from "../assets/Housing-images/housing_insecurity.jpg";
import housing_info1 from "../assets/Housing-images/housing_1.jpg";
import housing_info2 from "../assets/Housing-images/housing_2.jpg";
import { useLocation } from 'react-router-dom';


const Housing = () => {
    const location = useLocation();
    const college = location.state?.college.trim() || ""; 
    console.log(college)
    const renderCollegeContent = () => {
        switch (college) {
            case 'The City College Of New York':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Campus Housing Resources</h2>
                                <p>City College of New York offers various housing resources and support through its LGBTQ Student Center.</p>
                                <button className="bg-indigo-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-indigo-800">
                                    <a href='https://www.ccny.cuny.edu/lgbtq-student-center/campus-resources-0?srsltid=AfmBOoork0wQYBZQpAgFVjbtUKRHKXBOY1xMSn8s42To_HCOKwakEW64'>Learn More</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'Brooklyn College':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Brooklyn College Housing Resources</h2>
                                <p>Brooklyn College provides various housing resources and emergency grants for students.</p>
                                <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800">
                                    <a href='https://www.brooklyn.edu/lgi/housing/'>Learn More</a>
                                </button>
                                <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800">
                                    <a href='https://www.brooklyn.edu/student-affairs/student-emergency-grant/'>Emergency Grant</a>
                                </button>
                                <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800">
                                    <a href='https://www.brooklyn.edu/admissions-aid/financial-aid-scholarships/resources/services/appeals-and-special-circumstances/appeal-process/'>Appeal Process</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'Borough of Manhattan Community College':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Housing Options</h2>
                                <p>BMCC offers various housing options and resources for students, including NYC area shelters.</p>
                                <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-800">
                                    <a href='https://www.bmcc.cuny.edu/student-affairs/arc/housing-options/nyc-area-shelters/'>NYC Area Shelters</a>
                                </button>
                                <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-800">
                                    <a href='https://www.bmcc.cuny.edu/student-affairs/arc/housing-options/'>More Housing Options</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'Queens College':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Student Emergency Grant</h2>
                                <p>Queens College offers emergency grants for students facing housing challenges.</p>
                                <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                                    <a href='https://www.qc.cuny.edu/sl/student-emergency-grant/'>Learn More</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'Kingsborough Community College':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Emergency Fund</h2>
                                <p>Kingsborough Community College offers emergency funding for students in need of housing support.</p>
                                <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-800">
                                    <a href='https://www.kbcc.cuny.edu/admission/EmergencyFund.html'>Learn More</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'College of Staten Island':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Emergency Funding</h2>
                                <p>The College of Staten Island provides emergency funding for housing and other needs.</p>
                                <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800">
                                    <a href='https://www.csi.cuny.edu/campus-life/student-services/emergency-funding'>Learn More</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'York College':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Petrie Fund Application</h2>
                                <p>York College offers emergency funding through the Petrie Fund application.</p>
                                <button className="bg-yellow-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-yellow-800">
                                    <a href='https://www.york.cuny.edu/student-development/emergency-funding/petrie-fund-application'>Learn More</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'LaGuardia Community College':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Student Homelessness Solutions</h2>
                                <p>LaGuardia Community College partners with Airbnb to address student homelessness.</p>
                                <button className="bg-teal-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-teal-800">
                                    <a href='https://www.laguardia.edu/news/laguardia-community-college-partners-with-airbnb-to-address-student-homelessness/'>Learn More</a>
                                </button>
                                <button className="bg-teal-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-teal-800">
                                    <a href='https://www.laguardia.edu/cares/'>CARES Program</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'Lehman College':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Community Resources</h2>
                                <p>Lehman College provides community resources to support students with housing and other needs.</p>
                                <button className="bg-green-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-800">
                                    <a href='https://www.lehman.edu/student-affairs/community-engagement/community-resources.php'>Learn More</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'Hunter College':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">HCLPP Resources</h2>
                                <p>Hunter College offers resources through the HCLPP program to support students facing housing issues.</p>
                                <button className="bg-purple-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-purple-800">
                                    <a href='https://www.hunter.cuny.edu/hclpp/resources'>Learn More</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'New York City College of Technology':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Emergency Resource Services</h2>
                                <p>NYC College of Technology provides emergency resource services for housing and other needs.</p>
                                <button className="bg-teal-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-teal-800">
                                    <a href='https://www.citytech.cuny.edu/ssc/Emergency-resource-services.aspx'>Learn More</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'Medgar Evers College':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Student Success</h2>
                                <p>Medgar Evers College provides support through its Student Success program, including housing assistance.</p>
                                <button className="bg-green-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-800">
                                    <a href='https://www.mec.cuny.edu/student-success/transition-academy/'>Learn More</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'John Jay College of Criminal Justice':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Emergency Funding</h2>
                                <p>John Jay College offers emergency funding resources to support students with housing needs.</p>
                                <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                                    <a href='https://www.jjay.cuny.edu/student-life/wellness-center/emergency-funding'>Learn More</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'CUNY School of Labor and Urban Studies':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Emergency Funding</h2>
                                <p>CUNY School of Labor and Urban Studies provides emergency funding to support housing needs.</p>
                                <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-800">
                                    <a href='https://slu.cuny.edu/tuition-and-financial-aid/education-financing/emergency-funding/'>Learn More</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );

                case 'Baruch College':
                    return (
                        <>
                        <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                            <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                <img src={housing_info} alt="Campus Housing Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Emergency Funds</h2>
                                <p>Baruch College provides emergency funds for students facing housing and other challenges.</p>
                                <button className="bg-green-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-800">
                                    <a href='https://studentaffairs.baruch.cuny.edu/dean-of-students/emergencyfunds/'>Learn More</a>
                                </button>
                            </div>
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
                <img src={housing_info} alt="Hunger Students" className="w-full h-auto max-w-[700px] drop-shadow-xl z-0" />
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
