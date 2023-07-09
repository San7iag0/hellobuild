import './Login.scss'
import { useState } from "react"
import { SignIn } from "./SignIn/SignIn"
import { SignUp } from "./SignUp/SignUp"
import { ButtonMui } from "../../UI/atoms/ButtonMui";
import { Alert, Snackbar } from '@mui/material';

export const Login = () => {
    const [ sign, setSign ] = useState('in');

    const handleClick = (str:string) => {
        setSign(str);
    }

    return(
        <>
            <div className="btns">
                <ButtonMui onClick={() => handleClick('in')} variant='outlined'>Sign In</ButtonMui>
                <ButtonMui onClick={() => handleClick('up')} variant='outlined'>Sign Up</ButtonMui>
            </div>
            {sign === 'in' ? <SignIn></SignIn> :  <SignUp></SignUp>}
        </>
    )
}
