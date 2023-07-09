import './SignIn.scss';
import { ButtonMui } from "../../../UI/atoms/ButtonMui";
import { InputMui } from "../../../UI/atoms/InputMui";
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../../firebase';

export const SignIn = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    initializeApp(firebaseConfig.firebaseConfig)

    const handleClick = () => {
        console.log('hola amigos');
    }

    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            console.log('Logged in successfully!');
            navigate('/')
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="container">
            <h2>Sign In</h2>
            <div className="container__form">
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
            <div className="container__btns">
                <ButtonMui onClick={handleLogin} variant='outlined'>Sign In</ButtonMui>
            </div>
        </div>
    )
}
