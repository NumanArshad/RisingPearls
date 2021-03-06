import React from 'react';
import Typography from '@material-ui/core/Typography';
import ButtonAppBar from './MenuBar'
// import ImageGridList from './ImageGridList'
import a from '../Images/a.jpg';
import b from '../Images/b.jpg';
import c from '../Images/c.jpg';
import d from '../Images/d.jpg';
import e from '../Images/e.jpg';
import f from '../Images/f.jpg';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


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
const tileData = [
    {
      img: a,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
     img: b,
     title: 'Image',
     author: 'author',
     cols: 2,
   },
   {
     img: c,
     title: 'Image',
     author: 'author',
     cols:2,
   },
   {
    img: d,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
     img: e,
     title: 'Image',
     author: 'author',
     cols: 2,
   },
   {
    img: f,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
     img: d,
     title: 'Image',
     author: 'author',
     cols: 2,
   },
   {
    img: a,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
     img: c,
     title: 'Image',
     author: 'author',
     cols: 2,
   },
   {
    img: f,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
     img: e,
     title: 'Image',
     author: 'author',
     cols: 2,
   },
   {
    img: a,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
   
  ];
class ShowEventImages extends React.Component {
  constructor(props){
    super(props);
    this.state={eventImagesList:this.props.specificeventImglist}
 }

    showHistory(history){
    //md={3} lg={3} style={{cursor:'pointer'}}
    const { classes } = this.props;
  const {eventImageURL} =history;
            return <Grid item lg={2} md={3} sm={4} xs={6} 
              style={{cursor:'pointer'}} //onClick={()=>{window.location.href=history.eventImageURL}}
              ><Paper className={classes.paper}>
              <a href={eventImageURL} download target="_blank">
            <img src={eventImageURL}//{history.img} 
            style={{width:'100%',height:158}} /></a></Paper></Grid>
    
 
    }
 render(){
    const { classes } = this.props;

      return (
      <div>
      <ButtonAppBar />
      <br />
           <Typography color="inherit" variant="display1" style={{color:'black'}} onClick={this.showIt} >Event Images</Typography>
          <br />
<div className={classes.root}>
            <Grid container spacing={8} >
         {//tileData
         this.state.eventImagesList.map((history)=>{
  return this.showHistory(history);
         })}</Grid>
         </div>
    </div>
  );
}
}

ShowEventImages.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ShowEventImages)


