import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
} from 'mdbreact';
import { ReactComponent as Logo } from './assets/logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collapseID => () => {
    window.scrollTo(0, 0);
    this.state.collapseID === collapseID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>

        <div className='flyout'>
          {/* Navbar */}
          <MDBNavbar color='black' dark expand='md' fixed='top' scrolling>
            <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
              <Logo style={{ height: '2.5rem', width: '2.5rem' }} />
              <strong className='align-middle'>InOut</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
            <MDBCollapse
              id='mainNavbarCollapse'
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Home</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/checkin'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Check In</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/checkout'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Check Out</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/current'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Current Visitors</strong>
                  </MDBNavLink>
                </MDBNavItem>


                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/past'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Past Visitors</strong>
                  </MDBNavLink>
                </MDBNavItem>


              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
          <main style={{ marginTop: '4rem' }}>
            <Routes />
          </main>

          {/* footer */}
          <MDBFooter color='black'>
            <p className='footer-copyright mb-0 py-3 text-center'>

              <a href='https://shubhankerism.github.io/'> <u>Find about the developer here. </u></a>
            </p>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
