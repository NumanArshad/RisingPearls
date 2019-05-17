import React,{Component} from 'react';
import ButtonAppBar from './MenuBar'
import Artboard from '../Images/Artboard.jpg'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SwipeableTextMobileStepper from './ImageSlider';
import PrimarySearchAppBar from './NotificationAppBar'
//import Navigationbar from './Navbar'
import Slideshow from './SlideShow'
const styles = theme => ({
    Img:{
    width: '100%',
    height: "100%",
    
    backgroundImage: `url(${Artboard})`,
    backgroundSize: 'cover',
    backkgroundRepeat: 'no-repeat',
    paddingTop:'3%',
    paddingBottom: '3%'
    }
})
class DashboardContainer extends React.Component {
constructor(props) {
        super(props);
    //   this.state = {username:'',password:''};
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    //           this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

//     handleChange(event) {
//         this.setState({[event.target.id] : event.target.value})
//     }
//  handleSubmit(event) {
//         event.preventDefault();
//         this.props.handleSignIn(this.state.username,this.state.password)

//     }
//  handleSubmit2(event) {
//         event.preventDefault();
// this.props.handleForgetClick(); <img src={Logo} style={{width:'300px'}}/>
//     }

    render() {
        const { classes } = this.props;
 const { theme } = this.props;
        return (
          <div>
 <ButtonAppBar handleAboutUsClick={this.props.handleAboutUsClick} 
 handleShowMeetingClick={this.props.handleShowMeetingClick} handleExpansionClick={this.props.handleExpansionClick} />
{/* <PrimarySearchAppBar /> */}
<Slideshow />  
 {/* <SwipeableTextMobileStepper />  */}
{/* <Grid container className={classes.Img} justify='center'> 
    <Grid item>
               
                  <Typography variant="display3" align="center" style={{ color: 'white', fontWeight: 'bold' }} >
                    Rising Pearls
                </Typography>
                  <br />
                  <Typography variant="display1" className={classes.fontC} size="small" align="center" style={{ color: 'white' }}>
                    Khanewalians
                </Typography>
                  <Typography variant="display1" align="center" style={{ color: 'white' }}>
                    We are here for you available 24/7!
                </Typography>
                  <Typography variant="display1" align="center" style={{ color: 'white' }}>
                    Lets Plan
                </Typography>
               
              
            
         </Grid>
            </Grid> */}
                </div>  
       
    
        );
    }
}




DashboardContainer.propTypes = {
    classes: PropTypes.object,
  };
  
  export default withStyles(styles)(DashboardContainer);




/* <center >
                    <Button variant="outlined" onClick={this.props.handleFilter} style={{ color: 'white' }} className={classes.button}>
                      Learn more
                </Button>
                    <Button variant="contained" color="secondary" onClick={this.props.handleBooking} className={classes.button}>
                      Plan Your Trip
                </Button>
                  </center> */