import React, { Component } from "react";
import validator from 'validator';
import axios from 'axios';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBJumbotron,
    MDBInput,
    MDBIcon,
    MDBBtn,
    MDBAnimation
} from "mdbreact";

//Check Out Component

class CheckOutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });

    }
    onSubmit(e) {
        e.preventDefault();
        var self = this;
        if (validator.isEmail(this.state.email)) {
            console.log("Valid Email for checkout");

            axios.post('/api/checkout', {
                vemail: this.state.email
            })
                .then(function (response) {
                    if (response.status === 200) {
                        window.alert("You have successfully checked out.");
                        self.props.history.push('/');
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
    }
    render() {
        return (
            <>
                <MDBAnimation type="zoomIn" duration="500ms">
                    <MDBContainer >
                        <MDBRow>
                            <MDBCol md="8" className="mx-auto">
                                <MDBJumbotron className="mt-3">
                                    <h1 className="text-center">
                                        <MDBIcon icon="angle-double-left" />

                                        &nbsp;Check Out
                                    </h1>
                                    <hr />
                                    <h3>Enter Visitor's Email ID:</h3>
                                    <MDBInput label="Email" type="email"
                                        name="email"
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
