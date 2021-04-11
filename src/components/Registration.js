import React, {useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {NavLink} from "react-router-dom";

const Registration = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [repeat, setRepeat] = useState("")
    let [error, setError] = useState("")
    let [error2, setError2] = useState("")
    let [error3, setError3] = useState("")
    let [message, setMessage] = useState("")


    const selectEmail = (e) => {
        setEmail(e.target.value)
    }
    const selectPassword = (e) => {
        setPassword(e.target.value)
    }
    const selectRepeat = (e) => {
        setRepeat(e.target.value)
    }

    useEffect(() => {
        localStorage.setItem('myValueInLocalStorage', message);
    }, [message]);

    const Submit = (e) => {
        e.preventDefault()

        if (email.indexOf('@') !== -1 && password.length >= 6 && password === repeat) {
            setEmail("")
            setPassword("")
            setRepeat("")
            setError("")
            setError2("")
            setMessage(email)
            window.location.reload();
        } else if (email.indexOf('@') === -1) {
            setError("Podany email jest nieprawidłowy!")
        } else if (password.length < 6) {
            setError2("Podane hasło jest za krótkie!")
        }
          else if (password !== repeat) {
        setError3("Powtórzone hasło jest inne")
        }
    }
    return (
        <div className="contact__main">
            <h1 className="home__title">Zarejestruj się</h1>
            <div className="home__background2"></div>
            <div className="contact__body">
                <div className="registration">
                    <form onSubmit={Submit} noValidate className="contact__form">
                        <div className="contact__text">
                            <TextField id="standard-full-width"
                                       label="Email"
                                       className="registration__textField"
                                       style={{margin: 8}}
                                       placeholder=""
                                       fullWidth
                                       margin="normal"
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                                       onChange={e => selectEmail(e)}/>
                            <h1 className="registration__error"> {error}</h1>
                        </div>
                        <div className="contact__text">
                            <TextField id="standard-full-width"
                                       label="Hasło"
                                       className="registration__textField"
                                       style={{margin: 8}}
                                       placeholder=""
                                       fullWidth
                                       margin="normal"
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                                       onChange={e => selectPassword(e)}/>
                            <h1 className="registration__error"> {error2}</h1>
                        </div>
                        <div className="contact__text">
                            <TextField id="standard-full-width"
                                       label="Powtórz hasło"
                                       className="registration__textField"
                                       style={{margin: 8}}
                                       placeholder=""
                                       fullWidth
                                       margin="normal"
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                                       onChange={e => selectRepeat(e)}/>
                            <h1 className="registration__error"> {error3}</h1>
                        </div>
                    </form>
                </div>
            </div>
            <div className="registration__btn">
                <div className="registration__button">
                    <NavLink to="/Login">Zaloguj się</NavLink>
                </div>
                <div onClick={Submit} className="registration__button">Zarejestruj się</div>
            </div>
        </div>
    );
}

export default Registration;