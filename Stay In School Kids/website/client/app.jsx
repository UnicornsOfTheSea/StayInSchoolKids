/* eslint-disable require-jsdoc */
import React, {Component} from 'react';

import Assignments from './components/Assignments';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: [
        {
          name: "Essay",
          due: "05/24/2020",
          source: 0
        },
        {
          name: "Math Exercises",
          due: "05/25/2020",
          source: 0
        },
        {
          name: "Lab Report",
          due: "05/26/2020",
          source: 1
        },
        {
          name: "History Worksheet",
          due: "05/27/2020",
          source: 1
        },
        {
          name: "Read chapter 1",
          due: "05/28/2020",
          source: 1
        }
      ],
      sources: ["GoogleClassrom", "Schoology"]
    };
  }
  render() {
    return (
      <div>
        <div className="section">
          <h1 className="title">Stay in School Kids</h1>
          <p className="subtitle">
            Stay on top of your Homework.
          </p>
        </div>

        <div className="section">
          <div className="container centered">
            <h2 className="title is-2">Upcoming assignments</h2>
            <div className="columns is-centered is-mobile">
              <div className="column has-text-centered">
                <Assignments assignments={this.state.assignments} sources={this.state.sources} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

