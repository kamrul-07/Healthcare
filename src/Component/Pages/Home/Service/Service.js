import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {id,img,name,description}=props.service;
    return (
        <div className="border-gray-200 bg-red-100 p-3 mb-6 transition duration-500 ease-in-out  hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 shadow-2xl">
            <div >
             <img src={img} alt="" />
             <h1 className="text-4xl mt-3 font-bold">{name}</h1>
             <p className="font-semibold italic mt-5">{description}</p>
           <Link to={`/detailes/${name}`}>
           <button className="rounded-full bg-yellow-500 py-3 px-6 font-semibold">Detailes</button>
            
           </Link>
           </div>
        </div>
    );
};

export default Service;