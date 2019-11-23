import React from "react";
import {
  MDBAnimation,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import "./HomePage.css";

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
      <MDBAnimation type="zoomIn" duration="500ms">
        <div className="mx-5">
          <br /><br /><br /><br /><br /><br />
          <div className="text-left">
            <b className="display-4 shadow-box-example z-depth-2">Entry Management System</b>

          </div>
          <br></br>
          <MDBBtn color="success" href="/checkin" className="shadow-box-example z-depth-2">
            <MDBIcon icon="angle-right" className="mr-1" /> Check In
              </MDBBtn>
          <MDBBtn color="default" href="/checkout" className="shadow-box-example z-depth-2">
            <MDBIcon icon="angle-left" className="ml-1" /> Check Out
              </MDBBtn>
        </div>
      </MDBAnimation>
    );
  }
}

export default HomePage;
