import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import AddMeeting from './AddMeeting';
// import d from '../Images/d.jpg';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ( {
  card: {
      width:'100%'
      
    //maxWidth: 200,
  },
  media: {
   
    objectFit: 'cover',
  },

  root: {
    flexGrow: 1,
    marginLeft:10,
    marginRight:10
  },
  paper: {
    //padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class ImgMediaCard extends React.Component {
    constructor(props){
        super(props);
        this.state={memberId:''}
        this.handleAddMeeting= this.handleAddMeeting.bind(this);

    }
    componentDidMount(){

      this.setState({memberId:this.props.memberId})
    }
    handleAddMeeting(){
      if(this.props.adminId==undefined){
      this.props.history.push('/Login/'+this.state.memberId);
      }
    }
 render(){
    const { classes } = this.props;
    const { imageURL } = this.props;
    var isEditMode = (this.props.adminId != undefined) ? "visible" :"none"
alert("before card"+this.props.adminId)
  return (
    // <div className={classes.root}>
  <Paper className={classes.paper} onClick={this.handleAddMeeting}>
          <Card className={classes.card}>
 
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          maxHeight="140"
          image= {imageURL} //"https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"

          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{color:'black'}}>
         {this.props.status}
          </Typography>
          <Typography component="h4" >
          {this.props.name} 
          </Typography>
          <Typography component="h4" >
          {this.props.dept} 
          </Typography>
          <Typography component="h4">Session  {this.props.session}
          </Typography>
          <Typography component="h4" >
          {this.props.contact}
          </Typography>
         </CardContent>
        
         
        <CardActions style={{display:isEditMode}}>
         
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
        
      </CardActions>
   </Card>

</Paper>
          
  
    
   
  );
}
}
ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ImgMediaCard));

/*
 <Grid container spacing={24}>


        <Grid item xs style={{cursor:'pointer'}} onClick={this.props.handleAddMeetingClick} >
       
          <Paper className={classes.paper}>
          <Card className={classes.card}>
     
      <CardMedia
      component="img"
      alt="Contemplative Reptile"
      className={classes.media}
      height="140"
      image= {d}//"https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"

      title="Contemplative Reptile"
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="h2" style={{color:'black'}}>
      Coordinator
      </Typography>
      <Typography component="h4" >
      Electrical Engineering 
      </Typography>
      <Typography component="h4">
     ( 15 Session )
      </Typography>
      <Typography component="h4" >
      Contact # : 03086415241
      </Typography>
     </CardContent>
</Card>
      </Paper>
      
    </Grid>
    
 
    <Grid item xs style={{cursor:'pointer'}}>
      <Paper className={classes.paper}><Card className={classes.card}>
  
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      className={classes.media}
      height="140"
      image= {d}//"https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"

      title="Contemplative Reptile"
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="h2" style={{color:'black'}}>
      Coordinator
      </Typography>
      <Typography component="h4" >
      Electrical Engineering 
      </Typography>
      <Typography component="h4">
     ( 15 Session )
      </Typography>
      <Typography component="h4" >
      Contact # : +923086415241
      </Typography>
   </CardContent>

</Card></Paper>
    </Grid>

    <Grid item  md={3} lg={3} style={{cursor:'pointer'}}>
      <Paper className={classes.paper}><Card className={classes.card}>

    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      className={classes.media}
      height="140"
      image=  {d}//"https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"

      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2" style={{color:'black'}}>
      President
      </Typography>
      <Typography component="h4">
      Civil Engineering 
      </Typography>
      <Typography component="h4">
      15 Session
      </Typography>
      <Typography component="h4">
      Contact # : +923086415241
      </Typography>
   </CardContent>
 
</Card></Paper>
    </Grid>

      <Grid item xs style={{cursor:'pointer'}}>
      <Paper className={classes.paper}><Card className={classes.card}>

    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      className={classes.media}
      height="140"
      image=  {d}

      title="Contemplative Reptile"
    />
    <CardContent>
    
      <Typography gutterBottom variant="h5" component="h2" style={{color:'black'}}>
      Coordinator
      </Typography>
      <Typography component="h4" >
      Electrical Engineering 
      </Typography>
      <Typography component="h4">
     ( 15 Session )
      </Typography>
      <Typography component="h4" >
      Contact # : 03086415241
      </Typography>
    </CardContent>

</Card></Paper>
    </Grid>

      <Grid item xs style={{cursor:'pointer'}}>
      <Paper className={classes.paper}><Card className={classes.card}>
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      className={classes.media}
      height="140"
      image=  {d}//"https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"

      title="Contemplative Reptile"
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="h2" style={{color:'black'}}>
      Coordinator
      </Typography>
      <Typography component="h4" >
      Electrical Engineering 
      </Typography>
      <Typography component="h4">
     ( 15 Session )
      </Typography>
      <Typography component="h4" >
      Contact # : 03086415241
      </Typography>
    </CardContent>
 
</Card></Paper>
    </Grid>

  </Grid> */