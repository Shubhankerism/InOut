import React, { Component } from "react";
import validator from 'validator';
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

import axios from 'axios';

// Check In Component

class CheckInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hname: "",
            hphone: "",
            hemail: "",
            vname: "",
            vphone: "",
            vemail: "",
            disable: 'true'
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        if (!validator.isEmpty(this.state.vname) && validator.isMobilePhone(this.state.vphone, ['en-IN']) && validator.isEmail(this.state.vemail) &&
            !validator.isEmpty(this.state.hname) && validator.isMobilePhone(this.state.hphone, ['en-IN']) && validator.isEmail(this.state.hemail)) { this.setState({ disable: false }); }
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        var self = this;
        axios.post('/api/checkin', {
            vemail: this.state.vemail,
            vphone: this.state.vphone,
            vname: this.state.vname,
            hemail: this.state.hemail,
            hphone: this.state.hphone,
            hname: this.state.hname
        })
            .then(function (response) {
                if (response.status === 200) {
                    window.alert("You have successfully checked in.");
                    self.props.history.push('/');
                }

            })
            .catch(function (error) {
                window.alert("Duplicate Entry.");
                console.log(error);
            });
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
                                        <MDBIcon icon="angle-double-right" />

                                        &nbsp;Check In
                                    </h1>
                                    <hr /> <br />
                                    <h3>Enter Visitor's Details:</h3>
                                    <MDBInput label="  Name" type="text" required
                                        name="vname"
                                        onChange={this.onChange}
                                        value={this.state.vname}
                                    />
                                    {validator.isEmpty(this.state.vname) ? <span style={{ color: "red" }}>Please enter a name.</span> : null}

                                    <MDBInput label="Phone Number" type="text" required
                                        onChange={this.onChange}
                                        value={this.state.vphone}
                                        name="vphone" />

                                    {!validator.isMobilePhone(this.state.vphone, ['en-IN']) ? <span style={{ color: "red" }}>Please enter a valid mobile number.</span> : null}

                                    <MDBInput label="E-mail" type="email" required
                                        onChange={this.onChange}
                                        value={this.state.vemail}
                                        name="vemail" />

                                    {!validator.isEmail(this.state.vemail) ? <span style={{ color: "red" }}>Please enter a valid email.</span> : null}

                                    <hr /> <br />
                                    <h3>Enter Host's Details:</h3>
                                    <MDBInput label="Name" type="text" required
                                        name="hname"
                                        onChange={this.onChange}
                                        value={this.state.hname}
                                    />
                                    {validator.isEmpty(this.state.hname) ? <span style={{ color: "red" }}>Please enter a name.</span> : null}
                                    <MDBInput label="  Phone Number" type="text" required
                                        onChange={this.onChange}
                                        value={this.state.hphone}
                                        name="hphone" />
                                    {!validator.isMobilePhone(this.state.hphone, ['en-IN']) ? <span style={{ color: "red" }}>Please enter a valid mobile number.</span> : null}
                                    <MDBInput label="  E-mail" type="email" required
                                        onChange={this.onChange}
                                        value={this.state.hemail}
                                        name="hemail" />
                                    {!validator.isEmail(this.state.hemail) ? <span style={{ color: "red" }}>Please enter a valid email.</span> : null}

                                    {this.state.disable ?
                                        <MDBBtn
                                            className="text-center btn btn-lg btn-block" color="success"
                                            onClick={this.onSubmit.bind(this)}
                                            disabled
                                        >
                                            Check In
                                    </MDBBtn>
                                        :
                                        <MDBBtn
                                            className="text-center btn btn-lg btn-block" color="success"
                                            onClick={this.onSubmit.bind(this)}

                                        >
                                            Check In
                                    </MDBBtn>
                                    }
                                </MDBJumbotron>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBAnimation>
            </>
        );
    }
};

export default CheckInPage;
