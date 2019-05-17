import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class LoginSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
        this.props.handleBackClick();
    }

    render() {
        return (
          <div>
            <h1>You have been logged in successfully</h1>
            <Button variant="contained" color="primary" onClick={this.handleClick}>Back</Button>
            </div>
        );
    }
}



export default withRouter(LoginSuccess);
