import React from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.models.states', window.models.states);
  }

  render() {
    return (
      <div>
       <h1>Filter the States</h1>
       <input
          type="text"
          placeholder="Enter a substring"
          value={this.state.searchString}
          onChange={this.handleInputChange}/>
        <div className='filterer-substring'>
          {this.state.searchStrig && <p>Filtering for: {this.state.searchString}</p>}
        </div>
        {this.renderStatesList()} {/* Render the filtered states list*/}
      </div>
      
    );
  }
}

export default States;
