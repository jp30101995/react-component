import React, { Component } from 'react';

class CheckboxQuestionList extends Component {
    
    constructor(props) {
        
        super(props);
        this.state = {isGoing: true};

        this.items = props.value;
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }


    render() {
        return (
        this.items.map((user, idx) => (
            <div className="row">
              <div className="col-sm-1">
              <input type="checkbox"value={user.V}/>
              </div>
              <div className="col-sm-10">
              <label htmlFor={user.V} value={user.V}> Female</label>
              </div>
            </div>
          )));
    }

}
export default CheckboxQuestionList;