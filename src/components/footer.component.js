import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter className="footer">
      <MDBContainer className="footer p-4">
        <MDBCol lg="10" md="12" className="mb-4 mb-md-0">
          <h5 className="foot-eventhandler">.EventHandler</h5>
          <p className="foot-words">
            {" "}
            A simple webpage for tracking events and their details. What more do
            you need?
          </p>
          <p className="foot-words">
            {" "}
            <sup>That question is rhetorical</sup>
          </p>
          <div className="foot-copyright">
            &copy; {new Date().getFullYear()} <span>Copyright:</span>{" "}
            <a href="https://mdbootstrap.com/">eventhandler.com</a>
          </div>
        </MDBCol>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;
