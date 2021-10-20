import React from 'react';
import './About .css'

const About = () => {
    return (
        <div className="mt-5">
           <h1 className="text-4xl font-sans text-red-900 font-semibold">Progressive Care Centers are the</h1> 
           <h1 className="text-4xl font-sans text-red-900 font-semibold"> Right Choice</h1>
           <br />

           <p className="italic text-purple-300  text-4xl write ">Why choose us  <i className="fab fa-canadian-maple-leaf "></i></p>
           



          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 container mx-auto  mt-10 mb-10 ">
          <div className=" p-10 relative shadow-2xl" >
              
              <span className="rounded-full h-10 w-10 flex  items-center  justify-center  bg-yellow-300 text-2xl p-8 mb-5 absolute left-32 -top-7  ">1</span>
              
               <h1 className="font-bold text-4xl">Get Back to Your Life</h1>
               <p className="text-xl text-gray-400 ">Our in-house rehabilitation services use the latest advances in technology to ensure our residents receive the highest level of service available.</p>
           </div>
          <div className=" bg-gray-200 p-10 relative" >
              
              <h1 className="rounded-full h-10 w-10 flex  items-center justify-center  bg-yellow-300 p-2 text-2xl p-8 mb-5 absolute left-32 -top-7">2</h1>
              
               <h1 className="font-bold text-4xl">G24/7 Availability</h1>
               <p className="text-xl text-gray-400 ">Whether it be about therapy options, nursing solutions, the admissions process, or insurance questions, we are available to answer any questions you may have regarding skilled nursing facilities.</p>
           </div>
          <div className=" p-10 relative shadow-2xl">
              
              <h1 className="rounded-full h-10 w-10 flex  items-center justify-center  bg-yellow-300 p-2 text-2xl p-8 mb-5 absolute left-32 -top-7">3</h1>
              
               <h1 className="font-bold text-4xl">Excellent Quality of Life</h1>
               <p className="text-xl text-gray-400 ">We have an array of social, recreational and religious activities within our bright and cheery surroundings that allow residents to enjoy their stay.</p>
           </div>
          </div>


          <div>
              <h1 className="text-4xl mb-2 font-bold text-red-900">Our Values</h1>
              <p className="write text-3xl">Company Profile</p>
              <br /><br />
              <div className="break-all font-semibold italic text-gray-500">
              <p >We are committed to the residents and communities we serve to promote better and healthier lives. </p>
              <p>We strive to be an industry leader with uncompromising standards measured by defined clinical outcomes, customer service programs and financial sustainability.</p>
              </div>
              <div>
                  <div className="grid gap-10 grid-cols-1 md:grid-cols-4 container mx-auto  mt-44 mb-10">
                      <div className="relative p-10">
                          <p className="rounded-full h-10 w-10 flex  items-center justify-center  bg-yellow-300  text-2xl p-8 mb-5 absolute left-24 -top-20"><i className="fas fa-envelope-open-text"></i></p>
                          <h1 className="font-bold text-4xl">Integrity</h1>

                          <p className="text-xl text-gray-500">We have an array of social, recreational and religious activities within our bright and cheery surroundings that allow residents to enjoy their stay.</p>
                      </div>
                      <div className="relative p-10">
                          <span className="rounded-full h-10 w-10 flex  items-center justify-center  bg-yellow-300 p-2 text-2xl p-8 mb-5 absolute left-24 -top-20"><i className="fas fa-clinic-medical"></i></span>
                          <h1 className="font-bold text-4xl">Growth</h1>

                          <p className="text-xl text-gray-500">We are committed to the residents and communities we serve to promote better and healthier lives</p>
                      </div>
                      <div className="relative p-10">
                          <span className="rounded-full h-10 w-10 flex  items-center justify-center  bg-yellow-300 p-2 text-2xl p-8 mb-5 absolute left-24 -top-20"><i className="fas fa-fist-raised"></i></span>
                          <h1 className="font-bold text-4xl">Respect</h1>

                          <p className="text-xl text-gray-500">We have an array of social, recreational and religious activities within our bright and cheery surroundings that allow residents to enjoy their stay.</p>
                      </div>
                      <div className="relative p-10">
                          <span className="rounded-full h-10 w-10 flex  items-center justify-center  bg-yellow-300 p-2 text-2xl p-8 mb-5 absolute left-24 -top-20"><i className="fas fa-carrot"></i></span>
                          <h1 className="font-bold text-4xl">Excellence</h1>

                          <p className="text-xl text-gray-500 mt-3">We have an array of social, recreational and religious activities within our bright and cheery surroundings that allow residents to enjoy their stay.</p>
                      </div>
                  </div>

              </div>
          </div>
        </div>
    );
};

export default About;