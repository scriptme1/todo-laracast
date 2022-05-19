import React from 'react';
import PropTypes from 'prop-types';

CompleteAllTodos.propTypes = {
  completeAllTodos: PropTypes.func.isRequired,
};
function CompleteAllTodos(props) {
  return (
    <div>
      <button className="button" onClick={props.completeAllTodos}>
        Check All
      </button>
    </div>
  );
}

export default CompleteAllTodos;
