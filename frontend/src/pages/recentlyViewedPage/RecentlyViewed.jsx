import React, { useState } from 'react';
import CleanPage from '../../components/CleanPage/CleanPage';
import RecentlyItem from '../../components/RecentlyItem/RecentlyItem';
import Loading from '../../components/UI/animations/Loading';
import { useRecentlyViewed } from '../../hooks/useRecentlyViewed';
import cl from './RecentlyViewed.module.scss'
const RecentlyViewed = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    useRecentlyViewed(setRecentlyViewed, setIsLoading);
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className={cl.recentlyPage}>
            <div className={cl.recentlyWrapper}>
                <div className={cl.title}>Recently viewed</div>
                {recentlyViewed.length > 0 ?
                    recentlyViewed.map(item => <RecentlyItem key={item._id} search={item}></RecentlyItem>)
                    : <CleanPage />
                }
            </div>
        </div>
    );
};

export default RecentlyViewed;