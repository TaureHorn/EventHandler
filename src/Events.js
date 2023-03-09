/// here goes all the logic and rendering for handling the frontend for events
/// gets called within the conditional rendering, either login or events.js

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Container } from "react-bootstrap";

import NavigationBar from "./components/navbar.component";
import SimpleCard from "./components/cardSimple.component";
import DetailedCard from "./components/cardDetailed.component";
import Overview from "./components/eventOverview.component";
import NewEventForm from "./components/createEvent.component";

//////////////////////// DATA \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function Events(props) {
  const client = props.client
  const [token, setToken] = useState(window.localStorage.getItem("token"))

  const [detailedEvent, setDetailedEvent] = useState({});
  const [simpleEvent, setSimpleEvent] = useState({});

  return (
    <>
      <NavigationBar />
      <Container>
        <Routes>
          <Route path="/" element={<SimpleCard />} />
          <Route path="/event" element={<Overview />} />
          <Route
            path="/newevent"
            element={<NewEventForm client={client} loggedIn={token} />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default Events;
