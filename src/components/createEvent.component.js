import React, { useEffect, useState } from 'react'

function NewEventForm(props) {
    const [disabled, setDisabled] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        info: "",
        date: "",
        time: ""
    })

    const submitHandler = async (e) => {
        e.preventDefault();
        setDisabled(true);
        const i = e.target
        sendFormData({
            name: i.name.value,
            location: i.location.value,
            info: i.details.value,
            date: i.date.value,
            time: i.time.value            
        })
    };

    const sendFormData = async (formData) => {
        props.client.addEvent(formData)
        .then(() => {
            setDisabled(true);
            document.getElementById("eventForm").reset();
        })
        .catch((err) => {
            setDisabled(false)
            alert('Something went wrong!');
        });
    };

    return (        
        <>
        <h2>New Event</h2>
            <br />
            <form onSubmit={(e) => submitHandler(e)} id="eventForm">
                Date
                <br />
                <input type="text" name="date" placeholder="dd-mm-yy" disabled={disabled} required/>    
                <br />            
                <br />
                Time
                <br />
                <input type="text" name="time" placeholder="13:00" disabled={disabled} />                
                <br />
                <br />
                Event name
                <br />
                <input type="text" name="name" placeholder="Drinks with Angie" disabled={disabled} required/>               
                <br />
                <br />
                Location
                <br />
                <input type="text" name="location" placeholder="Victoria Arms" disabled={disabled} required/>                                
                <br />
                <br />
                Event details
                <br />
                <textarea name="details" placeholder="Meet for Angies birthday" disabled={disabled}/>
                <br />
                <br />
                <button type="submit" disabled={disabled}>
                    {" "}
                    Submit{" "}
                </button>
            </form>
        </>
    );
    }
    
    export default NewEventForm;