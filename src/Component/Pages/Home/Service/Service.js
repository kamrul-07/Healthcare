import React from 'react';

const Service = ({service}) => {
    const {img,name,description}=service;
    return (
        <div className="border-gray-200 bg-red-100 p-3 mb-6">
            <div >
             <img src={img} alt="" />
             <h1 className="text-4xl mt-3 font-bold">{name}</h1>
             <p className="font-semibold italic mt-5">{description}</p>
            <button className="rounded-full bg-yellow-500 py-3 px-6 font-semibold">Detailes</button>
            </div>
        </div>
    );
};

export default Service;