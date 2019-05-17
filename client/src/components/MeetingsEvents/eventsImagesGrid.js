import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import c from '../Images/c.jpg';
import d from '../Images/d.jpg';
import e from '../Images/e.jpg';

const styles = theme => ({
  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-around',
  //   overflow: 'hidden',
  //   backgroundColor: theme.palette.background.paper,
  // },
  // gridList: {
  //   width: 500,
  //   height: 450,
  // },
  // icon: {
  //   color: 'rgba(255, 255, 255, 0.54)',
  // },
});

const tileData = [
    {
      img: c,
      title: 'Image',
      author: 'author',
    },
    {
        img: d,
        title: 'youfje',
        author: 'author kkkkk',
      },
      {
        img: c,
        title: 'Image',
        author: 'author',
      },
      {
          img: d,
          title: 'youfje',
          author: 'author kkkkk',
        },
        {
            img: e,
            title: 'Image',
            author: 'author',
          },
          {
              img: c,
              title: 'youfje',
              author: 'author kkkkk',
            }
]

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
  const tileData = [
    {
      img: image,
      title: 'Image',
      author: 'author',
    },
 *   {
 *     [etc...]
 *   },
 * ];
 */
class  TitlebarGridList extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
  const { classes } = this.props;

  return (
    // <div className={classes.root}>
      <GridList cellHeight={100}>
          <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
              <ListSubheader component="div">
              bwdbh bfhbve jwbfbe jfbfjhe fbjeb bjee bejg  fbjejg ejbjeg efbjbeg efbge emfbe efjeb emfbe
                skjfejk fkjfbkfbek ebfejbekbfwk wbfjwbfw w,bfwjfw wbfe</ListSubheader>
          </GridListTile>
           {tileData.map(tile => (
          <GridListTile //key={tile.img} 
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar title='View More' style={{  width: '100%',height: "100%",
            backgroundColor:'rgba(0,0,0,0.1);',textAlign:'center'}}
            //   subtitle={<span style={{marginBottom:280}}>by: {tile.author}</span>}
            //   actionIcon={
            //     <IconButton className={classes.icon}>
            //       <InfoIcon />
            //     </IconButton>
            //   }
            />
          </GridListTile>
        ))}
      </GridList>
    // </div>
  );
}
}
TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
