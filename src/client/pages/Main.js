import React from 'react';
import Layout from '../components/layout/Layout';
import DayTodoContainer from '../containers/todo-for-day';
import SectionHeader from '../components/section-header/SectionHeader';

const Main = () => (
  <Layout>
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
        <textarea />
      </div>

      <div className="calender-grid-item">
        calender
      </div>
    </div>
  </Layout>
);

export default Main;
