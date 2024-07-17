// Sidebar.jsx
import React from 'react';
import SidebarStyled from './SidebarStyled';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { selectedSelectedDate } from '../../redux/slices/diarySlice';

const Sidebar = () => {
  const selectedDate = useSelector(selectedSelectedDate);
  const memoizedSelectedDate = dayjs(selectedDate);

  return (
    <SidebarStyled>
      <div className="summary">
        <div className="summary-header">
          Summary for {memoizedSelectedDate.format('DD-MM-YYYY')}
        </div>
        <div className="summary-content">
          <div className="summary-row">
            <div className="summary-label">Left</div>
            <div className="summary-value">000 kcal</div>
          </div>
          <div className="summary-row">
            <div className="summary-label">Consumed</div>
            <div className="summary-value">000 kcal</div>
          </div>
          <div className="summary-row">
            <div className="summary-label">Daily rate</div>
            <div className="summary-value">000 kcal</div>
          </div>
          <div className="summary-row">
            <div className="summary-label">n% of normal</div>
            <div className="summary-value">000 kcal</div>
          </div>
        </div>
        <div className="summary-header">Food not recommended</div>
        <div className="summary-content">
          <div className="summary-row">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            molestias a minima tenetur eaque, eius, dignissimos dolore earum at
            porro magnam eum ipsa est odio voluptates. Nam est suscipit
            pariatur.
          </div>
        </div>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
