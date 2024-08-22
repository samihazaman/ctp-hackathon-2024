import React from 'react';
import images from '../assets/Food-images/hunger-students-copy.jpg';
import stats from "../assets/Food-images/food-stats.jpg";

const Food = () => {
    return (
        <div className="grid grid-cols-1 gap-10 pl-20 py-10 md:grid-cols-2 mr-10">
                <div className='flex justify-center items-center'>
                    <img src={images} alt="Hunger Students" className="w-full h-auto max-w-[600px]" />
                </div>

                {/*Text Areaa */}
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
                        src={stats} 
                        alt="Food Insecurity Stats" 
                        className='w-full max-w-[800px] h-auto' 
                    />
                </div>
        </div>
    );
}

export default Food;
