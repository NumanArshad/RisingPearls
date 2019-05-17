import React,{Component} from 'react';
import ButtonAppBar from './MenuBar'
import Artboard from '../Images/Artboard.jpg'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import firebase from '../../config/fbconfig';
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

class AddMember extends React.Component {
constructor(props) {
    super(props);
      this.state={memberImageURL:'',status:'',name:'',dept:'',session:'',contact:'',loginId:'',password:'',selectedFile:''}
      this.handleAddMember=this.handleAddMember.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.fileSelectorHandler=this.fileSelectorHandler.bind(this);
      this.uploadFile=this.uploadFile.bind(this);

    }
    handleAddMember(){
      // imageURL,name,status,session,contact,dept,loginId,password
     // imageURL,name,status,session,contact,dept,loginId,password
      alert(this.state.memberImageURL)
      this.props.handleAddMember(this.state.memberImageURL,this.state.name,this.state.status,this.state.session,this.state.contact,this.state.dept,
        this.state.loginId,this.state.password);

    }
    handleChange = name => event => {
      this.setState({
          [name]: event.target.value,
      });
    }


    fileSelectorHandler(event){
      this.setState({selectedFile:event.target.files[0]});
      this.setState({visible:'visible'})
      alert('file '+event.target.files[0].name+" of "+event.target.files[0].size+" bytes is selected for upload");
      
    }
  
    
   
    uploadFile(){
    const fd=new FormData();
      fd.append('image',this.state.selectedFile,this.state.selectedFile.name)
      axios.post("https://us-central1-risingpearlsweb-23e42.cloudfunctions.net/uploadFile",fd,{
        onUploadProgress:progressEvent=>{

        if(!isNaN(progressEvent.loaded/progressEvent.total*100)){
        console.log("Upload progress :"+ Math.round(progressEvent.loaded/progressEvent.total*100)+'%');
        this.setState({completed:Math.round(progressEvent.loaded/progressEvent.total*100)}) 
        }
        else{
          console.log("again")
          this.uploadFile();
        }
      
      }
        }).then(res=>{  console.log(res);
          const storage=firebase.storage();
        storage.ref(this.state.selectedFile.name).getDownloadURL().then(imageurl => {
         console.log(imageurl); this.setState({memberImageURL:imageurl,//open:false,completed:0
        });
         alert(imageurl)
        this.handleAddMember();
        }
        )})
          }
render() {
const { classes } = this.props;
 const { theme } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{textAlign:'center'}}>
            <Typography color="inherit" variant="display1" style={{backgroundColor:'#3f50b5',color:'white'}}>Add New Member</Typography>
            <br />

            <form className={classes.container}>
            <input type="file" onChange={this.fileSelectorHandler}  />
            <br />
           
             <TextField onChange={this.handleChange('name')}  id="filled-multiline-flexible" label="Member Name"  
              placeholder='Enter member name here'  value={this.state.name} className={classes.textField} margin="normal" 
              style={{width:185}} variant="filled"  />
              <br />

              <TextField onChange={this.handleChange('dept')}  id="filled-multiline-flexible" label="Department"  
              placeholder='Enter department name here'  value={this.state.dept} className={classes.textField} margin="normal" 
              style={{width:185}} variant="filled"  />
              <br />

              <TextField onChange={this.handleChange('session')}  id="filled-multiline-flexible" label="Enter Session"  
              placeholder='Enter Session here'  value={this.state.session} className={classes.textField} margin="normal" 
              style={{width:185}} variant="filled"  />
              <br />

              <TextField onChange={this.handleChange('contact')}  id="filled-multiline-flexible" label="Contact Number"  
              placeholder='Enter contact number here'  value={this.state.contact} className={classes.textField} margin="normal" 
              style={{width:185}} variant="filled"  />
              <br />

              <TextField onChange={this.handleChange('status')}  id="filled-multiline-flexible" label="Enter status"  
              placeholder='Enter member status here'  value={this.state.status} className={classes.textField} margin="normal" 
              style={{width:185}} variant="filled"  />
              <br />

              <FormControl style={{width:185}}>
          <Select onChange={this.handleChange('status')} displayEmpty value={this.state.status} >
              <MenuItem value=''><em>--Select--</em></MenuItem>
              <MenuItem value='Coordinator'>Coordinator</MenuItem>
              <MenuItem value='President'>President</MenuItem>
          </Select>
        </FormControl><br />

              <TextField onChange={this.handleChange('loginId')}  id="filled-multiline-flexible" label="Member login Id"  
              placeholder='Enter login Id here'  value={this.state.loginId} className={classes.textField} margin="normal" 
              style={{width:185}} variant="filled"  />
              <br />

              <TextField onChange={this.handleChange('password')}  id="filled-multiline-flexible" label="Member login password"  
              placeholder='Enter password here'  value={this.state.password} className={classes.textField} margin="normal" 
              style={{width:185}} variant="filled"  />
              <br />

          <Button variant="contained" color="primary" style={{textAlign:'center',marginTop:10}} onClick={this.uploadFile}>Post</Button>
              </form>
 </div>  
       

      </MuiThemeProvider>
        );
    }
}




AddMember.propTypes = {
    classes: PropTypes.object,
  };
  
  export default withStyles(styles)(AddMember);
