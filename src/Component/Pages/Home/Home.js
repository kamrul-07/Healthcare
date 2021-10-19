import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';

const Home = () => {
    const [service,setService]=useState([]);
    useEffect(()=>{
        fetch('./service.JSON')
        .then (res =>res.json())
        .then (data => setService(data))
    },[])

    return (
        <div>
            <Banner></Banner>
            <h1 className="text-4xl italic text-red-900 mt-2 ">Service <i class="fab fa-pagelines"></i></h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 container mx-auto  mt-2">
               
                {
                    service.map (serve => <Service key={serve.id}
                    service={serve}></Service>)
                }
            </div>
            
        </div>
    );
};

export default Home;