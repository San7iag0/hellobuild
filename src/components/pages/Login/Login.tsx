import './Login.scss'
import { ButtonMui } from "../../UI/atoms/ButtonMui"
import { InputMui } from "../../UI/atoms/InputMui"

export const Login = () => {
    return (
        <div className="container">
            <h2>Login</h2>
            <div className="container__form">
                <InputMui
                    type='text'
                    variant='filled'
                    label='Name'
                ></InputMui>
                <InputMui
                    type='password'
                    variant='filled'
                    label='Password'
                ></InputMui>
            </div>
            <div className="container__btns">
                <ButtonMui variant='contained'>Login</ButtonMui>
                <ButtonMui variant='contained'>sign Up</ButtonMui>
            </div>
        </div>
    )
}
