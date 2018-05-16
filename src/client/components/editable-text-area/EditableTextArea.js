import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './EditableTextArea.less';

export default class EditableTextArea extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.textArea = React.createRef();

  }

  componentDidMount() {
    this.textArea.current.focus();
  }

  render() {
    const {
      text,
      onBlur,
      onChange,
      onKeyPress
    } = this.props;

    return (
      <div className="editable-text-area">
        <textarea
          ref={this.textArea}
          value={text}
          onBlur={onBlur}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  }
}
