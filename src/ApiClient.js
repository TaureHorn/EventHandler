import axios from "axios";
const authUrl = "https://eventhandler-api.onrender.com//auth"
// const authUrl = "http://localhost:3001/auth"
const url = "https://eventhandler-api.onrender.com/event"
// const url = "http://localhost:3001/event"
const rootUrl = "https://eventhandler-ajfi.onrender.com/"
// const rootUrl = "http://localhost:3000/"


export class ApiClient {
    constructor(tokenProvider, logoutHandler) {
        this.tokenProvider = tokenProvider;
        this.logoutHandler = logoutHandler;
    }
    
    authenticatedCall(method, url, data) {
        return axios({
            method,
            url,
            headers: {
                authorization: this.tokenProvider(),
            },
            data,
        }).catch((err) => {
            if (err?.response.status === 401 || err?.response.status === 403 ) {
                this.logoutHandler();
            } else { throw err; }
        });
    }

    async login(userName, password) {
        console.log(`${authUrl}`, {userName, password})
        const response = await axios.post(`${authUrl}`, {userName, password});        
        console.log(response)
        return response        
    }
    // new event by individual parameters
    // addEvent(name, location, info, date, time) {
    //     return this.authenticatedCall("post", url, { name, location, info, date, time});
    // }

    // add event by object
    addEvent(obj) {
        return this.authenticatedCall("post", `${url}/create`, obj);
    }
    
    // get all
    getAllEvents() {
        return this.authenticatedCall("get", url)
    }

    // get by id
    getEventById(eventId) {
        return this.authenticatedCall("get", `${url}/${eventId}`)
    }

    // get by name
    getEventsByName(eventName) {
        return this.authenticatedCall("get", `${url}?name=${eventName}`)
    }

    // get by location
    getEventsByLocation(location) {
        return this.authenticatedCall("get", `${url}?location=${location}`)
    }

    // get by date
    getEventsByDate(date) {
        return this.authenticatedCall("get", `${url}?date=${date}`)
    }

    // get by time
    getEventsByTime(time) {
        return this.authenticatedCall("get", `${url}?time=${time}`)
    }

    // delete specific
    deleteEventById(id) {
        console.log(`${url}/delete/${id}`)
        return this.authenticatedCall("delete", `${url}/delete/${id}`);        
    }

    // delete all
    deleteAllEvents() {
        return this.authenticatedCall("delete", url);
    }

    // update
    updateEvent(eventId, eventData) {
        return this.authenticatedCall("put", `${url}/${eventId}`, eventData);
    }
}