/* eslint-disable require-jsdoc */
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

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
          <h2 className="title is-2">Upcoming assignments</h2>
          <div class="card">
            <div class="card-content">
              <p class="title is-4">
                Essay
              </p>
              <p class="subtitle is-6">
                Due: 05/24/2020
              </p>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Completed</a>
              <a href="#" class="card-footer-item">Edit</a>
              <a href="#" class="card-footer-item">Delete</a>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

