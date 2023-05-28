import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Redirect, useHistory  } from 'react-router-dom';
import swal from 'sweetalert';
import MasterLayout from './layout/admin/MasterLayout';

function AdminPrivateRoute({...rest}){
    const history = useHistory();


    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setloading] = useState(true);


    useEffect(()=>{
        axios.get(`/api/checkingAuthenticated`).then( res=> {
            if(res.status === 200){
                setAuthenticated(true);
            }
            setloading(false);
        })
        return () => {
            setAuthenticated(false);
        };
    }, []);
    axios.interceptors.response.use(undefined, function axiosRetryInterceptors(err){
        if(err.response.status === 401){
            swal("Unauthorized",err.response.data.message,"warning");
            history.push('/');
        }
        return Promise.reject(err);
    });
    axios.interceptors.response.use(function(response){
        return response;
    }, function(error){
        if(error.response.status === 403)/* Access Denied*/{
            swal("Forbidden",error.response.data.message,"warning");
            history.push('/403');

        }else if(error.response.status === 404)/* Page Not Found */{
            swal("404 Error","Page Not Found","waning");
            history.push('/404');
        }
        return Promise.reject(error);
    }
    );
    
    if(loading){
        return(
            <div className="d-flex justify-content-center" style={{margin:"200px"}}>
                    
            <div className="spinner-grow" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
            )
        }

return(
    <Route {...rest}
    render={ ({props, location})=>
    Authenticated ?
    (<MasterLayout {...props} />):
    (<Redirect to={{ pathname: "/login", state: {from: location} }}/>)
    }    
    />
);

}
export default AdminPrivateRoute; 


