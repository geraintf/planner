import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notes extends Component {
  static propTypes = {
    content: PropTypes.string,
    updateContent: PropTypes.func.isRequired
  };

  static defaultProps = {
    content: ''
  };

  onChange = (event) => this.props.updateContent(event.target.value);

  render() {
    const { content } = this.props;

    return (
      <div>
        <textarea value={content} onChange={this.onChange} />
      </div>
    )
  }
}
