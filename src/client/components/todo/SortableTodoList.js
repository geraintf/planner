import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SortableContainer } from 'react-sortable-hoc';

import TodoList from './todo-list/TodoList';


const SortableList = SortableContainer((props) => <TodoList { ...props} sortable />);

export default class SortableTodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items
    };
  }

  static propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      completed: PropTypes.bool
    })).isRequired,
    moveTodo: PropTypes.func.isRequired
  };

  onSortEnd = ({oldIndex, newIndex}) => this.props.moveTodo(oldIndex, newIndex);

  render() {
    const { toggleTodo, items } = this.props;

    return <SortableList
      items={items}
      toggleTodo={toggleTodo}
      onSortEnd={this.onSortEnd}
      useDragHandle={true}
      lockAxis="y"
      lockToContainerEdges={true}
    />;
  }
}