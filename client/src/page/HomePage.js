import React from "react";
import {
  // MDBEdgeHeader,
  // MDBFreeBird,
  MDBAnimation,
  // MDBCol,
  // MDBRow,
  // MDBCardBody,
  MDBBtn,
  MDBIcon,
  // MDBView,
  // MDBJumbotron,
  // MDBContainer
} from "mdbreact";
import "./HomePage.css";

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
      // <MDBView className="views">
      //   {/* <MDBEdgeHeader color="indigo darken-3" className="sectionPage" /> */}
      //   <div className="mt-3 mb-5">

      //     <MDBAnimation type="zoomIn" duration="500ms">
      //       <MDBFreeBird>
      //         <MDBRow>
      //           <MDBCol
      //             md="10"
      //             className="mx-auto float-none white z-depth-1 py-2 px-2"
      //           >
      //             <MDBCardBody className="text-center">
      //               <h1 className="h1-responsive mb-4">
      //                 ENTRY MANAGEMENT SOFTWARE
      //            </h1>
      //               <MDBRow />
      //               <MDBRow center>
      //               <MDBBtn color="success" href="checkin">
      //                <MDBIcon icon="angle-right" className="mr-1" /> Check In
      //               </MDBBtn>
      //               <MDBBtn color="default" href="/checkout">
      //                 <MDBIcon icon="angle-left" className="ml-1" /> Check Out
      //               </MDBBtn>
      //               </MDBRow>
      //             </MDBCardBody>
      //           </MDBCol>
      //         </MDBRow>
      //       </MDBFreeBird>
      //     </MDBAnimation>
      //   </div>
      // </MDBView>

      <MDBAnimation type="zoomIn" duration="500ms">
        <div className="mx-5">
          <br/>
                    {/* <MDBContainer > */}
                    <br/><br/><br/><br/><br/>
                        {/* <MDBRow className=" text-left text-md-left"> */}
                            {/* <MDBCol md="12" > */}
                                {/* <MDBJumbotron className="mt-3"> */}
                                    <div className="text-left">

                                        {/* <b className="display-4">InOut:</b>&nbsp; */}
                                        <b className="display-4 text-muted">Entry Management System</b>
                                        
                                    </div>
                                    {/* <hr/> */}
                                    <br></br>
                                      {/* <MDBContainer> */}
                                      {/* <MDBRow left> */}
                                      <MDBBtn color="success" href="/checkin">
                                        <MDBIcon icon="angle-right" className="mr-1" /> Check In
                                      </MDBBtn>
                                      <MDBBtn color="default" href="/checkout">
                                        <MDBIcon icon="angle-left" className="ml-1" /> Check Out
                                      </MDBBtn>
                                      {/* </MDBRow> */}
                                      {/* </MDBContainer> */}
                                {/* </MDBJumbotron> */}
                            {/* </MDBCol> */}
                        {/* </MDBRow> */}
                    {/* </MDBContainer> */}
                </div>
                </MDBAnimation>
    );
  }
}

export default HomePage;
