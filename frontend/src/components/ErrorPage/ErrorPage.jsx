import React from 'react';
import cl from './ErrorPage.module.scss';
import imgError from './error.svg'
const ErrorPage = () => {
    return (
        <div><img src={imgError} className={cl.errorImage} alt="" />User is not found</div>
    );
};

export default ErrorPage;