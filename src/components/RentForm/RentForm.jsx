import { Field, Form, Formik } from "formik";
import React from "react";
import s from "./RentForm.module.css";

const RentForm = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
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
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="username"
            type="text"
            placeholder="Name"
          />
          <Field
            className={s.input}
            name="email"
            type="text"
            placeholder="Email"
          />
          <Field
            className={s.input}
            name="bookingDate"
            placeholder="Booking date"
          />
          <Field
            className={s.textarea}
            name="comment"
            placeholder="Comment"
            type="text"
            component="textarea"
          />
          <button className={s.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RentForm;
