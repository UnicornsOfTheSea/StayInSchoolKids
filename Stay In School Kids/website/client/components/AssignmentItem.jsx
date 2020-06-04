import React from 'react';

const AssignmentItem = ({ assignment, source }) => {
  return (
    <div className="tile is-child card">
      <div className="card-content">
        <p className="title is-4">
          {assignment.name}
        </p>
        <p className="subtitle is-6">
          Due: {assignment.due}
        </p>
        <p className="subtitle is-6">
          Source: {source}
        </p>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">Completed</a>
        <a href="#" className="card-footer-item">Edit</a>
        <a href="#" className="card-footer-item">Delete</a>
      </footer>
    </div>
  );
}

export default AssignmentItem;