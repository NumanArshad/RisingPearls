import React from 'react';
import { Slide } from 'react-slideshow-image';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Artboard from '../Images/Artboard.jpg';
import a from '../Images/a.jpg';
import b from '../Images/b.jpg';
import c from '../Images/c.jpg';

const slideImages = [
    'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 

class Slideshow  extends React.Component {

    render(){
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${a})`,//`url(${slideImages[0]})`,
          color: "white", backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', height:'100%',paddingTop:'5%',paddingBottom:'5%'}}>
            <Typography variant="display3" align="center" style={{ color: 'white', fontWeight: 'bold' }} >
                    Rising Pearls
                </Typography>
                  <br />
                  <Typography variant="display1"  size="small" align="center" style={{ color: 'white' }}>
                    Khanewalians
                </Typography>
                  <Typography variant="display1" align="center" style={{ color: 'white' }}>
                    We are here for you available 24/7!
                </Typography>
                  <Typography variant="display1" align="center" style={{ color: 'white' }}>
                    IMage related detail is
                </Typography>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${b})`,
          color: "white", backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', height:'100%',paddingTop:'5%',paddingBottom:'5%'}}>
             <Typography variant="display3" align="center" style={{ color: 'white', fontWeight: 'bold' }} >
                    Rising Pearls
                </Typography>
                  <br />
                  <Typography variant="display1"  size="small" align="center" style={{ color: 'white' }}>
                    Khanewalians
                </Typography>
                  <Typography variant="display1" align="center" style={{ color: 'white' }}>
                    We are here for you available 24/7!
                </Typography>
                  <Typography variant="display1" align="center" style={{ color: 'white' }}>
                    IMage related detail is
                </Typography>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${c})`,
          color: "white", backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',paddingTop:'5%',paddingBottom:'5%',width:'100%'}}>
             <Typography variant="display3" align="center" style={{ color: 'white', fontWeight: 'bold' }} >
                    Rising Pearls good
                </Typography>
                  <br />
                  <Typography variant="display1"  size="small" align="center" style={{ color: 'white' }}>
                    Khanewalians
                </Typography>
                  <Typography variant="display1" align="center" style={{ color: 'white' }}>
                    We are here for you available 24/7!
                </Typography>
                  <Typography variant="display1" align="center" style={{ color: 'white' }}>
                    IMage related detail is
                </Typography>
          </div>
        </div>
      </Slide>
    )
}
}
export default Slideshow;