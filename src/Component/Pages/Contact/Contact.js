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
            </div>

            <div>
            <div className=" bg-white   mt-3  min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-16 lg:px-10 ">
                    <h1 className="text-red-900 text-4xl">Send Message</h1>
                    <p className="write text-3xl">Drop a Line</p>
                   
                    


             <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
              <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form className="mb-0 space-y-6" action="#" method="POST">
         
          <div>
            <label for="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="mt-1">
            <input id="name" name="name" type="name" autocomplete="name"     required className="bg-gray-200 rounded-full py-2 px-3 " />
          </div>
        </div>

        <div>
          <label for="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <div className="mt-1">
            <input   id="email" name="email" type="email" autocomplete="current-password" required className="bg-gray-200 rounded-full py-2 px-3" />
          </div>
          <label for="comment" className="block text-sm font-medium text-gray-700">Write down your commment</label>
         
          <textarea  name="comment" type="comment" className="bg-gray-200 rounded py-6 px-4"></textarea><br />
          <button className="rounded-full py-3 px-6 mt-4 bg-yellow-500 font-semibold text-red-900">Send <i className="fas fa-paper-plane"></i></button>
        </div>

        
        

        
      </form>
    </div>
  </div>
                   
                    
                </div>

            </div>
        </div>
    );
};

export default Contact;