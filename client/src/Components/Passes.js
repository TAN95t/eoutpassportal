import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Passes = () => {
    let navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('authtoken')){
            console.log("authtoken",JSON.authtoken)
        }
        else{
            navigate("/login")
        }
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Passes
