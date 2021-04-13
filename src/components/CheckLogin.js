import React, {useEffect, useState} from 'react';

const CheckLogin = ({username, userpassword, email, password, id}) => {
    let [message, setMessage] = useState("")
    let [error, setError] = useState("")

    useEffect(() => {
        localStorage.setItem('myValueInLocalStorage', message);
    }, [message]);

    const Submit =() => {
        setMessage(email)
        window.location.reload();
    }

    const Wrong = () => {
        setError("Podany użytkownik nie istnieje")
    }
    return (
        <>
            {(username === email && userpassword === password) ?
            (<div onClick={Submit} className="login__button">
                Zaloguj się
            </div>): ""}
            <div>{error}</div>
        </>
    );
};

export default CheckLogin;