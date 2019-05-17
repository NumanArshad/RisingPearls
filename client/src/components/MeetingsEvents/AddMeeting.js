import React,{Component} from 'react';
import ButtonAppBar from './MenuBar'
import Artboard from '../Images/Artboard.jpg'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
//import ImgMediaCard from './ShowCard'
import TextField from '@material-ui/core/TextField';
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    ,
    container: {
       // display: 'flex',
      //  flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
})

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

class AddMeeting extends React.Component {
constructor(props) {
        super(props);
        this.state={announcement:'',category:''//,date:''
        ,eventTitle:'',disableTitle:true}
        this.handleChange=this.handleChange.bind(this);
          this.call=this.call.bind(this);  
    }
    handleChange = name => event => {
      this.setState({
          [name]: event.target.value,
      });
    
      if([name]=='category' &&  event.target.value=='Events'){
     //  alert('call'+event.target.value.length)
        this.setState({disableTitle:false})
   }
  else  if([name]=='category' &&  event.target.value=='Meeting'){
    //    alert('call'+this.state.displayTitle)
        this.setState({disableTitle:true})
   }
    }
    // componentDidMount(){
    //   if(this.props.memberId==undefined){
        /*
        Assalam u alaikum guys we are going to arrange welcome party for 2018 and 
        it will be held next month on 2 january after 8 pm at height and delight hotel  and 
        partition of all  of you is mandantory so please make sure your partiton thank you*/
    //     this.props.handleAnnouncementList();
    //   }
    // }
    
    call(){
      var dateObj=new Date();
      var currentDate=dateObj.getFullYear()+'-'+(dateObj.getMonth()+1)+'-'+dateObj.getDate();
alert(currentDate);
//    alert("today is "+d.getDate()+"now month is "+(d.getMonth()+1)+"year"+d.getFullYear()+"type is "+typeof(d.getFullYear()))
    this.props.handleAboutUsClick(this.state.announcement,this.state.eventTitle,this.state.category,currentDate,this.props.memberId);
     // alert(this.state.announcement)
    }
render() {

  const { classes } = this.props;
   const { theme } = this.props;
    return (
          //  <MuiThemeProvider theme={theme}>
      <div style={{textAlign:'center'}}>
        <Typography color="inherit" variant="display1" style={{backgroundColor:'#3f50b5',color:'white'}}>Announcement for Meeting</Typography>
        <br />

        <Typography color="primary" variant="title">Post Announcement </Typography>
                  {/* <p style={{color: 'red'}}>{errorMessage}</p> */}
        <form className={classes.container}>
         <TextField onChange={this.handleChange('announcement')} id="filled-multiline-flexible" label="Announcement" multiline
          placeholder='Enter message here' rowsMax="4" value={this.state.announcement} className={classes.textField}  
          margin="normal"
        //  helperText="hello"
          variant="filled" /><br /><br />

        {/* <TextField  id="date" type="date"  onChange={this.handleChange('date')}  placeholder='mm/dd/yyyy' 
        style={{width:185}} margin="normal"  variant="filled"  value={this.state.date} /><br /><br /> */}

        <FormControl style={{width:185}}>
          <Select onChange={this.handleChange('category')} displayEmpty value={this.state.category} >
              <MenuItem value=''><em>--Select--</em></MenuItem>
              <MenuItem value='Meeting'>Meeting</MenuItem>
              <MenuItem value='Events'>Events</MenuItem>
                    {/* {this.state.allFlights.map((flight) => {
                      return <MenuItem value={flight}>{flight}</MenuItem>
                    })} */}
          </Select>
        </FormControl><br />
                
                
        <TextField onChange={this.handleChange('eventTitle')}  id="filled-multiline-flexible"
         label="Event Title"  placeholder='Enter Event Title here'  value={this.state.eventTitle} 
         className={classes.textField} margin="normal" style={{width:185}}
        //  helperText="hello"
        // style={{display:ishide}}
          variant="filled"   disabled={this.state.disableTitle} />
          <br />
          
          <Button variant="contained" color="primary" style={{textAlign:'center',marginTop:10}} 
          onClick={this.call}>Post</Button>
          {/* <input type="button" onClick={this.call} value="Post" /> */}
      </form>
 </div>  
       
  //  </MuiThemeProvider>
        );
    }
}

AddMeeting.propTypes = {
    classes: PropTypes.object,
  };
  
  export default withStyles(styles)(AddMeeting);
