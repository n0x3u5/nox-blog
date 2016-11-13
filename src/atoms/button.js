import React from 'react';

class Button extends React.Component {
  render () {
    return (
      <button type="button">{this.props.text}</button>
    );
  }
}
Button.propTypes = {
  text: React.PropTypes.string
};
Button.defaultProps = {
  text: 'Click'
};

export default Button;
