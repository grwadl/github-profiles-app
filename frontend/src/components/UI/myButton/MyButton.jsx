import React from 'react';
import cl from './MyButton.module.scss'
const MyButton = ({ disabled, ...props }) => {
    return (
        <button disabled={disabled}{...props} className={cl.MyButton}>
            
        </button>
    );
};

export default MyButton;