import React, { Component } from 'react';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import SectionHeader from 'components/section-header/SectionHeader';
import DayTodoContainer from 'src/client/containers/todo-for-day';
import NotesContainer from 'src/client/containers/notes';

import { fetchDayTodos } from 'src/services/requests';

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
