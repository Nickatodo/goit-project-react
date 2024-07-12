import React from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import dayjs from 'dayjs';

const DatePicker = ({ selectedDate, onDateChange, validDate }) => {
  const memoizedSelectedDate = dayjs(selectedDate);

  return (
    <div>
      <h3>Seleccione una fecha:</h3>
      <Datetime
        value={memoizedSelectedDate.toDate()}
        onChange={onDateChange}
        isValidDate={validDate}
        dateFormat="DD-MM-YYYY"
        timeFormat={false}
        closeOnSelect={true}
      />
      <p>
        Fecha seleccionada:{' '}
        {memoizedSelectedDate.isValid()
          ? memoizedSelectedDate.format('DD-MM-YYYY')
          : 'Ninguna'}
      </p>
    </div>
  );
};

export default DatePicker;
