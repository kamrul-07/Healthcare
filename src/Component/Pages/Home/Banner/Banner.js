import React from 'react';
import photo from "../Banner/images/doctor-patient-happy-190813.jpg"

const Banner = () => {
    return (
        <div className="relative  sm:mx-auto sm:w-full max-w-full">
            <img className="sm:h-auto opacity-75 " src={photo} alt="" />
           
            <div className="absolute inset-0 top-16 sm:justify-center">
                <h1 className="md:text-6xl text-3xl text-red-900 mb-2 mt-0">Care for Every Situation</h1>
                <div className="break-all"> 
                <p className="md:font-semibold font-thin">We provide medical assistance to people affected by conflict, epidemics, disasters, or exclusion from healthcare. independence and neutrality.</p>
                <p className="font-thin">Our teams are made up of tens of thousands of health professionals, logistic and administrative staff - most of them hired locally. </p>
                </div>
                
                <button className="rounded-full  py-2 px-3 md:py-3 px-6 bg-yellow-500 mt-2 font-thin md:font-semibold">CONTACT US</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Banner;