import React, { Component } from 'react';
import { Button,ButtonGroup } from 'reactstrap';
export  class SubmitButton extends Component { 
//   constructor(props) {
//     super(props);
   
//     this.handleSubmit = this.handleSubmit.bind(this);
// }
//   handleSubmit(event) {
//     debugger;
//     this.props.handleSubmit();
//  }
    render(){ 
      return(
          <div className="col-md-4">
           <Button color="success" type="submit" onClick={this.handleSubmit}>Register</Button>
         </div>
         )}
}