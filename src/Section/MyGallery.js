import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import React from 'react';

const PREFIX_URL =  "/OlympicImage";
const images = [];

export default class MyGallery extends React.Component {

    constructor(props) {
        super(props);
        this._getStaticImages();

    }
    _getStaticImages() {
        for (let i = 1; i < 7; i++) {
          images.push({
            original: `gallery/images/${PREFIX_URL}${i}.jpg`,
            thumbnail:`gallery/thumbnails/${PREFIX_URL}${i}_tn.jpg`
          });
        }
    
        return images;
    }
    
    render() {
      return <ImageGallery items={images} />;
    }
}