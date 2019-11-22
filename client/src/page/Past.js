import React, { Component }from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

class past extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
                    columns: [
                      {
                        label: 'Visitor Name',
                        field: 'vname',
                        // sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'Host Name',
                        field: 'position',
                        //sort: 'asc',
                        width: 150
                      },
                      
                    ],
                    rows: []
                }  
        }
    
    componentWillMount(){
      let r=[];
        axios.get('/api/past')
          .then(function (response) {
            console.log(response);
            if(response.data){
                for(var i=0;i<response.data.length;i++)
                  r.push(response.data[i]);
            }
            //console.log(r);
            this.setState({rows:r});
          })
          .catch(function (error) {
            window.alert("No such visitor exists. Please provide correct email.");
            console.log(error);
          });
    }
    render(){
        return(
            <div>
               <MDBDataTable
      striped
      bordered
      hover
      data={this.state}
    />
            </div>
        );
    }

    }

    
export default past;
