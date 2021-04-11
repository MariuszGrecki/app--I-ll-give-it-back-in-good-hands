import React, {useState, useEffect} from 'react';
import TextField from "@material-ui/core/TextField";
import {NavLink} from "react-router-dom";

const Login = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [error, setError] = useState("")
    let [error2, setError2] = useState("")
    let [message, setMessage] = useState("")

    const selectEmail = (e) => {
        setEmail(e.target.value)
    }
    const selectPassword = (e) => {
        setPassword(e.target.value)
    }
    useEffect(() => {
        localStorage.setItem('myValueInLocalStorage', message);
    }, [message]);

    const Submit = (e) => {
        e.preventDefault()

        if (email.indexOf('@') !== -1 && password.length >= 6) {
            setEmail("")
            setPassword("")
            setError("")
            setError2("")
            setMessage(email)
            window.location.reload();
        } else if (email.indexOf('@') === -1) {
            setError("Podany email jest nieprawidłowy!")
        } else if (password.length < 6) {
            setError2("Podane hasło jest za krótkie!")
        }
    }
    return (
        <div className="contact__main">
            <h1 className="home__title">Zaloguj się</h1>
            <div className="home__background2"></div>
            <div className="contact__body">
                <div className="login">
                    <form onSubmit={Submit} noValidate className="contact__form">
                        <div className="contact__text">
                            <TextField id="standard-full-width"
                                       label="Email"
                                       className="login__textField"
                                       style={{margin: 8}}
                                       placeholder=""
                                       fullWidth
                                       margin="normal"
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                                       onChange={e => selectEmail(e)}/>
                            <h1 className="login__error"> {error}</h1>
                        </div>
                        <div className="contact__text">
                            <TextField id="standard-full-width"
                                       label="Hasło"
                                       className="login__textField"
                                       style={{margin: 8}}
                                       placeholder=""
                                       fullWidth
                                       margin="normal"
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                                       onChange={e => selectPassword(e)}/>
                            <h1 className="login__error"> {error2}</h1>
                        </div>
                    </form>
                </div>
            </div>
            <div className="login__btn">
                <div className="login__button">
                    <NavLink to="/Registration">Załóż konto</NavLink>
                </div>
                <div onClick={Submit} className="login__button">Zaloguj się</div>
            </div>
        </div>
    );
}

export default Login;