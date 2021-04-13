import React, {useState} from 'react';
import {db} from "./FirebaseConfig";

const PanelAdminUsers = ({
                             id, username, userpassword,
                         }) => {

    /*function toggle() {
        db.collection("add").doc(id).update({
            inprogress: !inprogress,
        })
    }*/

    function deleteId() {
        db.collection("users").doc(id).delete();
    }

    return (
        <div className="panelUser">
            <div className="panelUserInside">
                <p className="user">Użytkownik:</p>
                <p>{username}</p>
                <p className="user">Hasło:</p>
                <p>{userpassword}</p>
                <div className="userSend">
                    <button onClick={deleteId}>Usuń</button>
                </div>
            </div>
        </div>
    );
};

export default PanelAdminUsers;