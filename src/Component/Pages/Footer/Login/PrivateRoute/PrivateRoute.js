import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoding} =useAuth();
    if(isLoding){
        return<button type="button" class="bg-rose-600 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
        Processing
      </button>
    }
    console.log(user)
    return (
        <Route
            {...rest}
            render={({location }) => user.email ? children : <Redirect 
              to ={{
                  pathname:'/login',
                  state:{from:location}
              }}
            ></Redirect>
            }
            >
        </Route>
    );
};

export default PrivateRoute;