import React from 'react';
import food_images from '../assets/Food-images/hunger-students-copy.jpg';
import food_stats from "../assets/Food-images/food-stats.jpg";
import food_info from "../assets/Food-images/food+pantry.jpg";
import food_info2 from "../assets/Food-images/unsplash-image-v8IbdsPXo7U.jpg";
import food_info3 from "../assets/Food-images/FSA+logo2.jpg";
import food_info4 from "../assets/Food-images/Young-person-delivering-groceries-to-elderly-couple-during-pandemic-e1604705184908.jpg"


const Food = () => {
    return (
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
                    <button className="bg-teal-500 text-white py-2 px-4 mt-4"><a href='https://www.healthycuny.org/cuny-food-pantries'>Learn More</a></button>
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
}

export default Food;
