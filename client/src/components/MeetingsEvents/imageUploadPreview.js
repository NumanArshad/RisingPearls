import React from 'react';
import ImageUploader from 'react-images-upload';

class ImageUploadPreview extends React.Component {

	constructor(props) {
		super(props);
		 this.state = { pictures: ['https:firebasestorage.googleapis.com/v0/b/risingpearlsweb.appspot.com/o/240376_Painting.jpg?alt=media&token=4db4697e-282a-452a-9d23-2bed826c3334'] };
		 this.onDrop = this.onDrop.bind(this);
	}

	onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        });
	}

    render() {
        return (
            <ImageUploader
                	withIcon={true}
                	buttonText='Choose images'
                	onChange={this.onDrop}
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
                	maxFileSize={5242880}
            />
        );
    }
}
export default ImageUploadPreview;