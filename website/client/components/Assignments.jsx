import React from 'react';

// custom components
import AssignmentItem from './AssignmentItem';

const Assignments = ({ assignments }) => (
  <div className="tile is-ancestor">
    <div className="tile is-4 is-vertical is-parent ">
      {assignments.map(assignment => {
        return <AssignmentItem assignment={assignment} key={assignment.name} />
      })}
    </div>
  </div>
);

export default Assignments;