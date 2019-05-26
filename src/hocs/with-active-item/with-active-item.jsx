import React from 'react';
import PropTypes from 'prop-types';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || `Component`;
}

const withActiveItem = (Component) => {
  class WrappedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: undefined,
      };

      this._handleChange = this._handleChange.bind(this);
    }

    render() {
      return <Component activeItem={this.state.activeItem} onChange={this._handleChange} {...this.props}/>;
    }

    _handleChange(value) {
      this.setState({
        activeItem: value
      });

      if (this.props.onActiveItemChange) {
        this.props.onActiveItemChange(value);
      }
    }
  }

  WrappedComponent.propTypes = {
    onActiveItemChange: PropTypes.func,
  };

  WrappedComponent.displayName = `withActiveItem(${getDisplayName(Component)})`;

  return WrappedComponent;
};

export default withActiveItem;
