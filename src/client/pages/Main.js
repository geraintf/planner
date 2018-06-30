import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import DayTodoContainer from '../containers/todo-for-day';
import NotesContainer from '../containers/notes';
import SectionHeader from '../components/section-header/SectionHeader';

import { fetchDayTodos } from '../../services/requests';

export default class Main extends Component {
  static fetchData(path) {
    return fetchDayTodos(path);
  }

  componentDidMount() {
    //this.constructor.fetchData();
  }

  render() {
    return (
      <Layout>
        <Header />
        <div className="grid-container">
          <div className="daily-grid-item">
            Daily
          </div>
          <div className="weekly-grid-item">
            Weekly
          </div>

          <div className="day-todo-grid-item">
            <SectionHeader text="Todos" />
            <DayTodoContainer />
          </div>
          <div className="day-notes-grid-item">
            <NotesContainer />
          </div>

          <div className="calender-grid-item">
            calender
          </div>
        </div>
      </Layout>
    );
  }
}
