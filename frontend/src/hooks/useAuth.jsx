import { useCallback, useEffect, useState } from "react"
export const useAuth = () => {

    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken);
        setUserId(id);
        localStorage.setItem('Userdata', JSON.stringify({
            userId: id,
            token: jwtToken
        }), []);
    }, [])
    const logout = (jwtToken, id) => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem('Userdata');
    }
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('Userdata'));
        if (data && data.token) {
            login(data.token, data.userId);
        }
        setIsLoading(false);
    }, [login,])
    return [login, logout, token, userId,isLoading ];
}