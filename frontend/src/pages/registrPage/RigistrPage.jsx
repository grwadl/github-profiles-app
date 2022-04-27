import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import MyButton from '../../components/UI/myButton/MyButton';
import MyInput from '../../components/UI/myInput/MyInput';
import cl from './RegistrPage.module.scss';
import { useDisabledButton } from '../../hooks/useDisabledButton';
import { setRegistr } from '../../API/MyApi';
import { useValidation } from '../../hooks/useValidation';
const RigistrPage = () => {
    const history = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: '',
        repeatpassword: ''
    });
    const [formDirty, setFormDirty] = useState({
        email: null,
        password: null,
        repeatpassword:null
    });
    const [formError, setFormError] = useState({
        email: 'Unvalid email',
        password: 'Password should be longer than 6',
        repeatpassword: 'Passwords are not the same',
        unvalidData: ''
    });
    const [disabledButton, setDisabledButton] = useState(false);
    useDisabledButton(formDirty, formError, form, setDisabledButton);
    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const [validateMail, validatePassword, blurHandler,validateRepeatedPassword] = useValidation(changeHandler, setFormError, formError, setFormDirty, formDirty,form);
    return (
        <div className={cl.regWrapper}>
            <div className={cl.regContainer}>
                <div className={cl.inputWrapper}>
                    <div className={cl.title}>Sign Up</div>
                    <MyInput classnameinput={(formDirty.email && formError.email) ? 'errorInput' : ''} onBlur={e => blurHandler(e)} name='email' label='email' placeholder='email' onChange={e => validateMail(e)} />
                    {(formDirty.email && formError.email) && <div className={cl.error}>{formError.email}</div>}
                </div>
                <div className={cl.inputWrapper}>
                    <MyInput classnameinput={(formDirty.password && formError.password) ? 'errorInput' : ''} onBlur={e => blurHandler(e)} name='password' label='password' type='password' placeholder='password' onChange={e => validatePassword(e)} />
                    {(formDirty.password && formError.password) && <div className={cl.error}>{formError.password}</div>}
                </div>
                <div className={cl.inputWrapper}>
                    <MyInput classnameinput={(formDirty.repeatpassword && formError.repeatpassword) ? 'errorInput' : ''} onBlur={e => blurHandler(e)} type='password' name='repeatpassword' label='repeat password' placeholder='repeat password' onChange={e => validateRepeatedPassword(e)} />
                    {(formDirty.repeatpassword && formError.repeatpassword) && <div className={cl.error}>{formError.repeatpassword}</div>}
                </div>
                <MyButton disabled={disabledButton} onClick={()=>setRegistr(form,history,setFormError,formError)}>REGISTRATE</MyButton>
                <Link to='/auth'>Already have an account?</Link>
                {formError.unvalidData &&
                    <div className={cl.errorBlock}>{formError.unvalidData}</div>
                }
            </div>
        </div>
    );
};

export default RigistrPage;