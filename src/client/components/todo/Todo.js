import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { decodeString } from '../../../shared/string-utils';

import './Todo.less';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLines from '@fortawesome/fontawesome-free-solid/faAlignJustify';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';

const Todo = ({ text, completed, onClick }) => (
  <li className={classnames('todo-item', { completed })}>
    <button
      onClick={onClick}
    >
      {
        completed &&
        <FontAwesomeIcon icon={faCheck} />
      }
    </button>
    <span className="todo-item__content">
      {decodeString(text)}
    </span>
    <div className="todo-item__move">
      <FontAwesomeIcon icon={faLines} />
    </div>

  </li>
);

Todo.propTypes = {
  completed: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Todo.defaultProps = {
  completed: false
};

export default Todo;
