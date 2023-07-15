import './SignIn.scss';
import { ButtonMui } from "../../../UI/atoms/ButtonMui";
import { InputMui } from "../../../UI/atoms/InputMui";
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../../firebase';
import { TransitionAlerts } from '../../../UI/atoms/AlertMui';
import { LocalStorageService } from '../../../services/LocalStorageService';

export const SignIn = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorAlert, setErrorAlert ] = useState(false);

    initializeApp(firebaseConfig.firebaseConfig)

    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            LocalStorageService.setItem('login', true);
            navigate('/Home');
        } catch (error) {
            setErrorAlert(true)
        }
    };

    const errorHandelAlert = () => setErrorAlert(false)

    return (
        <div className="loginContainer">
            {
                errorAlert ? 
                    <button onClick={errorHandelAlert}>
                        <TransitionAlerts severity='error' >You have entered an invalid username or password</TransitionAlerts> 
                    </button>
                    : ''
            }
            <h2>Sign In</h2>
            <div className="loginContainer__form">
                <InputMui
                    style={{ width: '65%' }}
                    type='text'
                    variant='standard'
                    label='Name'
                    onChange={(event) => setEmail(event)}
                ></InputMui>
                <InputMui
                    style={{ width: '65%' }}
                    type='password'
                    variant='standard'
                    label='Password'
                    onChange={(event) => setPassword(event)}
                ></InputMui>
            </div>
            <div className="loginContainer__btns">
                <ButtonMui onClick={handleLogin} variant='outlined'>Sign In</ButtonMui>
            </div>
        </div>
    )
}
