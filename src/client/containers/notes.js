import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Notes from '../components/notes/Notes';
import { getNotes } from '../../redux/selectors';
import { updateNotes } from '../../redux/actions';


const mapStateToProps = state => ({
  content: getNotes(state)
});

const NotesContainer = ({ content, updateNotes }) => (
  <Notes content={content} updateContent={updateNotes} />
);

NotesContainer.propsTypes = {
  content: PropTypes.string.isRequired,
  updateNotes: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { updateNotes })(NotesContainer);
