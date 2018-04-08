import React, { Component } from 'react'

 class FillIn extends Component {
    constructor (props) {
      super(props)
      
    }

    componentDidMount() {
      var canvas = document.getElementById('canvas' + this.props.id);
      var context = canvas.getContext("2d");
      
      let isDrawing;

        canvas.onmousedown = function(e) {
          //console.log(e)
          isDrawing = true;
        };
        canvas.onmousemove = function(e) {
          //console.log(e)
          if (isDrawing) {
            
            var pos = getMousePos(canvas, e);
            let posx = pos.x;
            let posy = pos.y;
            //context.fillStyle = "#000000";
            //context.fillRect(posx-1, posy-1, 2, 2);
            context.lineTo(posx, posy);
            context.stroke();
          }
        };
        canvas.onmouseup = function() {
          isDrawing = false;
        };

      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect(), // abs. size of element
            scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
            scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y
  
        return {
          x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
          y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
        }
      }

    }

    


    render() {

      return (
        <div className="fillin">
            <h5>{this.props.title}:</h5>
            <canvas id={'canvas' + this.props.id} width="500" height="40" />
        </div>
      )
    }
}


export default FillIn

