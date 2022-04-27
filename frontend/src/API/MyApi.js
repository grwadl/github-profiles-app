import axios from "axios";

export const setRegistr = async (form, history, setFormError, formError) => {

    try {
        await axios.post('http://localhost:4000/api/auth/registration', { ...form },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => setFormError({ ...formError, unvalidData: '' }))
            .then(() => {
                history('/auth');
            });

    }
    catch (e) {
        console.log(e);
        setFormError({ ...formError, unvalidData: 'This email has already been used' });
    }

}
export const authHandler = async (form, login, setFormError, formError) => {
    try {
        await axios.post('http://localhost:4000/api/auth/login', { ...form })
            .then(res => login(res.data.token, res.data.userId))
            .then(() => setFormError({ ...formError, unvalidData: '' }));
    }
    catch (e) {
        console.log(e);
        setFormError({ ...formError, unvalidData: 'This email does not exist' });
    }
}