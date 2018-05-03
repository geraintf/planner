import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableListContainer = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

export default class SortableList extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  constructor() {
    super()


  }

  render() {
    return ()
  }

};
