import React from 'react';
import bennys from '../assets/CCNY_images/rightimage_2.png';
import food_images from '../assets/Food-images/hunger-students-copy.jpg';
import food_stats from "../assets/Food-images/food-stats.jpg";
import food_info from "../assets/Food-images/food+pantry.jpg";
import food_info2 from "../assets/Food-images/unsplash-image-v8IbdsPXo7U.jpg";
import food_info3 from "../assets/Food-images/FSA+logo2.jpg";
import food_info4 from "../assets/Food-images/Young-person-delivering-groceries-to-elderly-couple-during-pandemic-e1604705184908.jpg"
import { useLocation } from 'react-router-dom';

const Food = () => {
  /*Plan For tomorrow adding in interactiveness and depending on the user's prompted answer 
    decide what kind of information needs to be printed*/
    const location = useLocation();
    const college = location.state?.college.trim() || ""; 
    const renderCollegeContent = () => {
        switch (college) {
            case 'The City College Of New York':
                return (
                    <>
                    <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                        <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                            <img src={bennys} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">Benny's Food Pantry</h2>
                            <p>Welcome to Benny's Food Pantry and The Urban Gardens at The City College of New York</p>
                            <button className="bg-purple-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-purple-800">
                                <a href='https://www.ccny.cuny.edu/bennysfoodpantry?srsltid=AfmBOoo1nkpDfacK-mzlOd0oxukzuXE_FLcZgZELe7y1hyx-0NVzoUFW'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">Brooklyn Food Pantry</h2>
                            <p>The Brooklyn College Food Pantry is a free resource for all Brooklyn College students.</p>
                            <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800">
                                <a href='https://www.brooklyn.edu/dosa/student-support-services/food-pantry/'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">CSI Food Pantry</h2>
                            <p>The College of Staten Island offers food resources for students in need.</p>
                            <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                                <a href='https://www.csi.cuny.edu/students/food-pantry'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">York College Food Pantry</h2>
                            <p>York College provides food resources for students in need.</p>
                            <button className="bg-yellow-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-yellow-800">
                                <a href='https://www.york.cuny.edu/student-development/the-food-pantry-is-open--ready-to-serve-you'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">Lehman Food Bank</h2>
                            <p>Lehman College offers food resources through its food bank for students in need.</p>
                            <button className="bg-green-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-800">
                                <a href='https://www.lehman.edu/student-affairs/basic-needs-center/lehman-food-bank.php'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">LaGuardia CARES</h2>
                            <p>LaGuardia Community College offers food resources for students through its CARES initiative.</p>
                            <button className="bg-orange-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-orange-800">
                                <a href='https://www.laguardia.edu/cares/'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">CUNY School of Law Food Resources</h2>
                            <p>The CUNY School of Law offers food resources and support for students.</p>
                            <button className="bg-teal-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-teal-800">
                                <a href='https://www.law.cuny.edu/students/health-wellness/'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">Hunter College Food Pantry</h2>
                            <p>Hunter College provides food resources for students in need.</p>
                            <button className="bg-green-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-800">
                                <a href='https://hunter.cuny.edu/students/health-wellness/emergency-support-resources/'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">City Tech Food Pantry</h2>
                            <p>City Tech offers food resources for students through its food pantry.</p>
                            <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                                <a href='https://www.citytech.cuny.edu/student-life/food-pantry.aspx'>Learn More</a>
                            </button>
                        </div>
                    </div>
                    </>
                );
            
            case 'CUNY School of Professional Studies | CUNY SPS':
                return (
                    <>
                    <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                        <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">CUNY SPS Food Resources</h2>
                            <p>CUNY School of Professional Studies offers food resources for students.</p>
                            <button className="bg-indigo-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-indigo-800">
                                <a href='https://www.sps.cuny.edu/'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">Bearcat Food Pantry</h2>
                            <p>Baruch College offers food resources through its Bearcat Food Pantry.</p>
                            <button className="bg-teal-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-teal-800">
                                <a href='https://studentaffairs.baruch.cuny.edu/dean-of-students/bearcat-food-pantry/'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">Panther Pantry</h2>
                            <p>The Borough of Manhattan Community College offers food resources through its Panther Pantry.</p>
                            <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-800">
                                <a href='https://www.bmcc.cuny.edu/student-affairs/arc/panther-pantry/'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">Guttman Food Resources</h2>
                            <p>Guttman Community College offers food resources through its Connect Center.</p>
                            <button className="bg-purple-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-purple-800">
                                <a href='https://archive.guttman.cuny.edu/students/connect-center/food-resources/'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">John Jay Food Pantry</h2>
                            <p>John Jay College provides food resources for students through its wellness center.</p>
                            <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800">
                                <a href='https://www.jjay.cuny.edu/student-life/wellness-center/food-pantry'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">Knight's Table</h2>
                            <p>Queens College offers food resources through Knight's Table.</p>
                            <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                                <a href='https://qcknightstable.org/'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">Food Pantry</h2>
                            <p>Queensborough Community College offers food resources through its food pantry.</p>
                            <button className="bg-orange-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-orange-800">
                                <a href='https://www.qcc.cuny.edu/foodPantry/index.html'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">Access Resource Center</h2>
                            <p>Bronx Community College offers food resources through its Access Resource Center.</p>
                            <button className="bg-red-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-800">
                                <a href='https://www.bcc.cuny.edu/campus-resources/access-resource-center/food-pantry/'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">One Stop Resource Center</h2>
                            <p>Hostos Community College provides food resources through its One Stop Resource Center.</p>
                            <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                                <a href='https://www.hostos.cuny.edu/Programs/One-Stop-Resource-Center/Hostos-Supplemental-Resources'>Learn More</a>
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
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">Additional Resources Center</h2>
                            <p>Kingsborough Community College offers food resources through its Additional Resources Center.</p>
                            <button className="bg-gray-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-800">
                                <a href='https://www.kbcc.cuny.edu/arc/additional.html'>Learn More</a>
                            </button>
                        </div>
                    </div>
                    </>
                );
            
            case 'Medgar Evers College, CUNY':
                return (
                    <>
                    <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                        <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                            <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">Student Success</h2>
                            <p>Medgar Evers College offers food resources through its Student Success program.</p>
                            <button className="bg-green-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-800">
                                <a href='https://www.mec.cuny.edu/student-success/transition-academy/'>Learn More</a>
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
                                <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Food Security Resources</h2>
                                <p>
                                    The CUNY Graduate Center offers food resources and support for students.
                                </p>
                                <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                                    <a href='https://www.healthycuny.org/food-security-resources'>Learn More</a>
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
                                <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                <h2 className="font-bold mb-2">Food Security Resources</h2>
                                <p>The CUNY Graduate Center offers food resources and support for students.
</p>
                                <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                                    <a href='https://www.healthycuny.org/food-security-resources'>Learn More</a>
                                </button>
                            </div>
                        </div>
                        </>
                    );
        
                    case 'Macaulay Honors College':
                        return (
                            <>
                            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                    <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                    <h2 className="font-bold mb-2">Food Security Resources</h2>
                                    <p>The CUNY Graduate Center offers food resources and support for students.
</p>
                                    <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                                        <a href='https://www.healthycuny.org/food-security-resources'>Learn More</a>
                                    </button>
                                </div>
                            </div>
                            </>
                        );
                    
                    case 'Craig Newmark Graduate School of Journalism at CUNY ':
                        return (
                        <>
                            <div className="grid mt-14 gap-10 grid-cols-3 max-md:items-center max-md:justify-center">
                                <div className="col-start-2 col-span-1 mb-6 items-center text-center">
                                    <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                    <h2 className="font-bold mb-2">Food Security Resources</h2>
                                    <p>The CUNY Graduate Center offers food resources and support for students.</p>
                                    <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                                        <a href='https://www.healthycuny.org/food-security-resources'>Learn More</a>
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
                                    <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                    <h2 className="font-bold mb-2">Food Security Resources</h2>
                                    <p>The CUNY Graduate Center offers food resources and support for students.</p>
                                    <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                                        <a href='https://www.healthycuny.org/food-security-resources'>Learn More</a>
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
                                    <img src={food_info2} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                                    <h2 className="font-bold mb-2">Food Security Resources</h2>
                                    <p>The CUNY Graduate Center offers food resources and support for students.</p>
                                    <button className="bg-blue-700 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-800">
                                        <a href='https://www.healthycuny.org/food-security-resources'>Learn More</a>
                                    </button>
                                </div>
                            </div>
                            </>
                        );
                
                default:
                    return null
            }
            
    };

    const renderDefaultContent = () => (
            <div className="grid gap-10 pl-20 py-10 grid-cols-2 mr-10 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                    <div className='flex justify-center items-center'>
                        <img src={food_images} alt="Hunger Students" className=" drop-shadow-xl z-0 w-full h-auto max-w-[600px]" />
                    </div>
                
                    {/*Text Area */}
                    <div className="flex flex-col justify-center">
                        <h1 className="font-bold mb-4">
                            What are Food Insecurity?
                        </h1>
                        <p className='text-base mr-10'>
                        Food insecurity is defined as having limited access to adequate food due to a lack of money or other resources. 
                        Several recent studies suggest that both two-year and four-year college students are more likely to be food insecure than the general U.S. population, 
                        with college prevalence ranging from 14% to 59%. Food insecure students were more likely to have lower GPAs than their food secure peers.e and nutritious food.
                        </p>
                </div>

                <div className='flex md:flex-row items-center md:gap-10'>
                    <div className='flex flex-col'>
                            <h1 className="font-bold text-xl mb-4 italic">
                            In the 2022 CUNY Student Experience Survey, 
                            40% of students reported having low or very low food security—an estimated 110,000 students. 
                            </h1>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-shrink-0 pr-10">
                        <img 
                            src={food_stats} 
                            alt="Food Insecurity Stats" 
                            className='w-full max-w-[800px] h-auto drop-shadow-xl z-0' 
                        />
                    </div>

                <div className="grid grid-cols-2 mt-14 gap-10 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                    <div className="col-span-1 mb-6">
                        <img src={food_info} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                        <h2 className="font-bold mb-2">CAMPUS FOOD PANTRIES</h2>
                        <p>
                            Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                        </p>
                        <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/cuny-food-pantries'>Learn More</a></button>
                    </div>
                    
                    <div className="col-span-1 mb-6">
                        <img src={food_info2} alt="Community Food Resources" className="w-full h-auto mb-8 drop-shadow-xl z-0" />
                        <h2 className="font-bold mb-2">COMMUNITY FOOD RESOURCES</h2>
                        <p className='mb-10'>
                            Connect with organizations in your community that can help you access free groceries or hot meals.
                        </p>
                        <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/community-food-resources'>Learn More</a></button>
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-10 mt-14 max-md:grid-cols-1 max-md:items-center max-md:justify-center">
                        <div className="col-span-1 mb-6">
                            <img src={food_info3} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">SNAP FOR CUNY STUDENTS</h2>
                            <p className='mb-4'>
                                Many CUNY campuses have food pantries where students can get free fresh foods. Some even provide packaged or prepared food. Stop by your campus food pantry to see what services are available for those in need.
                            </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/snap-help'>Learn More</a></button>
                        </div>

                        <div className="col-span-1 mb-6">
                            <img src={food_info4} alt="Campus Food Pantries" className="w-full h-auto mb-4 drop-shadow-xl z-0" />
                            <h2 className="font-bold mb-2">Articles regarding Food Insecurities</h2>
                            <p className='mb-8'>
                            A Report by Healthy CUNY and CUNY Graduate School of Public Health and Health Policy                    </p>
                            <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://sph.cuny.edu/wp-content/uploads/2019/03/Report_02_Food-Insecurity_Final.pdf'>Learn More</a></button>
                        </div>
                    </div>

                </div>
        );

        return (
            <div>

                {college ? renderCollegeContent() : renderDefaultContent()}

            </div>
        )
    
}

export default Food;
