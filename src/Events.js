/// here goes all the logic and rendering for handling the frontend for events
/// gets called within the conditional rendering, either login or events.js

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import NavigationBar from "./components/navbar.component";
import Footer from "./components/footer.component";
import EventAccordion from "./components/eventAccordion.component";
import NewEventForm from "./components/createEvent.component";
import UpdateEventForm from "./components/updateEvent.component";

//////////////////////// DATA \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function Events(props) {
  const client = props.client;
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [events, setEvents] = useState([]);

  const [updateId, setUpdateId] = useState();

  const [updateTrigger, setUpdateTrigger] = useState();

  const getEvents = async () => {
    const data = await client.getAllEvents();
    setEvents(data.data);
  };

  // retriggers event fetch when prop passed from child to parent
  useEffect(() => {
    getEvents();
    console.log(updateTrigger);
  }, [updateTrigger]);

  return (
    <>
      <NavigationBar />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <EventAccordion
                client={client}
                events={events}
                getEvents={getEvents()}
                updateTrigger={(updateTrigger) =>
                  setUpdateTrigger(updateTrigger)
                }
                updateIdCatch={(updateId) => setUpdateId(updateId)}
              />
            }
          />
          <Route
            path="/newevent"
            element={
              <NewEventForm
                client={client}
                loggedIn={token}
                updateTrigger={(updateTrigger) =>
                  setUpdateTrigger(updateTrigger)
                }
              />
            }
          />
          <Route
            path="/updateevent"
            element={
              <UpdateEventForm
                client={client}
                events={events}
                updateId={updateId}
                updateTrigger={(updateTrigger) =>
                  setUpdateTrigger(updateTrigger)
                }
              />
            }
          />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default Events;
