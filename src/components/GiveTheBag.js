import React, {useEffect, useState} from 'react';
import Contact from "./Contact";
import TextField from "@material-ui/core/TextField";
import {db} from "./FirebaseConfig";
import firebase from "firebase";


const GiveTheBag = () => {

    let [app, setApp] = useState([])
    let [current, setCurrent] = useState(1)
    let [message, setMessage] = useState(localStorage.getItem('myValueInLocalStorage') || '')
    let [radio, setRadio] = useState("ubrania, które nadają się do ponownego użycia")
    let [bags, setBags] = useState(1)
    let [position, setPosition] = useState("Poznań")
    let [kids, setKids] = useState(true)
    let [mothers, setMothers] = useState(false)
    let [homeless, setHomeless] = useState(false)
    let [disabled, setDisabled] = useState(false)
    let [older, setOlder] = useState(false)
    let [organizations, setOrganizations] = useState("")
    let [street, setStreet] = useState("")
    let [city, setCity] = useState("")
    let [postal, setPostal] = useState("")
    let [number, setNumber] = useState("")
    let [date, setDate] = useState("")
    let [hours, setHours] = useState("")
    let [comments, setComments] = useState("")

    function add(e) {
        db.collection("add").add({
            inprogress: true,
            message: message,
            radio: radio,
            bags: bags,
            position: position,
            kids: kids,
            mothers: mothers,
            homeless: homeless,
            disabled: disabled,
            older: older,
            organizations: organizations,
            street: street,
            city: city,
            postal: postal,
            number: number,
            date: date,
            hours: hours,
            comments: comments,
        })
        setCurrent(current + 1)
    }

    useEffect(() => {
        getGive();
    }, [])

    function getGive() {
        db.collection("add").onSnapshot(function (querySnapshot) {
            setApp(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    message: doc.data().message,
                    inprogress: doc.data().inprogress,
                    city: doc.data().city,
                })))
        })
    }


    const next = () => {
        setCurrent(current + 1)
    }
    const back = () => {
        setCurrent(current - 1)
    }

    return (
        <div>
            <div className="give">
                <div className="give__background"></div>
                <div className="give__text">
                    <h1 className="home__title">Oddaj rzeczy, których już nie potrzebujesz <br/>POTRZEBUJĄCYM</h1>
                    <div className="home__background2"></div>
                    <h2 className="home__title">Wystarczą 4 proste kroki: </h2>
                    <div className="home__title">1. Wybierz rzeczy</div>
                    <div className="home__title">2. Spakuj je w worki</div>
                    <div className="home__title">3. Wybierz fundację</div>
                    <div className="home__title">4. Zamów kuriera</div>
                </div>
            </div>
            <>
                {current === 1 && (
                    <>
                        <div className="step1__header">
                            <h1 className="step1__title">Ważne!</h1>
                            <h2 className="step1__text">Uzupełnij szczegóły dotyczące Twoich rzeczy.
                                Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</h2>
                        </div>
                        <div className="step1__background">
                            <div className="step1__form">
                                <p className="step1__steps">Krok 1/4</p>
                                <p className="step1__title__inside">Zaznacz co chcesz oddać:</p>
                                <form>
                                    <div className="step1__input">
                                        <input className="input"
                                               type="radio"
                                               value="ubrania, które nadają się do ponownego użycia"
                                               checked={radio === "ubrania, które nadają się do ponownego użycia"}
                                               onClick={(e) => {
                                                   setRadio(e.target.value)
                                               }}/>
                                        <label className="step1__label"> ubrania, które nadają się do ponownego
                                            użycia </label>
                                    </div>
                                    <div className="step1__input">
                                        <input className="input"
                                               type="radio"
                                               value="ubrania, do wyrzucenia"
                                               checked={radio === "ubrania, do wyrzucenia"}
                                               onClick={(e) => {
                                                   setRadio(e.target.value)
                                               }}/>
                                        <label className="step1__label"> ubrania, do wyrzucenia</label>
                                    </div>
                                    <div className="step1__input">
                                        <input className="input"
                                               type="radio"
                                               value="zabawki"
                                               checked={radio === "zabawki"}
                                               onClick={(e) => {
                                                   setRadio(e.target.value)
                                               }}/>
                                        <label className="step1__label"> zabawki</label>
                                    </div>
                                    <div className="step1__input">
                                        <input className="input"
                                               type="radio"
                                               value="książki"
                                               checked={radio === "książki"}
                                               onClick={(e) => {
                                                   setRadio(e.target.value)
                                               }}/>
                                        <label className="step1__label"> książki</label>
                                    </div>
                                    <div className="step1__input">
                                        <input className="input"
                                               type="radio"
                                               value="Inne"
                                               checked={radio === "Inne"}
                                               onClick={(e) => {
                                                   setRadio(e.target.value)
                                               }}/>
                                        <label className="step1__label"> Inne</label>
                                    </div>
                                </form>
                                <div className="step1__buttons">
                                    <p className="step1__button" onClick={next}>Dalej</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {current === 2 && (
                    <>
                        <div className="step1__header">
                            <h1 className="step1__title">Ważne!</h1>
                            <h2 className="step1__text">Wszystkie rzeczy do oddania zapakuj w 60 litrowe worki. Dokładną
                                instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ</h2>
                        </div>

                        <div className="step1__background">
                            <div className="step1__form">
                                <p className="step1__steps">Krok 2/4</p>
                                <p className="step2__title__inside">Podaj liczbę 60l worków,
                                    w które spakowałeś/aś rzeczy: </p>
                                <form>
                                    <label className="step1__label"> Liczba 60l worków:</label>
                                    <select
                                        value={bags}
                                        onChange={(e) => {
                                            setBags(e.target.value)
                                        }}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </form>
                                <div className="step2__buttons">
                                    <p className="step1__button" onClick={back}>Wstecz</p>
                                    <p className="step1__button" onClick={next}>Dalej</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {current === 3 && (
                    <>
                        <div className="step1__header">
                            <h1 className="step1__title">Ważne!</h1>
                            <h2 className="step1__text">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej
                                organizacji w wyszukiwarce. Możesz też filtrować organizacje <br/>
                                po ich lokalizacji lub celu ich pomocy</h2>
                        </div>

                        <div className="step1__background">
                            <div className="step1__form">
                                <p className="step1__steps">Krok 3/4</p>
                                <p className="step3__title__inside">Lokalizacja: </p>
                                <form>
                                    <select
                                        value={position}
                                        onChange={(e) => {
                                            setPosition(e.target.value)
                                        }}>
                                        <option value="Poznań">Poznań</option>
                                        <option value="Warszawa">Warszawa</option>
                                        <option value="Kraków">Kraków</option>
                                        <option value="Wrocław">Wrocław</option>
                                        <option value="Katowice">Katowice</option>
                                    </select>
                                </form>
                                <p className="step3__title__inside">Komu chcesz pomóc? </p>
                                <form>
                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={kids}
                                            onChange={(e) => {
                                                setKids(e.target.checked)
                                            }}/>
                                        <label>dzieciom</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={mothers}
                                            onChange={(e) => {
                                                setMothers(e.target.checked)
                                            }}/>
                                        <label>samotnym matkom</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={homeless}
                                            onChange={(e) => {
                                                setHomeless(e.target.checked)
                                            }}/>
                                        <label>bezdomnym</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={disabled}
                                            onChange={(e) => {
                                                setDisabled(e.target.checked)
                                            }}/>
                                        <label>niepełnosprawnym</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={older}
                                            onChange={(e) => {
                                                setOlder(e.target.checked)
                                            }}/>
                                        <label>osobom starszym</label>
                                    </div>
                                </form>
                                <p className="step3__title__inside">Wpisz nazwę konkretnej
                                    organizacji(opcjonalnie): </p>
                                <TextField id="standard-full-width"
                                           className="login__textField"
                                           style={{margin: 8}}
                                           placeholder={organizations}
                                           fullWidth
                                           margin="normal"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           onChange={(e) => {
                                               setOrganizations(e.target.value)
                                           }}/>
                                <div className="step3__buttons">
                                    <p className="step1__button" onClick={back}>Wstecz</p>
                                    {(kids === true || mothers === true || homeless === true || disabled === true
                                        || older === true) && (
                                        <p className="step1__button" onClick={next}>Dalej</p>)
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {current === 4 && (
                    <>
                        <div className="step1__header">
                            <h1 className="step1__title">Ważne!</h1>
                            <h2 className="step1__text">Podaj adres oraz terminy odbioru rzeczy:</h2>
                        </div>

                        <div className="step1__background">
                            <div className="step1__form">
                                <p className="step1__steps">Krok 4/4</p>
                                <p className="step3__title__inside">Podaj adres oraz terminy
                                    odbioru rzeczy przez kuriera: </p>
                                <div className="step4">
                                    <div className="step4__input">
                                        <p className="step3__title__inside">Adres odbioru </p>
                                        <p>Ulica:</p>
                                        <TextField id="standard-full-width"
                                                   className="login__textField"
                                                   style={{margin: 8}}
                                                   placeholder={street}
                                                   fullWidth
                                                   margin="normal"
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       setStreet(e.target.value)
                                                   }}/>
                                        <p>Miasto:</p>
                                        <TextField id="standard-full-width"
                                                   className="login__textField"
                                                   style={{margin: 8}}
                                                   placeholder={city}
                                                   fullWidth
                                                   margin="normal"
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       setCity(e.target.value)
                                                   }}/>
                                        <p>Kod pocztowy:</p>
                                        <TextField id="standard-full-width"
                                                   className="login__textField"
                                                   style={{margin: 8}}
                                                   placeholder={postal}
                                                   fullWidth
                                                   margin="normal"
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       setPostal(e.target.value)
                                                   }}/>
                                        <p>Numer telefonu:</p>
                                        <TextField id="standard-full-width"
                                                   className="login__textField"
                                                   style={{margin: 8}}
                                                   placeholder={number}
                                                   fullWidth
                                                   margin="normal"
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       setNumber(e.target.value)
                                                   }}/>
                                    </div>
                                    <div className="step4__input">
                                        <p className="step3__title__inside">Adres odbioru </p>
                                        <p>Data:</p>
                                        <TextField id="standard-full-width"
                                                   className="login__textField"
                                                   style={{margin: 8}}
                                                   placeholder={date}
                                                   fullWidth
                                                   margin="normal"
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       setDate(e.target.value)
                                                   }}/>
                                        <p>Godzina:</p>
                                        <TextField id="standard-full-width"
                                                   className="login__textField"
                                                   style={{margin: 8}}
                                                   placeholder={hours}
                                                   fullWidth
                                                   margin="normal"
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       setHours(e.target.value)
                                                   }}/>
                                        <p>Uwagi dla kuriera:</p>
                                        <TextField id="standard-full-width"
                                                   className="login__textField"
                                                   style={{margin: 8}}
                                                   placeholder={comments}
                                                   fullWidth
                                                   margin="normal"
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       setComments(e.target.value)
                                                   }}/>
                                    </div>
                                </div>
                                <div className="step4__buttons">
                                    <p className="step1__button" onClick={back}>Wstecz</p>
                                    <p className="step1__button" onClick={next}>Dalej</p>
                                </div>

                            </div>
                        </div>
                    </>
                )}
                {current === 5 && (
                    <div className="step1__background">
                        <div className="step5__form">
                            <div>
                                <p className="step5__title__inside">Podsumowanie Twojej darowizny:</p>
                                <p className="step5__title__inside">Oddajesz:</p>
                                <p className="step5__title__inside">{bags} worki, {radio},
                                    {kids ? "dzieciom" : ""}
                                    {mothers ? "samotnym matkom" : ""}
                                    {homeless ? "bezdomnym" : ""}
                                    {disabled ? "osobom niepełnosprawnym" : ""}
                                    {older ? "osobom starszym" : ""}
                                </p>
                            </div>
                            <div className="step5__title__inside">
                                dla lokalizacji: {position}
                            </div>
                            <div className="step5__title__inside">
                                Adres Odbioru:
                                <p className="step5__title__inside">Ulica:{street}</p>
                                <p className="step5__title__inside">Miasto:{city}</p>
                                <p className="step5__title__inside">Kod pocztowy:{postal}</p>
                                <p className="step5__title__inside">Numer telefonu:{number}</p>
                            </div>
                            <div className="step5__title__inside">
                                Termin Odbioru:
                                <p className="step5__title__inside">Data:{date}</p>
                                <p className="step5__title__inside">Godzina:{hours}</p>
                                <p className="step5__title__inside">Uwagi dla kurieria:{comments}</p>
                            </div>
                            <div className="step4__buttons">
                                <p className="step1__button" onClick={back}>Wstecz</p>
                                <p className="step1__button" onClick={add}>Potwierdzam</p>
                            </div>
                        </div>
                    </div>
                )}
                {current === 6 && (
                    <div>
                        <div className="step1__background">
                            <div className="give__text">
                                <h1 className="home__title">Dziękujemy za przesłanie formularza<br/>Na maila prześlemy
                                    wszelkie informacje o odbiorze
                                </h1>
                                <div className="home__background2"></div>
                            </div>
                        </div>
                    </div>
                )}
            </>
            <Contact/>
        </div>
    )
};

export default GiveTheBag;