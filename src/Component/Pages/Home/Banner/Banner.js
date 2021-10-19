import React from 'react';
import photo from "../Banner/images/doctor-visiting-senior-patient-modern-hospital-space-text-banner-design-doctor-visiting-senior-patient-modern-hospital-183780691.jpg"

const Banner = () => {
    return (
        <div className="relative opacity-50">
            <img src={photo} alt="" />
           
            <div className="absolute inset-0 top-16">
                <h1 className="md:text-8xl sm:text-5xl text-red-900 mb-2">Care for Every Situation</h1>
                <div className="break-all"> 
                <p className="font-semibold">We provide medical assistance to people affected by conflict, epidemics, disasters, or exclusion from healthcare. independence and neutrality.</p>
                <p className="font-semibold">Our teams are made up of tens of thousands of health professionals, logistic and administrative staff - most of them hired locally. Our actions are guided by </p>
                </div>
                
                <button className="rounded-full py-3 px-6 bg-yellow-500 mt-2">CONTACT US</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Banner;