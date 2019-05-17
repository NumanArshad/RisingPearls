import * as React from 'react';
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';
 
class Preview extends React.Component {
  constructor() {
    super();
 
    this.state = {
      visible: false,
    };
  }
 
  render() {
    return (
      <div>
        <button onClick={() => { this.setState({ visible: !this.state.visible }); } }>show</button>
        <Viewer
        visible={this.state.visible}
        onClose={() => { this.setState({ visible: false }); } }
        images={[{src: 'https://firebasestorage.googleapis.com/v0/b/risingpearlsweb.appspot.com/o/240376_Painting.jpg?alt=media&token=4db4697e-282a-452a-9d23-2bed826c3334', alt: ''},
    ]}
        />
        
      </div>
    );
  }
}

export default Preview;