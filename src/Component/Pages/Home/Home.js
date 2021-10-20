import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import './Home.css'
import { Link } from 'react-router-dom';

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
            <h1 className="text-4xl italic text-red-900 mt-20 mb-20 ">Service <i className="fab fa-pagelines"></i></h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 container mx-auto  mt-2">
               
                {
                    service.map (serve => <Service key={serve.id}
                    service={serve}></Service>)
                }
            </div>

            <div className="bg-white">
  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Meet Our Team </h2>
    <h1 className="write text-2xl">Who we are  </h1>

    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="https://img.lovepik.com/photo/50138/3065.jpg_wh300.jpg" alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
          
        </div>
        <h1 className="text-red-900">Sandra Bells</h1>
          <h1 className="write">Caregiver</h1>
      </div>
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="https://wallpapercave.com/wp/wp2655110.jpg" alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
          
        </div>
        <h1 className="text-red-900">Rose Mason</h1>
          <h1 className="write">Physician</h1>
        
      </div>
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="https://media.istockphoto.com/photos/physician-picture-id497142181?k=20&m=497142181&s=612x612&w=0&h=tanEtUfMGVEVG4jPCY7cBGIwJ1PNO25AFkBpAxSBBn0=" alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
         
        </div>
        <h1 className="text-red-900">Lilian Terry</h1>
          <h1 className="write">Manager</h1>
        
      </div>
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="https://st4.depositphotos.com/12985790/21800/i/600/depositphotos_218007348-stock-photo-happy-male-doctor-stethoscope-neck.jpg" alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
         
        </div>
        <h1 className="text-red-900">Esme Walsh</h1>
          <h1 className="write">Ceo</h1>
        
      </div>

     
    </div>
  </div>
  <Link to ={"/teams"}>
    <button className="rounded-full py-3 px-6 bg-yellow-500 mb-3 hover:bg-red-400">All Team Members</button>
  </Link>
</div>
 <div>
   <h1 className="text-red-900 text-3xl mt-3">Best Caregiver Services</h1>
   <h1 className="write text-2xl">Why choose us</h1>
  <div className="container gap-5  mt-3 grid  grid-cols-1 md:grid-cols-2
  container mx-auto mb-5">

    <div className="ml-2 ">
      <img src="https://thumbs.dreamstime.com/b/old-man-visit-doctor-patient-care-sick-men-67273865.jpg" alt="" />
    </div>


    <div className="grid gap-4 grid-rows-1 md:grid-rows-3 container mx-auto    ">
    <div>
     
     <div className="bg-gray-200 p-2">
     <div className="justify-center ">  <h1 className='text-2xl text-gray-500 mb-2 border-b-2 border-gray-300'>1</h1></div>
       <h1 className="text-red-900 font-semibold">Meeting Your Emotional Needs</h1>
       <p className="break-all text-gray-400">An elderly person needs to feel safe, remain close to other people and believe that life continues.</p>
     </div>
   </div>
   <div>
     
     <div className="bg-gray-200 p-2">
     <div className="justify-center ">  <h1 className='text-2xl text-gray-500 mb-2 border-b-2 border-gray-300'>2</h1></div>
       <h1 className="text-red-900 font-semibold">Enjoy Independent Living</h1>
       <p className="break-all text-gray-400">We offer skilled nursing services at all of our locations with professionally trained nursing staff</p>
     </div>
   </div>
   <div >
     
     <div className="bg-gray-200 p-2">
     <div className="justify-center ">  <h1 className='text-2xl text-gray-500 mb-2 border-b-2 border-gray-300'>3</h1></div>
       <h1 className="text-red-900 font-semibold">Meeting Your Physical Needs</h1>
       <p className="break-all text-gray-400">AGives seniors the confidence to remain independent in a professionally managed environment.</p>
     </div>
   </div>
    </div>



  </div>
 </div>
            
        </div>
    );
};

export default Home;