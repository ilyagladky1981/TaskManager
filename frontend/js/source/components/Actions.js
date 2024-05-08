import React from 'react';
import PropTypes from 'prop-types';

const Actions = props =>  
  <div className="Actions" id="Actions">
      <span 
        tabIndex="0" 
        className="ActionsEdit" 
        title="Edit"
        onClick={props.onAction.bind(null, 'edit')}>&#10000;</span>
      <span 
        tabIndex="0"
        className="ActionsClose"
        title="Close"
        onClick={props.onAction.bind(null, 'close')}>x</span>
  </div>

Actions.propTypes = {
  onAction: PropTypes.func,
};

Actions.defaultProps = {
  onAction: () => {},
};

export default Actions
