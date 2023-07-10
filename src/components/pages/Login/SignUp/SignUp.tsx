import './SignUp.scss'
import { ButtonMui } from "../../../UI/atoms/ButtonMui"
import { InputMui } from "../../../UI/atoms/InputMui"
import { useState } from 'react';
import { auth } from '../../../../firebase';

export const SignUp = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const createAccount = async () => {
        try {
          await auth.createUserWithEmailAndPassword(email, password);
          console.log('sign up successfully!');
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div className="loginCcontainer">
            <h2>Sign Up</h2>
            <div className="loginCcontainer__form">
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
            <div className="loginCcontainer__btns">
                <ButtonMui onClick={createAccount} variant='outlined'>Sign Up</ButtonMui>
            </div>
        </div>
    )
}
