import React, { Component } from 'react';

class DisplayQuestions extends Component {
    someFn() {
        debugger;
        var a= this.props.data;
    }
    render() {
        return (
          <div className="App"> 
          <form onSubmit={this.handleSubmit} onLoad={this.someFn()}>
            <label>
              Name:
              <input type="text" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          </div>
        );
    }

}
export default DisplayQuestions;