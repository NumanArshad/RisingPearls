import React,{Component} from 'react';
import ButtonAppBar from './MenuBar'
import Artboard from '../Images/Artboard.jpg'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ImgMediaCard from './ShowCard'
// import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const authorityList=[
    {status:'coordinator',
    dept:'Electrical Engineering',
    session:'18 session',
    contact:'+923086415241'},

    {status:'coordinator',
    dept:'Civil Engineering',
    session:'17 session',
    contact:'+923086415241'},

    {status:'President',
    dept:'MechanicalEngineering',
    session:'15 session',
    contact:'+923086415241'},
    
    {status:'coordinator',
    dept:'Civil Engineering',
    session:'16 session',
    contact:'+923086415241'},
    
    {status:'coordinator',
    dept:'Computer Science',
    session:'15 session',
    contact:'+923086415241'}
]
const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
      },
    Img:{
    width: '100%',
    height: "100%",
    
    backgroundImage: `url(${Artboard})`,
    backgroundSize: 'cover',
    backkgroundRepeat: 'no-repeat',
    paddingTop:'3%',
    paddingBottom: '3%'
    },
    root: {
        flexGrow: 1,
        // marginLeft:10,
        // marginRight:10,
        // marginTop:10
        margin:10
      },
})
class AboutUs extends React.Component {
constructor(props) {
        super(props);
        this.state={memberlist:[],isAdminMode:false,cardCursor:'pointer'}
           
    }
    componentDidMount(){
        if(this.props.memberlist.length>2){
for(var i=0;i<this.props.memberlist.length;i++){
if(this.props.memberlist[i].status=='President' && i!=2){
    alert('president is at'+i+"index");
    var PresidentObj=this.props.memberlist[i];
    this.props.memberlist.splice(i,1)
    this.props.memberlist.splice(2,0,PresidentObj)
   break;
 
}
}
        }

this.setState({memberlist:this.props.memberlist})
        alert("at load call")
        if(this.props.adminId!=undefined){
            alert("yah admin mode");
            this.setState({isAdminMode:true,cardCursor:'default'})
        }
        
    }
    showHistory(history){
       // alert(history.imageURL)
//md={3} lg={3} style={{cursor:'pointer'}}

if(history.status=="President"){
        return <Grid item md={3} lg={3} xs style={{cursor:this.state.cardCursor}}><ImgMediaCard status={history.status} dept={history.dept} session={history.session}
        contact={history.contact} handleAddMeetingClick={this.props.handleAddMeetingClick} imageURL={history.imageURL}
        memberId={history._id} name={history.name} adminId={this.props.adminId} /></Grid>
    }
else{
    return <Grid item xs style={{cursor:this.state.cardCursor}}><ImgMediaCard status={history.status} dept={history.dept} session={history.session}
    contact={history.contact} handleAddMeetingClick={this.props.handleAddMeetingClick} imageURL={history.imageURL}
    memberId={history._id} name={history.name} adminId={this.props.adminId} /></Grid>
}
}
render() {
        const { classes } = this.props;
 const { theme } = this.props;
//  var list=[]
//  if(authorityList.length>0){
// list=authorityList.map((obj)=>
//     <Grid item><Typography variant='display3'>{obj.dept}
//         </Typography></Grid>
// );
//  }
var isEditMode = (this.props.adminId != undefined) ? "visible" :"none"

        return (
          <div>
              <ButtonAppBar handleHomeClick={this.props.handleHomeClick} />
              <Typography variant="display1" style={{color:'black',fontWeight:'bold',marginTop:10}} align="center" gutterBottom>About us</Typography>
              {/* <ImgMediaCard handleAddMeetingClick={this.props.handleAddMeetingClick} /> */}
              {/* <Grid container>{list}</Grid> */}
              {/* <Fab color="primary" aria-label="Add" className={classes.fab}> */}
             <Button color="primary" variant="contained" style={{display:isEditMode}} onClick={()=>this.props.handleAddMemberClick()}>
             Add New Member</Button>
             <br />
      {/* </Fab> */}
              <div className={classes.root}>
              <Grid container spacing={24} >
         {/* {authorityList.map((history)=>{ */}
         {this.state.memberlist.map((history)=>{ 
  return this.showHistory(history);
         })}</Grid>
         </div>
 </div>  
       
    
        );
    }
}




AboutUs.propTypes = {
    classes: PropTypes.object,
  };
  
  export default withStyles(styles)(AboutUs);
