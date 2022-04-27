import React from 'react';
import cl from './cleanPage.module.scss';
import imgClear from './notsearched.svg'
const CleanPage = () => {
    return (
        <div className={cl.searchClear}><img className={cl.imgClear} src={imgClear} alt='' />Seems like you haven't searched anything yet</div>
    );
};

export default CleanPage;