import React, { Component } from 'react';
import data from '../data/Cases.json';

class Fetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
    };
  }
  render() {
    return(
      <div >
        <h1>Steffos portfolio</h1>
        {
          this.state.data.map((portoCase) =>
            <div key={portoCase.id}>
              <span>{portoCase.headline}</span>
              <span>{portoCase.description}</span>
            </div>
          )
        } 
      </div>
    );
  }
}

export default Fetch;