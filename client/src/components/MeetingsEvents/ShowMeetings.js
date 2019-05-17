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
import d from '../Images/d.jpg';
import e from '../Images/e.jpg';
import f from '../Images/f.jpg';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import TextField from '@material-ui/core/TextField';

import LinearProgress from '@material-ui/core/LinearProgress';
//grid start
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import { Offline, Online } from "react-detect-offline";
import {storage} from '../../config/fbconfig';
const styles = theme => ({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 45,
    height: 45,
},
paper: {
  //padding: theme.spacing.unit * 2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
},
  rootProgressBar: {
    flexGrow: 1,
  },
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
  {image:d,data:'Meeting at z hal on next friday'},
  {image:e,data:'Meeting at q hal on about 17 welcome'},]
class ShowMeetings extends React.Component {
  constructor(props){
    super(props);
    this.state={open:false,selectedFile:null,imageURL:'',eventId:'', completed: 0,visible:'visible',
    memberlist:this.props.memberlist,loaded:false}
    this.fileSelectorHandler=this.fileSelectorHandler.bind(this);
    this.uploadFile=this.uploadFile.bind(this);
    this.showEvent=this.showEvent.bind(this);
    this.saveImageMongo=this.saveImageMongo.bind(this);
    
  }
 componentDidMount(){
   
   console.log('loading ....')
   if(this.props.adminId!=undefined){
     
   }
  }
showEvent(data){
return <h1>{data.memberImageURL}</h1>
  }

progress = () => {
  const { completed } = this.state;
  if (completed === 100) {
    this.setState({ completed: 0 });
  } 
};
//progress bar end

  fileSelectorHandler(event){
    this.setState({selectedFile:event.target.files[0]});
    this.setState({visible:'visible'})
    console.log('detail'+event.target.files[0]+'file '+event.target.files[0].name+" of "+event.target.files[0].size+" bytes is selected for upload");
   
   //alert(event.target.value);
  }
  
 
  uploadFile(){

    const {selectedFile}=this.state;
    
    const uploadTask = storage.ref(`images/${selectedFile.name}`).put(selectedFile);
    uploadTask.on('state_changed', 
    (snapshot) => {
      // progrss function ....
      const completed = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({completed});
     // alert("success");
    }, 
    (error) => {
         // error function ....
      console.log(error);
      alert(error);
    }, 
  () => {
      // complete function ....
      storage.ref('images').child(selectedFile.name).getDownloadURL().then(url => {
          console.log(url);
          this.setState({url});
      })
  });

}

        saveImageMongo(){
          alert("image url is "+ this.state.imageURL+" event id is "+this.state.eventId);
          this.props.handleuploadEventImage(this.state.eventId,this.state.imageURL)
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
  return  <ListItem //alignItems="flex-start"
  >
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
  const { memberImageURL } = anounce;
  
 
return <Grid item lg={4} md={4} sm={6} xs={12}>
<Paper className={classes.paper} style={{minHeight:300}}>
<Grid container direction="row" spacing={8} >
    <Grid item lg={2} md={2} sm={2} xs={2}>
    <Avatar alt="Remy Sharp" src={memberImageURL} className={classes.bigAvatar} />
       {/* <img src={memberImageURL} style={{width:50,height:50}} /> */}
    </Grid>
    <Grid item lg={7} md={7} sm={7} xs={7} style={{textAlign:'left',marginTop:10,marginLeft:5,//alignSelf:'center'
  }}>
    <Typography style={{fontWeight:'bold',color:'navy'}}>
     {anounce.eventTitle}</Typography>
    <Typography>
    Posted on {anounce.date}</Typography>
    {/* <Button color="primary" variant="contained" size="small" 
    onClick={()=>this.setState({eventId:anounce._id,open:true})}>Upload</Button> */}
    </Grid>
    
    <Grid item lg={2} md={2} sm={2} xs={2}><Online><Button color="primary" variant="contained" size="small" 
    onClick={()=>this.setState({eventId:anounce._id,open:true})}>Upload</Button></Online></Grid>

    <Grid item lg={12} md={12} sm={12} xs={12} style={{textAlign:'left',marginLeft:'15px',marginRight:'15px'}}>
    <Typography>{anounce.announcement}</Typography>
    </Grid>
</Grid>


<GridList cellHeight={120} style={{margin:5}}>  
{anounce.eventImages.map((Image,index)=>{
if(anounce.eventImages.length>4 && index==3){
   return  <GridListTile style={{cursor:'pointer'}} //key={tile.img} 
   onClick={()=>this.props.handleSpecificEventImagesList(anounce._id)}
    > <img src=//{naran}
    {Image.eventImageURL}   //alt={Image.eventImageURL} 
     />
     <GridListTileBar title='View More' style={{  width: '100%',height: "100%",
     backgroundColor:'rgba(0,0,0,0.1);',textAlign:'center'}}/>
   </GridListTile>
  
   }
   else if(index<4){
     return <GridListTile //key={tile.img} 
 > <img src={Image.eventImageURL} style={{width:'100%',height:'100%'}} //{Image.eventImageURL} 
  />
  </GridListTile>}
 })
 }
</GridList>
<Button variant="outlined" color="primary" size="small" //style={{visible:this.state.visible}}
>
Remove</Button>
</Paper>
</Grid>
}

  render(){
    const { classes } = this.props;
    // var isEditMode = (this.props.adminId != undefined) ? "visible" :"none"

      return (
      <div style={{textAlign:"center"}}>
     <ButtonAppBar />
      <br />
           <Typography color="inherit" variant="display1" style={{color:'black'}}>MeetingsUpdates</Typography>
          <br />
          
       

       
 <br />
     <List className={classes.root}>
{list.map((anounce)=>{
  return this.showData(anounce);
})}
     </List>

Events
<Grid container direction="row" spacing={24} style={{alignItems:'center',margin:'20px'}}>
      {/* <List className={classes.root2}> */}
{//eventsList
  
  this.state.memberlist.map((anounce)=>{
  return this.showEventData(anounce);
})}
</Grid>
  
     <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <LinearProgress color="secondary" style={{display:this.state.visible}} variant="determinate" value={this.state.completed} />

          <DialogTitle id="alert-dialog-title">{"Browse the image to be uploaded?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            
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