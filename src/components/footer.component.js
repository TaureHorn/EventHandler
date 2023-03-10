import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter className='footer text-center text-lg-left'>
        <MDBContainer className='footer p-4'>
            <MDBRow>
                <MDBCol lg='10' md='12' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase'>.EventHandler</h5>
                    <p> A simple webpage for tracking events and their details. What more do you need?</p>
                    <p> <sup>That question is rhetorical</sup></p>
                </MDBCol>

                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 compact'>
                    <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
                    <p>
                        <a label="tba" className='text-reset'>
                            Privacy Policy
                        </a>
                    </p>
                    <p>
                        <a label="tba" className='text-reset'>
                            Your data
                        </a>
                    </p>
                    <p>
                        <a label="tba" className='text-reset'>
                            Report content
                        </a>
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <div className='footer-base text-center p-3'>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a href='https://mdbootstrap.com/'>
                eventhandler.com
            </a>
        </div>
    </MDBFooter>
    );
}

export default Footer;