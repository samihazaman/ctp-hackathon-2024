import React from 'react';
import security_images from '../assets/Security-images/public_safety.jpg';
import security_info from "../assets/Security-images/public_safety1.png";
import public_safety2 from '../assets/Security-images/public_safety2.jpg';
import { useLocation } from 'react-router-dom';

const Safety = () => {
    /*Plan For tomorrow: Finishing up the design and adding final touch to the interactiveness
    and depending on user result prompt the school's info*/

    const location = useLocation();
    const college = location.state?.college.trim() || ""; 
    console.log(college)
    const renderCollegeContent = () => {
        switch (college) {
            case 'Queens College, City University of New York':
            return (
                <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>Queens College provides resources for campus safety and security.</p>
                    <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                        <a href='https://www.qc.cuny.edu/ps/'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>Baruch College's Public Safety department ensures campus security.</p>
                    <button className="bg-green-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-800">
                        <a href='https://adminfinance.baruch.cuny.edu/public-safety/'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'Lehman College, CUNY':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>Lehman College offers resources for campus security and safety.</p>
                    <button className="bg-orange-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-orange-800">
                        <a href='https://www.lehman.edu/provost/public-safety.php'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'City Tech':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>City Tech provides resources and information on campus safety.</p>
                    <button className="bg-yellow-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-yellow-800">
                        <a href='https://www.citytech.cuny.edu/public-safety/'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>BMCC offers public safety resources and information.</p>
                    <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800">
                        <a href='https://www.bmcc.cuny.edu/public-safety/'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Campus Safety</h2>
                    <p>Brooklyn College provides safety and security resources for students.</p>
                    <button className="bg-purple-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-purple-800">
                        <a href='https://www.brooklyn.edu/safety/?utm_source=Website&utm_medium=CampusSafety&utm_campaign=CampusSafetyServicesRedirect#'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'Bronx Community College':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>Bronx Community College offers campus safety resources.</p>
                    <button className="bg-teal-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-teal-800">
                        <a href='http://www.bcc.cuny.edu/campus-resources/public-safety/'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>College of Staten Island provides information on campus safety and security.</p>
                    <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-800">
                        <a href='https://www.csi.cuny.edu/campus-life/safety-security/office-public-safety'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'Craig Newmark Graduate School of Journalism':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety Department</h2>
                    <p>Craig Newmark Graduate School of Journalism offers public safety resources.</p>
                    <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                        <a href='https://www.journalism.cuny.edu/public-safety-department/'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety and Security</h2>
                    <p>CUNY Graduate Center provides resources for campus safety and security.</p>
                    <button className="bg-purple-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-purple-800">
                        <a href='https://www.gc.cuny.edu/public-safety-and-security'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'CUNY Graduate School of Public Health & Health Policy':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>CUNY Graduate School of Public Health & Health Policy offers public safety resources.</p>
                    <button className="bg-green-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-800">
                        <a href='https://sph.cuny.edu/life-at-sph/public-safety/'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'CUNY School of Labor & Urban Studies':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>CUNY School of Labor & Urban Studies provides information on campus safety.</p>
                    <button className="bg-teal-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-teal-800">
                        <a href='https://slu.cuny.edu/welcome/office-of-administration-operations/public-safety/'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety & Security Department</h2>
                    <p>CUNY School of Law offers resources for campus security and safety.</p>
                    <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                        <a href='https://www.law.cuny.edu/public-safety-security-department/'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>CUNY School of Professional Studies provides information on campus safety.</p>
                    <button className="bg-purple-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-purple-800">
                        <a href='https://sps.cuny.edu/about/directory/office-public-safety'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'Guttman Community College':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Campus Safety</h2>
                    <p>Guttman Community College offers resources for campus safety.</p>
                    <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-800">
                        <a href='https://guttman.cuny.edu/about/campus-safety/'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety Department</h2>
                    <p>Hostos Community College provides campus safety resources.</p>
                    <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                        <a href='https://www.hostos.cuny.edu/Administrative-Offices/Public-Safety-Department'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>Hunter College offers resources for campus safety and security.</p>
                    <button className="bg-green-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-800">
                        <a href='https://hunter.cuny.edu/public-safety/'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>John Jay College of Criminal Justice provides campus safety resources.</p>
                    <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800">
                        <a href='https://www.jjay.cuny.edu/about/governance-senior-leadership/finance-administration/department-public-safety'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Campus Security</h2>
                    <p>Kingsborough Community College provides information on campus security.</p>
                    <button className="bg-teal-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-teal-800">
                        <a href='https://www.kbcc.cuny.edu/campus_security/Homepage.html'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>LaGuardia Community College offers campus safety resources.</p>
                    <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                        <a href='https://www.laguardia.edu/about/public-safety/'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>Medgar Evers College provides resources for campus safety and security.</p>
                    <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-800">
                        <a href='https://www.mec.cuny.edu/public-safety/'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );

    case 'Queensborough Community College':
        return (
            <>
            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>Queensborough Community College offers information on campus safety and security.</p>
                    <button className="bg-green-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-800">
                        <a href='https://www.qcc.cuny.edu/publicSafety/index.html'>Learn More</a>
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
                    <img src={security_info} alt="Security Resources" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                    <h2 className="font-bold mb-2">Public Safety</h2>
                    <p>York College provides campus safety and security resources.</p>
                    <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800">
                        <a href='https://www.york.cuny.edu/administrative/public-safety'>Learn More</a>
                    </button>
                </div>
            </div>
            </>
        );
                default:
                    return null; 
            }   
    };
    const renderDefaultContent = () => (
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
                    <img src={security_info} alt="Campus Food Pantries" className="w-full h-96 mb-4 drop-shadow-xl z-0" />
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
    )

    return (
        <div>
            {college ? renderCollegeContent() : renderDefaultContent()}
        </div>
    )
}

export default Safety;
