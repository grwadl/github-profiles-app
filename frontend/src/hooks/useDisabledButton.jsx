import { useEffect } from "react";

export const useDisabledButton = (formDirty,formError,form,setDisabledButton) => {
    useEffect(() => {
        if ((formDirty.email && formError.email) || (formDirty.repeatpassword && formError.repeatpassword)|| (formDirty.password && formError.password)||form.email===''||form.password===''||form.repeatpassword==='') {
            setDisabledButton(true);
        }
        else {
            setDisabledButton(false);
        }
    }, [formDirty.email, formError.email, formDirty.password,formDirty.repeatpassword,formError.repeatpassword, formError.password]);
}