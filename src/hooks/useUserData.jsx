import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";

const useUserData = () => {
    const{ user, loading} = useAuth();
    [useUserData, setUserData] = useState({});

    useEffect(()=>{
        const fetchUserData = async ()=>{
            try{
                await axios
            }catch(err){
                console.log(err);
            }
        }
    },[user, loading])

    return (
        <div>
            
        </div>
    );
};

export default useUserData;