import { useState } from "react";
import { toast } from "react-toastify";
import Calendar from "../Calendar/Calendar.jsx";
import "react-toastify/dist/ReactToastify.css";
import s from "./RentForm.module.css";

const RentForm = () => {
  const [dateRange, setDateRange] = useState([null, null]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { username, email, comment } = form.elements;

    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const commentValue = comment.value.trim();

    if (!/\S+@\S+\.\S+/.test(emailValue)) {
      toast("🚨 Please enter a valid email address  🙏");
      return;
    }
    if (nameValue.length < 1) {
      toast("🚨 Please, enter your name  🙏");
      return;
    }
    if (nameValue.length > 10) {
      toast("🚨 Name must be 10 characters or less");
      return;
    }

    toast(
      "🚗 Car booked successfully 🎉 Thank you for choosing our company! 🙏 ❤️"
    );
    form.reset();
    setDateRange([null, null]);
  };

  return (
    <div className={s.container}>
      <form noValidate onSubmit={handleSubmit} className={s.form}>
        <h3>Book your car now</h3>
        <p>Stay connected! We are always ready to help you.</p>

        <div className={s.inputsWrap}>
          <input
            type="text"
            placeholder="Name*"
            name="username"
            pattern="[A-Za-zА-Яа-яЁё\s\-']+"
            required
            onInvalid={(e) => e.target.setCustomValidity("")}
          />
          <input
            type="email"
            placeholder="Email*"
            name="email"
            required
            onInvalid={(e) => e.target.setCustomValidity("")}
          />
          <Calendar
            value={dateRange}
            onChange={(update) => setDateRange(update)}
          />
          <textarea name="comment" placeholder="Comment" />
        </div>

        <div className={s.btnWrap}>
          <button className={s.button} type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentForm;
