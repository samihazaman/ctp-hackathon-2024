import React from 'react';
import housing_image from '../assets/Housing-images/CUNY-Hunter-College_1-1000x750.jpg';
import housing_stats from "../assets/Housing-images/housing_insecurity.jpg";


const Housing = () => {
    return (
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
            <img src={housing_image} alt="Hunger Students" className="w-full h-auto max-w-[700px]  drop-shadow-xl z-0" />
        </div>
        
    </div>
    );
}

export default Housing;
