import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'
import validator from 'validator';
import axios from 'axios';
import {
    // MDBEdgeHeader,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBJumbotron,
    MDBInput,
    MDBIcon,
    MDBBtn,
    MDBAnimation
} from "mdbreact";




class CheckOutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           email:""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.move = this.move.bind(this);
       
    }

 
    // move(){
    //     return <Redirect to='/checkin'/>
    // }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      
    }
    onSubmit(e) {
        e.preventDefault();
        //console.log(this.state);
        if(validator.isEmail(this.state.email)){
            console.log("Valid Email for checkout");

            axios.post('/api/checkout', {
                vemail:this.state.email
              })
              .then(function (response) {
                if(response.status===200){
                    window.alert("You have successfully checked out.");
                   // this.state.move();
                    //window.location='/';
                   //this.props.history.push('/');
                }
               
              })
              .catch(function (error) {
                window.alert("No such visitor exists. Please provide correct email.");
                console.log(error);
              });
        }
        else {
            window.alert("Enter valid email.");
        }
        //console.log(this.state);
    }

    render() {
        return (
            <>
                {/* <MDBEdgeHeader color="blue darken-3" className="sectionPage" /> */}
                <MDBAnimation type="zoomIn" duration="500ms">
                    <MDBContainer >
                        <MDBRow>
                            <MDBCol md="8" className="mx-auto">
                                <MDBJumbotron className="mt-3">
                                    <h1 className="text-center">
                                        <MDBIcon icon="angle-double-left" />

                                        &nbsp;Check Out
                                    </h1>
                                    <hr/> 
                                    <h3>Enter Visitor's Email ID:</h3>
                                    <MDBInput label="Email" type="email"
                                        name="email"
                                        //value={this.state.email}
                                        onChange={this.onChange}
                                        value={this.state.name}
                                    />
                                  
                                    <MDBBtn
                                        className="text-center btn btn-lg btn-block" color="success"
                                        onClick={this.onSubmit.bind(this)}
                                    >
                                        Check Out
                                    </MDBBtn>
                                </MDBJumbotron>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBAnimation>
            </>
        );
    }
};

export default CheckOutPage;
