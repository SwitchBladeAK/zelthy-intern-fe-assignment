import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

const localizer = momentLocalizer(moment);

const CalendarView = ({ slots }) => {
  const events = slots.map((slot) => ({
    title: `${slot.user} - ${slot.time}`,
    start: new Date(`${slot.date}T${slot.time}`),
    end: new Date(`${slot.date}T${slot.time}`),
  }));

  return (
    <div
      className="p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded shadow"
      style={{ height: "100%" }}
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Calendar View
      </h2>
      <div style={{ height: "500px" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={["month", "week", "day"]}
          defaultView="month"
          className="rounded-lg border border-gray-300 dark:border-gray-700 shadow-md"
        />
      </div>
    </div>
  );
};

export default CalendarView;