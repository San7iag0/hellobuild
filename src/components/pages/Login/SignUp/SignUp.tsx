import './SignUp.scss'
import { ButtonMui } from "../../../UI/atoms/ButtonMui"
import { InputMui } from "../../../UI/atoms/InputMui"
import { useState } from 'react';

export const SignUp = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleClick = () => {
        console.log('hola amigos');
    }

    return (
        <div className="container">
            <h2>Sign Up</h2>
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
                <ButtonMui onClick={handleClick} variant='outlined'>Sign Up</ButtonMui>
            </div>
        </div>
    )
}
