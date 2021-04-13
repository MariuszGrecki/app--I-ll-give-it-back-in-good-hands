import React, {useState} from 'react';
import {db} from "./FirebaseConfig";
import TextField from "@material-ui/core/TextField";

const PanelOrder = ({
                        message, inprogress, id, city, radio, bags, position, kids, mothers, homeless,
                        disabled, older, organizations, street, postal, number, date, hours, comments
                    }) => {

    let [user, setUser] = useState(localStorage.getItem('myValueInLocalStorage') || '')
    let [com, setCom] = useState("")

    function toggle() {
        db.collection("add").doc(id).update({
            comments: com,
        })
    }

    return (
        <>
            {user === message && (
                <div className="panelUser">
                    <div className="panelUserInside">
                        <p className="user">Zamawiający:</p>
                        <p>{message}</p>
                        <p className="user">Oddaje:</p>
                        <p>{bags}, {radio} : {kids} {mothers} {homeless} {disabled} {older}</p>
                        <p className="user">Dla:</p>
                        <p>{organizations} {position}</p>
                        <p className="user">Dane do odbioru:</p>
                        <p>Ulica:{street} Miasto:{city} Kod-pocztowy:{postal} Numer telefonu:{number}</p>
                        <p className="user">Termin odbioru:</p>
                        <p>Data:{date} Godzina:{hours}  </p>
                        <p className="user">Uwagi dla kuriera:</p>
                        <p>{comments}  </p>
                        <div className="userSend">
                            <TextField
                                       onChange={e => setCom(e.target.value)}/>
                            <button onClick={toggle}>Dodaj uwagi</button>
                            <p>{inprogress ? "przygotowanie" : "wysłano"}</p>
                        </div>
                    </div>
                </div>
            )
            } </>
    );
};

export default PanelOrder;