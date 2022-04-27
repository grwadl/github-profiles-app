export const useValidation = (changeHandler,setFormError,formError,setFormDirty,formDirty,form) => {
    const validateMail = (e) => {
        changeHandler(e);
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setFormError({ ...formError, email: 'Unvalid email' });
        }
        else {
            setFormError({ ...formError, email: null });
        }
    }
    const validatePassword = (e) => {
        changeHandler(e);
        if (!(e.target.value.length > 6)) {
            setFormError({ ...formError, password: 'Password should be longer than 6' });
        }
        else {
            setFormError({ ...formError, password: null });
        }
    }
    const blurHandler = (e) => {
        if (e.target.name === 'password') {
            setFormDirty({ ...formDirty, password: true });
        }
        if (e.target.name === 'email') {
            setFormDirty({ ...formDirty, email: true });
        }
        if (e.target.name === 'repeatpassword') {
            setFormDirty({ ...formDirty, repeatpassword: true });
        }
    }
    const validateRepeatedPassword = (e) => {
        changeHandler(e);
        if (form.password !== e.target.value)
        {
            setFormError({ ...formError, repeatpassword: 'Passwords are not the same' });
        }
        else {
            setFormError({ ...formError, repeatpassword: null });
        }
    }
    return [validateMail,validatePassword,blurHandler,validateRepeatedPassword]
}