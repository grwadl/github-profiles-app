import React, { useContext, useState } from 'react';
import MyButton from '../../components/UI/myButton/MyButton';
import MyInput from '../../components/UI/myInput/MyInput';
import cl from './AuthPage.module.scss';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { useDisabledButton } from '../../hooks/useDisabledButton';
import { authHandler } from '../../API/MyApi';
import { useValidation } from '../../hooks/useValidation';
const AuthPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [formDirty, setFormDirty] = useState({
        email: null,
        password: null
    });
    const [formError, setFormError] = useState({
        email: 'Unvalid email',
        password: 'Password should be longer than 6',
        unvalidData: ''
    });
    const [disabledButton, setDisabledButton] = useState(false);
    useDisabledButton(formDirty, formError, form, setDisabledButton);
    const { login } = useContext(AuthContext);
    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const [validateMail, validatePassword, blurHandler,validateRepeatedPassword] = useValidation(changeHandler, setFormError, formError, setFormDirty, formDirty,form);
    return (
        <div className={cl.authWrapper}>
            <div className={cl.authContainer}>
                <div className={cl.title}>Sign In</div>
                <div className={cl.inputWrapper}>
                    <MyInput classnameinput={(formDirty.email && formError.email)?'errorInput':''} onBlur={e => blurHandler(e)} name='email' label='email' placeholder='email' onChange={e => validateMail(e)} />
                    {(formDirty.email && formError.email) && <div className={cl.error}>{formError.email}</div>}
                </div>
                <div className={cl.inputWrapper}>
                    <MyInput classnameinput={(formDirty.password && formError.password)?'errorInput':''} type='password' onBlur={e=>blurHandler(e)} name='password' label='password' placeholder='password' onChange={e => validatePassword(e)} />
                    {(formDirty.password && formError.password) && <div className={cl.error}>{formError.password}</div>}
                </div>
                <MyButton disabled={disabledButton}onClick={e=>authHandler(form,login, setFormError, formError)}>LOGIN</MyButton>
                <Link to='/reg'>Don't have an account?</Link>
                {formError.unvalidData &&
                    <div className={cl.errorBlock}>{formError.unvalidData}</div>
                }
            </div>
        </div >
    );
};

export default AuthPage;