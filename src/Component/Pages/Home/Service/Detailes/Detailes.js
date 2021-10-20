import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Detailes = () => {
    const { id }= useParams();
    

    

  
   
    return (
        <div >
          
             <h1 className="text-red-800 mt-10 mb-10">{id}</h1>
           
        </div>
    );
};

export default Detailes;
