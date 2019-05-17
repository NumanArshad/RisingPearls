import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class RegisterSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    
    }

    handleClick(event) {
        //this.props.history.pop('http://localhost:3001');
        this.props.history.push('/');
      //  <a href='https://www.facebook.com/' />
      window.location.href="https://www.facebook.com/"
    
    }

    render() {
        return (
          <div>
            <h1>You have been registered successfully</h1>
            <Button variant="contained" color="primary" onClick={this.handleClick}>Login</Button>
            </div>
        );
    }
}



export default withRouter(RegisterSuccess);
