import React from "react";
import ReactDOM from "react-dom";

import ImageCSS from "./Image.css";
import Fabric_Image from "../../../CanvasBox/fabric-components/Image.js";

var that;
export default class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      ImageJSON:[
        'media/image.png',
        'media/Placeholder.jpg',
        'https://moonly-test.s3.amazonaws.com/mockups/nQsRw3PNs4HF4gRyAart.png'
      ]
    };
    that = this;
  }
  addImage(event){
    var object = event.target.dataset.src;
    var image = new Fabric_Image({
      src:event.target.dataset.src,
    });
    image.create();
  }
  render() {
    var currentClass = "col-md-12 image-container "+this.props.visibility;
    return (
      <div className={currentClass}>
        {
          this.state.ImageJSON.map(function (backgroundImage,index) {
            var imageStyle = {
              backgroundImage:'url('+backgroundImage+')'
            }
            return(
              <div onClick={that.addImage.bind(this)} key={index} data-src={backgroundImage} className="image-container-content col-md-12" style={imageStyle}></div>
            );
          })
        }
      </div>
    );
  }
}