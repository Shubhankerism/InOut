import React, { Component } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBAnimation, MDBJumbotron } from 'mdbreact';
import axios from 'axios';
import moment from 'moment';

//Past Visitors Component

class past extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
  }

  componentDidMount() {
    const self = this;
    axios.get('/api/past')
      .then(function (response) {
        console.log(response.data);
        if (response.data.length) {
          self.setState({ data: response.data });
        }
      })
      .catch(function (error) {
        window.alert("Oops, something wrong occured. Try again later.");
        console.log(error);
      });
  }
  render() {
    const temp = Array.from(this.state.data);
    var items = temp.map((item) =>
      <tr>
        <td>{item.vname}</td>
        <td>{item.hname}</td>
        <td>{moment.unix(item.intime).format('L')}</td>
        <td>{moment.unix(item.intime).format('LT')}</td>
        <td>{moment.unix(item.out_time).format('LT')}</td>
      </tr>
    );

    var title = <MDBJumbotron className="mt-3">{this.state.data.length ? null : <h2 className="text-center mb-1">Oops, no past visitors!</h2>}</MDBJumbotron>
    return (
      <MDBAnimation type="zoomIn" duration="500ms">

        <MDBContainer>
          {this.state.data.length ?
            <MDBJumbotron className="mt-3">
              <h2 className="text-center mb-1">Past Visitors</h2> <hr />
              <MDBTable>

                <MDBTableHead>
                  <tr>
                    <th>Visitor's Name</th>
                    <th>Host's Name</th>
                    <th>Date</th>
                    <th>In-time</th>
                    <th>Out-time</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {items}
                </MDBTableBody>
              </MDBTable>
            </MDBJumbotron>

            : title}
        </MDBContainer>
      </MDBAnimation>
    );
  }

}


export default past;
