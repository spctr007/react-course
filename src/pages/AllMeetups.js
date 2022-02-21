import React, {useState , useEffect} from "react";
import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetupsPage() {
    const [isLoading,setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    /*
     - The code inside executes based on the 2nd parameter(DEPENDENCY) change. If there is no dependency,
      then the code will only execute ONCE since the dependency will never change.
     - If the 2nd param is omitted/removed, then the code will always execute when
     the entire function (AllMeetupPage) is called.
     - If the dependency has a value then once that value changes, the useEffect function
     will then execute.
     */
    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-meetup-app-c782e-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            /* the .json() function is an out-of-the-box
                function from the response object.
                Converts JSON to plain javascript object.
                the return will be sent to the next THEN statement.
             */
            return response.json();
        }).then(data => {
            const meetups = [];

            for (const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);

        });
    }, []);


    if (isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}