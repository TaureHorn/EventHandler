import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function NewEventForm(props) {
  const [disabled, setDisabled] = useState(false);

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
    props.updateTrigger("created event");
  };

  const sendFormData = async (formData) => {
    props.client
      .addEvent(formData)
      .then(() => {
        setDisabled(false);
        document.getElementById("eventForm").reset();
      })
      .catch((err) => {
        setDisabled(false);
        alert("Something went wrong!");
      });
  };

  return (
    <>
      <Container className="cont-center">
        <div className="center">
          <h2 className="page-title">New Event</h2>
        </div>
        <br />
        <div className="login-form">
          <form onSubmit={(e) => submitHandler(e)} id="eventForm">
            <span className="form-text">Date</span>
            <br />
            <input
              type="text"
              name="date"
              placeholder="dd-mm-yy"
              disabled={disabled}
              required
            />
            <br />
            <br />
            <span className="form-text">Time</span>
            <br />
            <input
              type="text"
              name="time"
              placeholder="13:00 / all day"
              disabled={disabled}
            />
            <br />
            <br />
            <span className="form-text">Event name</span>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Drinks with Angie"
              disabled={disabled}
              required
            />
            <br />
            <br />
            <span className="form-text">Location</span>
            <br />
            <input
              type="text"
              name="location"
              placeholder="Victoria Arms"
              disabled={disabled}
              required
            />
            <br />
            <br />
            <span className="form-text">Event details</span>
            <br />
            <textarea
              name="details"
              placeholder="Meet for Angies birthday"
              disabled={disabled}
            />
            <br />
            <br />
            <button type="submit" disabled={disabled}>
              {" "}
              Submit{" "}
            </button>
          </form>
          <Link to={"/"}>
            <button>Back to events</button>
          </Link>
        </div>
      </Container>
    </>
  );
}

export default NewEventForm;
