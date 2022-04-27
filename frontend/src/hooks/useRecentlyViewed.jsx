import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

export const useRecentlyViewed = (setRecentlyViewed,setIsLoading) => {
    const { userId } = useContext(AuthContext);
    const getRecentlyViewed = async (userId) => {
        setIsLoading(true);
        await axios.get('http://localhost:4000/api/recent/gain', {params:{ userId }})
            .then(res => setRecentlyViewed(res.data));
        setIsLoading(false);
    }
    useEffect(() => {
        getRecentlyViewed(userId);
    }, []);
}