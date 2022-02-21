import React from "react";
import {useNavigate} from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupsPage() {
    // React HOOK that is used to navigate browser History.
    const navigate = useNavigate();

    // function to handle sending information
    // to the backend server (with database)
    function addMeetupDataHandler(meetupData) {
        /*
        The default method used in the fetch is a GET method. This could be
        overridden/set using a json type object as a second parameter of fetch.
            fetch({}, []);
        This also returns a PROMISE/object/response which should be handled
        in the THEN statement.
         */
        fetch(
            "https://react-meetup-app-c782e-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(() => {
            // the navigate HOOK redirects the current page to
            // the location/path set in the parameters.
            navigate('/');
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm addMeetupData={addMeetupDataHandler}/>
        </section>
    );
}