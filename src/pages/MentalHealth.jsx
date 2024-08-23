import React from 'react';
import mental_health_info from "../assets/Mental-Health-images/MH+infographic.png";
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
            case 'The City College of New York':
            return (
                <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling Services</h2>
                    <p>City College of New York offers counseling services to support mental health and well-being.</p>
                    <button className="bg-indigo-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-indigo-800">
                        <a href='https://www.ccny.cuny.edu/counseling#:~:text=If%20you%20are%20experiencing%20a,(212)%20650%2D8222.'>Learn More</a>
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
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Mental Health Services</h2>
                    <p>Brooklyn College provides comprehensive mental health services to support students.</p>
                    <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800 mr-5">
                        <a href='https://www.brooklyn.edu/dosa/health-and-wellness/personal-counseling/services/mental-health/'>Mental Health Services</a>
                    </button>
                    <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800">
                        <a href='https://www.brooklyn.edu/dosa/health-and-wellness/personal-counseling/'>Personal Counseling</a>
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
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling Services</h2>
                    <p>BMCC offers counseling and resilience services to support student mental health.</p>
                    <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-800">
                        <a href='https://www.bmcc.cuny.edu/student-affairs/counseling/'>Counseling Services</a>
                    </button>
                    <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-800">
                        <a href='https://www.bmcc.cuny.edu/resilience-health-and-wellness/'>Resilience & Wellness</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'Queens College, City University of New York':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling Services</h2>
                    <p>Queens College offers various counseling services for student mental health support.</p>
                    <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                        <a href='https://www.qc.cuny.edu/cs/'>Learn More</a>
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
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling Center</h2>
                    <p>Kingsborough Community College provides access to its Counseling Center for mental health support.</p>
                    <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-800">
                        <a href='https://www.kbcc.cuny.edu/sws/counseling-center.html'>Learn More</a>
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
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling Center</h2>
                    <p>The College of Staten Island offers a Counseling Center to support student mental health.</p>
                    <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800">
                        <a href='https://www.csi.cuny.edu/students/counseling-center'>Learn More</a>
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
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling Center</h2>
                    <p>York College provides mental health support through its Counseling Center.</p>
                    <button className="bg-yellow-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-yellow-800">
                        <a href='https://www.york.cuny.edu/counseling-center'>Learn More</a>
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
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">The Wellness Center</h2>
                    <p>LaGuardia Community College offers mental health support through The Wellness Center.</p>
                    <button className="bg-teal-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-teal-800">
                        <a href='https://www.laguardia.edu/students/the-wellness-center/'>Learn More</a>
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
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling Services</h2>
                    <p>Baruch College provides counseling services to support student mental health.</p>
                    <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                        <a href='https://studentaffairs.baruch.cuny.edu/counseling/'>Learn More</a>
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
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling Center</h2>
                    <p>Lehman College offers a Counseling Center to support mental health and wellness.</p>
                    <button className="bg-orange-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-orange-800">
                        <a href='https://www.lehman.edu/counseling-center/'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'CUNY School of Law':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling and Mental Health Services</h2>
                    <p>CUNY School of Law provides mental health services to support students.</p>
                    <button className="bg-purple-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-purple-800">
                        <a href='https://www.law.cuny.edu/students/health-wellness/counseling-and-mental-health-services/'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'CUNY Graduate School of Mental Health and Safety':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Mental Health Resources</h2>
                    <p>CUNY Graduate School of Mental Health and Safety offers resources for mental health support.</p>
                    <button className="bg-pink-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-pink-800">
                        <a href='https://cimh.sph.cuny.edu/'>Learn More</a>
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
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling & Wellness Services</h2>
                    <p>Hunter College provides counseling and wellness services to support mental health.</p>
                    <button className="bg-teal-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-teal-800">
                        <a href='https://hunter.cuny.edu/students/health-wellness/counseling-and-wellness-services/counseling-services/'>Learn More</a>
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
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling Services</h2>
                    <p>NYC College of Technology offers counseling services to support student mental health.</p>
                    <button className="bg-yellow-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-yellow-800">
                        <a href='https://www.citytech.cuny.edu/counseling/'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'CUNY School of Professional Studies':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Student Counseling Services</h2>
                    <p>CUNY SPS provides student counseling services for mental health support.</p>
                    <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                        <a href='https://sps.cuny.edu/student-services/student-counseling-services'>Learn More</a>
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
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling Services Center</h2>
                    <p>John Jay College provides counseling services to support mental health.</p>
                    <button className="bg-green-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-800">
                        <a href='https://www.jjay.cuny.edu/student-life/wellness-center/counseling-services-center'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'CUNY Graduate Center':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Student Counseling Services</h2>
                    <p>CUNY Graduate Center offers counseling services for student mental health support.</p>
                    <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-800">
                        <a href='https://www.gc.cuny.edu/student-counseling-services'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'CUNY School of Medicine':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling and Wellness Office</h2>
                    <p>CUNY School of Medicine provides support through its Counseling and Wellness Office.</p>
                    <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800">
                        <a href='https://medicine.cuny.edu/counseling-and-wellness-office/'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'Hostos Community College':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Counseling Services</h2>
                    <p>Hostos Community College offers counseling services for mental health support.</p>
                    <button className="bg-orange-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-orange-800">
                        <a href='https://www.hostos.cuny.edu/Administrative-Offices/SDEM/Counselling-Services'>Learn More</a>
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
                    <img src={mentalhealth_1} alt="Mental Health Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Transition Academy</h2>
                    <p>Medgar Evers College supports mental health through its Transition Academy.</p>
                    <button className="bg-teal-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-teal-800">
                        <a href='https://www.mec.cuny.edu/student-success/transition-academy/'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

                default:
                    return null; // No content for unrecognized schools
            }   
    };
    const renderDefaultContent = () => (
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
                    src={mental_health_info} 
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
    )

    return(
        <div>
            {college ? renderCollegeContent() : renderDefaultContent()}
        </div>
    )
}

export default MentalHealth;
