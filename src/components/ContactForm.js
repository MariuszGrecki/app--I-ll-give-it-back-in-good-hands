import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";

const ContactForm = () => {
    let [email, setEmail] = useState("")
    let [name, setName] = useState("")
    let [message, setMessage] = useState("")
    let [error, setError] = useState("")
    let [error2, setError2] = useState("")
    let [error3, setError3] = useState("")

    const selectEmail = (e) => {
        setEmail(e.target.value)
    }
    const selectName = (e) => {
        setName(e.target.value)
    }
    const selectMessage = (e) => {
        setMessage(e.target.value)
    }

    const Submit = (e) => {
        e.preventDefault()
        if (email.indexOf('@') !== -1 && (name.indexOf(' ') === -1) && message.length>120) {
            setEmail("")
            setName("")
            setMessage("")
            setError("")
            setError2("")
            setError3("")
        } else if (name.indexOf(' ') !== -1) {
            setError2("Podane imię jest nieprawidłowe!")
        } else if (email.indexOf('@') === -1) {
            setError("Podany email jest nieprawidłowy!")
        } else if (message.length<=120) {
            setError3("Wiadomość musi zawierać conajmniej 120 znaków!")
        }
    }
    return (
        <div className="contact__mains">
            <h1 className="home__title">Skontaktuj się z nami</h1>
            <div className="home__background2"></div>
            <div className="contact__ciao">
                <div className="contact__txt">
                    <form onSubmit={Submit} noValidate className="contact__form">
                        <div className="contact__top1">
                            <div className="contact__text1">
                                <TextField id="standard-full-width"
                                           label="Wpisz swoje imię"
                                           className="enter__name"
                                           style={{margin: 8, width: "100%",}}
                                           placeholder="Marian"
                                           fullWidth
                                           margin="normal"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           onChange={e => selectName(e)}/>
                                <h1 className="contact__error"> {error2}</h1>
                            </div>
                            <div className="contact__text1">
                                <TextField
                                    id="standard-full-width"
                                    label="Wpisz swój email"
                                    className="enter__name"
                                    style={{margin: 8, width: "100%"}}
                                    placeholder="abcd@ayz.pl"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={e => selectEmail(e)}
                                />
                                <h1 className="contact__error"> {error}</h1>
                            </div>
                        </div>
                        <div className="contact__text2">
                            <TextField
                                       id="standard-multiline-static"
                                       multiline
                                       rows={4}
                                       label="Wpisz swoja wiadomość"
                                       className="enter__message"
                                       style={{margin: 8,}}
                                       placeholder="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
                                       fullWidth
                                       margin="normal"
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                                       onChange={e => selectMessage(e)}/>
                            <h1 className="contact__error"> {error3}</h1>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contact__btn">
                <div onClick={Submit} className="contact__button">Wyślij</div>
            </div>
        </div>
    );
}
export default ContactForm;