import {db} from "./FirebaseConfig";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

const PanelOrderUsers = ({
                             id, username, userpassword,
                         }) => {

    let [user, setUser] = useState(localStorage.getItem('myValueInLocalStorage') || '')
    let [password, setPassword] = useState("")

    function toggle() {
        db.collection("users").doc(id).update({
            password: password,
        })
    }

    return (
        <div className="panelUser">
            {user === username && (
            <div className="panelUserInside">
                <p className="user">Użytkownik:</p>
                <p>{username}</p>
                <p className="user">Hasło:</p>
                <p>{userpassword}</p>
                <div className="userSend">
                    <TextField
                        onChange={e => setPassword(e.target.value)}/>
                    <button onClick={toggle}>Zmień hasło</button>
                </div>
            </div>)}
        </div>
    );
}

export default PanelOrderUsers;