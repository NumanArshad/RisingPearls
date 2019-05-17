import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './MenuBar'
import a from '../Images/a.jpg';
import b from '../Images/b.jpg';
import c from '../Images/c.jpg';
import d from '../Images/d.jpg';
import e from '../Images/e.jpg';
import f from '../Images/f.jpg';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import firebase from '../../config/fbconfig';
import '@firebase/firestore';
import '@firebase/storage'
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';


const styles = theme => ({
  
  root: {
    width: '100%',
    maxWidth: 360,
    
    backgroundColor: theme.palette.background.paper,
  },
  root2: {
    width: '100%',
   // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

const list=[
  {image:d,
  data:'Meeting at z hal on next friday'
  },
  {
  image:e,
  data:'Meeting at q hal on about 17 welcome'
  },
  {
  image:f,
  data:'Meeting at smart caffee on about 14 farewell '
  }
]

const eventsList=[
  {image:d,
  data:'Meeting at z hal on next friday'
  },
  {
  image:e,
  data:'Meeting at q hal on about 17 welcome Meeting at smart caffee on about 14 farewell'
  },
  {
  image:f,
  data:'Meeting at smart caffee on about 14 farewell'
  }
]


// class MeetingsChild extends React.Component{
//   constructor(props){
// super(props);
//   }
//   render(){
//     return(

//     )
//   }
// }

class ShowMeetings extends React.Component {
  constructor(props){
    super(props);
    this.state={open:false,selectedFile:null,url:''}
    this.fileSelectorHandler=this.fileSelectorHandler.bind(this);
    this.uploadFile=this.uploadFile.bind(this);
    //this.getURL=this.getURL.bind(this);
    
  }
  fileSelectorHandler(event){
    this.setState({selectedFile:event.target.files[0]});
    console.log('file '+event.target.files[0].name+" of "+event.target.files[0].size+" bytes is selected for upload");
  }
 
  uploadFile(){
    //this.state.selectedFile.size
    const fd=new FormData();
    fd.append('image',this.state.selectedFile,this.state.selectedFile.name)
    axios.post("https://us-central1-risingpearlsweb.cloudfunctions.net/uploadFile",fd,
  {
    onUploadProgress:progressEvent=>{
      console.log("Upload progress :"+ Math.round(progressEvent.loaded/progressEvent.total*100)+'%');
    }
  })
    .then(res=>{
     console.log(res);
     const storage=firebase.storage();
//console.log('jjjjj');
    storage.ref(this.state.selectedFile.name).getDownloadURL()
.then(imageurl => {
       console.log(imageurl);
        this.setState({open:false});

     })
      
    })

    /*firebaseReuest = (image) => {
        const fd = new FormData();
        fd.append('image', image, image.name);
        console.log(fd)
        axios.post('', fd, {

        })
            .then(res => {
                console.log(res);
                const storage = firebase.storage();
                storage.ref(image.name).getDownloadURL()
                    .then(imageurl => {
                        this.setState({ url: imageurl })
                        console.log(this.state.url)
                        //this.handleSubmit();
                    })

            })
    } */
    //alternate way
    /*const storage=firebase.storage();
    const uploadTask=storage.ref(`IMAGES/${this.state.selectedFile}`).put(this.state.selectedFile.name)
    uploadTask.onChange('state-chnaged',(snapshot)=>{
      console.log('upload successfully')
    },
    (error)=>{
      console.log('upload error is '+ error);
    },
    ()=>{
      //complete function 
      storage.ref('IMAGES').child(this.state.selectedFile.name).getDownloadURL()
      .then(url=>{console.log(url)});

    })*/
    
  }
  handleOpen = () => {
    alert("open")
  this.setState({ open: true });
};
 handleClose = () => {
  this.setState({ open: false });
};

  showData(anounce){
    const { classes } = this.props;
  return  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src={anounce.image} //'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60'
/>
    </ListItemAvatar>
    <ListItemText
      primary="Brunch this weekend?"
      secondary={
        <React.Fragment>
          <Typography component="span" className={classes.inline} color="textPrimary">
            {anounce.data}
          </Typography>
          {" — I'll be in your neighborhood doing errands this…"}
        </React.Fragment>
      }
    />
  </ListItem>
  }
  showEventData(anounce){
    const { classes } = this.props;
    
  return  <Grid container  direction="row" spacing={16}  alignItems={"center"} style={{marginLeft:10,marginRight:10}}
  >
  <Grid item className={classes.root} >
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src={anounce.image} //'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60'
/>
    </ListItemAvatar>
    <ListItemText
      primary="Brunch this weekend?"
      secondary={
        <React.Fragment>
          <Typography component="span" className={classes.inline} color="textPrimary">
            {anounce.data}
          </Typography>
          {" — I'll be in your neighborhood doing errands this…  — I'll be in your neighborhood doing errands this…"}
        </React.Fragment>
      }
    />
  </ListItem>
  
</Grid>
<Grid item>
<img src={a} style={{width:95,height:100}} //style={{width:70,height:'98%'}}
/>
</Grid>
<Grid item>
<img src={b} style={{width:95,height:100}}/>
</Grid>
<Grid item>
<img src={c} style={{width:95,height:100}}/>
</Grid>
<Grid item>
<img src={d} style={{width:95,height:100}}/>
</Grid>
<Grid item>
<img src={e} style={{width:95,height:100}}/>
</Grid>
<Grid item>
<img src={f} style={{width:95,height:100}}/>
</Grid>



{/* <Grid item>
<Grid container direction="column" spacing={8}>
<Grid item>
<Button color="primary" variant="contained" size="small">View All</Button>
</Grid>
<Grid item>
<Button color="primary" variant="contained" size="small">View All</Button>
</Grid>
<Grid item>
<Button color="primary" variant="contained" size="small">View All</Button>
</Grid>
</Grid>
</Grid> */}

<Grid item>
<Button color="primary" variant="contained" size="small" onClick={()=>this.props.handleShowEventImages()} >View All</Button>
</Grid>
<Grid item>
<Button color="primary" variant="contained" size="small">Download</Button>
</Grid>
<Grid item>
<Button color="primary" variant="contained" size="small" onClick={()=>this.setState({open:true})}>Upload</Button>
</Grid>
  </Grid>
  }

  render(){
    const { classes } = this.props;
      return (
      <div style={{textAlign:"center"}}>
      <ButtonAppBar />
      <br />
      
           <Typography color="inherit" variant="display1" style={{color:'black'}}>Meetings Updates</Typography>
          <br />
          <input type="button" value="get" />
          <Button color="primary" variant="outlined" size="small" onClick={()=>this.setState({open:true})}>Upload image</Button>

       
 <br />
     <List className={classes.root}>
{list.map((anounce)=>{
  return this.showData(anounce);
})}
     </List>

Events
      <List className={classes.root2}>
{eventsList.map((anounce)=>{
  return this.showEventData(anounce);
})}
     </List>

     {/*modal*/}
     <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Browse the image to be uploaded?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                   {/* <TextField
          id="passkey"
        //  onChange={this.handlepass} 
         // value={this.state.passkey} 
          label="passkey"
          /> */}
          <input type="file" onChange={this.fileSelectorHandler} />
            </DialogContentText>
          </DialogContent>
          <DialogActions> 
            <Button onClick={this.uploadFile} color="primary" autoFocus>
              DONE
            </Button>
           <Button onClick={this.handleClose} color="primary" autoFocus>
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>
            
{/*modal*/}
    </div>
  );
}
}
ShowMeetings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowMeetings);

/*<List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={f} //'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60'
 />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={f} //'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60' 
          />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    
    </List> */