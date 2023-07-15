import './SignUp.scss'
import { ButtonMui } from "../../../UI/atoms/ButtonMui"
import { InputMui } from "../../../UI/atoms/InputMui"
import { useState } from 'react';
import { auth } from '../../../../firebase';
import { TransitionAlerts } from '../../../UI/atoms/AlertMui';
import { log } from 'console';

export const SignUp = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ Alert, setAlert ] = useState(false);
    const [ errorAlert, setErrorAlert ] = useState('');

    const createAccount = async () => {
        try {
          await auth.createUserWithEmailAndPassword(email, password);
          console.log('sign up successfully!');
          setAlert(true)
        } catch (error: any) {
          setErrorAlert(error.message.split('(', 1)[0]);
        }
      };

    const handelAlert = () => setAlert(false);
    const errorHandelAlert = () => setErrorAlert('');

    return (
        <div className="loginContainer">
            {
                Alert ? 
                <button onClick={handelAlert}>
                    <TransitionAlerts severity='success' >Congratulations, your user has been created</TransitionAlerts> 
                </button>
                : ''
            }
            {
                errorAlert != '' ? 
                <button onClick={errorHandelAlert}>
                    <TransitionAlerts severity='error' >{errorAlert}</TransitionAlerts> 
                </button>
                : ''
            }
            <h2>Sign Up</h2>
            <div className="loginContainer__form">
                <InputMui
                    style={{width: '65%'}}
                    type='text'
                    variant='standard'
                    label='Name'
                    onChange={(event) => setEmail(event)}
                ></InputMui>
                <InputMui
                    style={{width: '65%'}}
                    type='password'
                    variant='standard'
                    label='Password'
                    onChange={(event) => setPassword(event)}
                ></InputMui>
            </div>
            <div className="loginContainer__btns">
                <ButtonMui onClick={createAccount} variant='outlined'>Sign Up</ButtonMui>
            </div>
        </div>
    )
}
