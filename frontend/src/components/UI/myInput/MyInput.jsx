import React, { useContext } from 'react';
import cl from './myInput.module.scss';
import './ind.scss'
import AuthContext from '../../../context/AuthContext';
const MyInput = ({ label, type, classnameinput, ...props }) => {
    const { theme } = useContext(AuthContext);
    return (
        <div className={cl.myInputWrapper}>
            <input {...props} type={type} className={theme==='dark'?cl.myInput + ' ' + classnameinput+ ' '+cl.myDarkInput:cl.myInput + ' ' + classnameinput+ ' '+cl.myLightInput} />
            <label htmlFor={cl.MyInput} className={theme==='dark'?cl.myLabel + ' ' +cl.myDarkLabel:cl.myLabel + ' ' +cl.myLightLabel}>{label}</label>
        </div>
    );
};

export default MyInput;