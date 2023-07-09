import './SignIn.scss'
import { ButtonMui } from "../../../UI/atoms/ButtonMui"
import { InputMui } from "../../../UI/atoms/InputMui"
import { log } from 'console'

export const SignIn = () => {

    const handleClick = () => {
        console.log('hola amigos');
    }

    return (
        <div className="container">
            <h2>Sign In</h2>
            <div className="container__form">
                <InputMui
                    style={{width: '65%'}}
                    type='text'
                    variant='standard'
                    label='Name'
                ></InputMui>
                <InputMui
                    style={{width: '65%'}}
                    type='password'
                    variant='standard'
                    label='Password'
                ></InputMui>
            </div>
            <div className="container__btns">
                <ButtonMui onClick={handleClick} variant='outlined'>Sign In</ButtonMui>
            </div>
        </div>
    )
}
