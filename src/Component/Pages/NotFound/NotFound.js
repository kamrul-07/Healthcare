import React from 'react';
import { Link } from 'react-router-dom';


const Notfound = () => {
    return (
        <div className="container mx-auto flex items-center gap-4 mt-10 mb-10 ">
            <div><img src='https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=829&q=80' alt="" /></div>
            <div className="ml-3">
                <h1 className="text-4xl font-bold ">Page not found</h1>
                <br />
                <Link to="/home"><button className="rounded-full py-3 px-6 bg-yellow-500 font-semibold">Go to Back</button></Link>
            </div>
        </div>
    );
};

export default Notfound;