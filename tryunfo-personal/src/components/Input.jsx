import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { type, id, name, dataTestId } = this.props;
    return (
      <label htmlFor={ id }>
        {name}
        <input
          type={ type }
          id={ id }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
