import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UpdateEventForm(props) {
  const [disabled, setDisabled] = useState(false);
  const [event, setEvent] = useState([]);
  const updateId = props.updateId;

  const eventFinder = () => {
    const event = props.events.find((x) => x._id === updateId);
    setEvent(event);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisabled(true);
    const i = e.target;
    sendFormData({
      name: i.name.value,
      location: i.location.value,
      info: i.details.value,
      date: i.date.value,
      time: i.time.value,
    });
    props.updateTrigger("updated event");
  };

  const sendFormData = async (formData) => {
    props.client
      .updateEvent(updateId, formData)
      .then(() => {
        setDisabled(false);
        document.getElementById("eventForm").reset();
      })
      .catch((err) => {
        setDisabled(false);
        alert("Something went wrong!");
      });
  };

  useEffect(() => {
    eventFinder(updateId);
  }, []);

  return (
    event ?
    <>
      <div id="form">
        <h2>Update Event</h2>
        <br />
        <form onSubmit={(e) => submitHandler(e)} id="eventForm">
          Date
          <br />
          <input type="text" name="date" placeholder={event.date} required />
          <br />
          <br />
          Time
          <br />
          <input type="text" name="time" placeholder={event.time} />
          <br />
          <br />
          Event name
          <br />
          <input type="text" name="name" placeholder={event.name} required />
          <br />
          <br />
          Location
          <br />
          <input
            type="text"
            name="location"
            placeholder={event.location}
            required
          />
          <br />
          <br />
          Event details
          <br />
          <textarea name="details" placeholder={event.info} />
          <br />
          <br />
          <button type="submit" disabled={disabled}>
            {" "}
            Submit{" "}
          </button>
        </form>
        <Link to={"/"} >
          <button onClick={props.updateTrigger("heading back to events")}>Back to events</button>
        </Link>
      </div>
    </>
     : 
    <>
      <h1> Nothing to see here!</h1>
      <Link to={"/"} >
        <button onClick={props.updateTrigger("heading back to events")}>Back to events</button>
      </Link>
    </>
  );
}

export default UpdateEventForm;
