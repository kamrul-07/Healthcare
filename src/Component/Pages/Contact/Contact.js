import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="bg-red-50 rounded p-10">
            <div >
                <h1 className="text-red-900 text-5xl font-bold">Contact Us</h1>
                <p className="write text-3xl mt-2">Stay In Touch</p>
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-3 container mx-auto   mt-44 mb-10  ">
                <div className=" p-6 border-r-4 border-gray-500 ">
                <span className="bg-white p-4 text-3xl rounded-full text-red-900 "><i className="fas fa-map-marker-alt"></i></span>
                <h1 className="text-4xl mt-5">Address:</h1>
                <p className="text-gray-500 font-semibold mt-2">71 Pilgrim Avenue</p>
                <p className="text-gray-500 font-semibold mt-2">Chevy Chase,MD 20815</p>

                </div>
                <div className=" p-6 border-r-4 border-gray-500 ">
                <span className="bg-white p-4 text-3xl rounded-full "><i className="far fa-comments text-red-900"></i></span>
                <h1 className="text-4xl mt-5">Email:</h1>
                <p className="text-gray-500 font-semibold mt-2">Email:kamrul.i.akib@gmail.com</p>
               

                </div>
                <div className=" p-6  ">
                <span className="bg-white p-4 text-3xl rounded-full "><i className="fas fa-tty text-red-900"></i></span>
                <h1 className="text-4xl mt-5">Phone:</h1>
                <p className="text-gray-500 font-semibold mt-2">+20155 55 23</p>
                

                </div>


                <div className="container bg-white p-10  mt-3">
                    <h1 className="text-red-900 text-4xl">Send Message</h1>
                    <p className="write text-3xl">Drop a Line</p>
                    <div className="block">
                    <input className="bg-gray-200 rounded-full py-3 px-6 mt-2 italic" type="text" placeholder="Enter your name" />
                   
                   <input className="bg-gray-200 rounded-full py-3 px-6 mt-2 italic" type="text" placeholder="Enter your email " />
                   
                   <input className="bg-gray-200 p-20 mt-2 h-5 italic font-semibold" type="text" placeholder="Enter your message" />
                    </div>
                    <button className="rounded-full py-3 px-6 mt-4 bg-yellow-500 font-semibold text-red-900">Send <i className="fas fa-paper-plane"></i></button>
                   
                    
                </div>

            </div>
        </div>
    );
};

export default Contact;