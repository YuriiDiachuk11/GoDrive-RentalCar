import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker"; //
import "react-datepicker/dist/react-datepicker.css";

import s from "./RentForm.module.css";
import { validate } from "../../services/validation.js";

const RentForm = () => {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (values) => {
    console.log(values);
    toast.success(
      "🚗 Car booked successfully 🎉 Thank you for choosing our company! 🙏 ❤️"
    );
  };

  const initialValues = {
    username: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  return (
    <div className={s.container}>
      <div className={s.textBox}>
        <h2 className={s.title}>Book your car now</h2>
        <p className={s.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validate={validate}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className={s.form}>
            <Field
              className={s.input}
              name="username"
              type="text"
              placeholder="Name"
            />
            {errors.username && touched.username && (
              <div className={s.error}>{errors.username}</div>
            )}

            <Field
              className={s.input}
              name="email"
              type="text"
              placeholder="Email"
            />
            {errors.email && touched.email && (
              <div className={s.error}>{errors.email}</div>
            )}

            <div className={s.datePickerWrapper}>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setFieldValue("bookingDate", date);
                }}
                dateFormat="dd/MM/yyyy"
                placeholderText="Booking date"
                className={s.dateInput}
              />
              {errors.bookingDate && touched.bookingDate && (
                <div className={s.error}>{errors.bookingDate}</div>
              )}
            </div>

            <Field
              className={s.textarea}
              name="comment"
              placeholder="Comment"
              type="text"
              component="textarea"
            />
            {errors.comment && touched.comment && (
              <div className={s.error}>{errors.comment}</div>
            )}

            <button className={s.button} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default RentForm;
