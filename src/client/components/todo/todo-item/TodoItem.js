import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLines from '@fortawesome/fontawesome-free-solid/faAlignJustify';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

import { decodeString } from '../../../../shared/string-utils';
import './TodoItem.less';

const TodoItem = ({
  text,
  completed,
  onClick,
  sortable,
  index
}) => {
  let TodoContent = () => (
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
    </li>
  );

  const MoveIcon = SortableHandle(() => (
    <div className="todo-item__move">
      <FontAwesomeIcon icon={faLines} />
    </div>
  ));

  if (sortable) {
    TodoContent = SortableElement(() => (
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

        <MoveIcon />

      </li>
    ));
  }

  return <TodoContent key={`item-${index}`} index={index} />;
};

TodoItem.propTypes = {
  completed: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  sortable: PropTypes.bool,
  index: PropTypes.number.isRequired
};

TodoItem.defaultProps = {
  completed: false,
  sortable: false
};

export default TodoItem;
