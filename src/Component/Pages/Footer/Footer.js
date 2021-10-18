import React from 'react';

const Footer = () => {
    return (
        <div className="md:flex sm:block bg-blue-200 p-20">
            <div className="flex-1 ml-16">
            <div className="flex">
            <i className="fab fa-instagram m-2 rounded-full h-10 w-10 flex items-center justify-center bg-gray-100 p-2 text-2xl" ></i> 
            <i className="fab fa-twitter m-2  rounded bg-gray-100 p-2 text-2xl rounded-full h-10 w-10 flex items-center justify-center"></i>
            <i className="fab fa-facebook-f m-2 rounded-full h-10 w-10 flex items-center justify-center  bg-gray-100 p-2 text-2xl"></i>
            <i className="fab fa-linkedin-in m-2 rounded-full h-10 w-10 flex items-center justify-center  bg-gray-100 p-2 text-2xl"></i>

            </div>
            </div>
            <div>
            <div className="flex-1">
          <h1 className="text-black-400 text-5xl mx-3"><i className="fas fa-star-of-david"></i></h1>
          <div className='block'>
          <span className="text-black-500 text-4xl font-mono  ">PathWell</span>
          <p className="text-current text-white">Senior Care Center</p>
          </div>
          </div>
            </div>
            <div className="flex-1 italic font-semibold ">
                <h3 className="mt-5 ">Axiomthemes © 2021.
                All Rights Reserved.</h3>
            </div>
        </div>
    );
};

export default Footer;