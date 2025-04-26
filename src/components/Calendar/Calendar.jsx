import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.module.css";
import { registerLocale } from "react-datepicker";
import enUS from "date-fns/locale/en-US";

registerLocale("en", {
  ...enUS,
  options: {
    ...enUS.options,
    weekStartsOn: 1,
  },
});

const Calendar = ({ value, onChange }) => {
  const [startDate, endDate] = value;

  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      onChange={onChange}
      minDate={new Date()}
      placeholderText="Booking date"
      dateFormat="dd.MM.yyyy"
      locale="en"
      className="custom-datepicker"
      popperPlacement="bottom"
      calendarClassName="calendar-custom"
      popperClassName="calendar-popper"
    />
  );
};
export default Calendar;
