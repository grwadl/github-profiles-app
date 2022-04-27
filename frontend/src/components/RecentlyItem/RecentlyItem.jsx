import React, { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import cl from './RecentlyItem.module.scss';
const RecentlyItem = ({ search }) => {
    const navigate = useNavigate();
    const { setRedirectedValue } = useContext(AuthContext);
    const redirectTo = (search) => {
        setRedirectedValue(search.owner);
        return navigate('/');
    }
    const newDate = useMemo(() => {
        const s = Date.parse(search.date);
        const hours = new Date(s).toLocaleTimeString("en-US");
        const day = new Date(s).toLocaleDateString("en-US").substring(-1,4);
        return day + ' ' + hours;
    },[search.date])
    return (
        <div className={cl.recentlyItem} onClick={e=>redirectTo(search)}>
            <div className={cl.name}>{search.owner}</div>
            <div className={cl.date}>{newDate}</div>
        </div>
    );
};

export default RecentlyItem;