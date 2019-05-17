import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//import tileData from './tileData';
import a from '../Images/a.jpg';
import b from '../Images/b.jpg';
import c from '../Images/c.jpg';
import d from '../Images/d.jpg';
import e from '../Images/e.jpg';
import f from '../Images/f.jpg';
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    //overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    //height: 450,
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
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

class ImageGridList extends React.Component {
constructor(props){
    super(props);
}
  render(){
    const { classes } = this.props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={12} sm={6}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
