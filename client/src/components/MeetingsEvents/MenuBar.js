import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import MenuListComposition from './MenuList';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = theme => ( {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },


//badge
  margin: {
  margin: theme.spacing.unit * 2,
  },
  padding: {
   padding: `0 ${theme.spacing.unit * 2}px`,
  },
})

class  ButtonAppBar extends React.Component {
  constructor(props){
super(props);
  }
  render(){
    const { classes } = this.props;
 const { theme } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        {/*   <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
           <Grid container spacing={8}  direction="row">
          <Button color="inherit" onClick={()=>{this.props.history.push('/')}} >Home</Button>
          <Button color="inherit" onClick={this.props.handleAboutUsClick}>About Us</Button>
          <Button color="inherit" onClick={this.props.handleShowMeetingClick} >Meetings</Button>
          <Button color="inherit">Events</Button>
          
          <MenuListComposition handleExpansionClick={this.props.handleExpansionClick} /></Grid>
        
        </Toolbar> 
          {/* <Tabs value={0}>
          <Tab
            label={
              <Badge className={styles.padding} color="secondary" badgeContent={4}>
                Item One
              </Badge>
            }
          />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs> */}
      </AppBar>
    </div>
  );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ButtonAppBar));
