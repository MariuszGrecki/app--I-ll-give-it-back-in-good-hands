import React from 'react';
import {db} from "./FirebaseConfig";

const PanelUser = ({
                       message, inprogress, id, city, radio, bags, position, kids, mothers, homeless,
                       disabled, older, organizations, street, postal, number, date, hours, comments
                   }) => {

    function toggle() {
        db.collection("add").doc(id).update({
            inprogress: !inprogress,
        })
    }

    function deleteId() {
        db.collection("add").doc(id).delete();
    }

    return (
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
                    <button onClick={toggle}>{inprogress ? "Nadaj" : "Nadano"}</button>
                    <button onClick={deleteId}>Usuń</button>
                    <p>{inprogress ? "przygotowanie" : "wysłano"}</p>
                </div>
            </div>
        </div>
    );
};

export default PanelUser;