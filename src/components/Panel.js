import React, {useEffect, useState} from 'react';
import {db} from "./FirebaseConfig";
import PanelOrder from "./PanelOrder";
import PanelOrderUsers from "./PanelOrderUsers";

const Panel = () => {
    let [app, setApp] = useState([])
    let [users, setUsers] = useState([])

    useEffect(() => {
        getGive();
        getGive2()
    }, [])

    function getGive() {
        db.collection("add").onSnapshot(function (querySnapshot) {
            setApp(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    message: doc.data().message,
                    inprogress: doc.data().inprogress,
                    city: doc.data().city,
                    radio: doc.data().radio,
                    bags: doc.data().bags,
                    position: doc.data().position,
                    kids: doc.data().kids,
                    mothers: doc.data().mothers,
                    homeless: doc.data().homeless,
                    disabled: doc.data().disabled,
                    older: doc.data().older,
                    organizations: doc.data().organizations,
                    street: doc.data().street,
                    postal: doc.data().postal,
                    number: doc.data().number,
                    date: doc.data().date,
                    hours: doc.data().hours,
                    comments: doc.data().comments,
                })))
        })
    }

    function getGive2() {
        db.collection("users").onSnapshot(function (querySnapshot) {
            setUsers(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    username: doc.data().username,
                    userpassword: doc.data().password,
                })))
        })
    }

    return (
        <div className="admin__body">
            <div>
                {app.map((any) =>
                    <PanelOrder
                        id={any.id}
                        inprogress={any.inprogress}
                        message={any.message}
                        city={any.city}
                        radio={any.radio}
                        bags={any.bags}
                        position={any.position}
                        kids={any.kids}
                        mothers={any.mothers}
                        homeless={any.homeless}
                        disabled={any.disabled}
                        older={any.older}
                        organizations={any.organizations}
                        street={any.street}
                        postal={any.postal}
                        number={any.number}
                        date={any.date}
                        hours={any.hours}
                        comments={any.comments}
                    />
                )}
            </div>
            <div>
                {users.map((doit) =>
                    <PanelOrderUsers
                        id={doit.id}
                        username={doit.username}
                        userpassword={doit.userpassword}

                    />
                )}
            </div>
        </div>
    );
};

export default Panel;