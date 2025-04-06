import Joi from "joi";

export const validationSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Name should have at least 3 characters",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": "Email must be a string",
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email",
    }),
  bookingDate: Joi.date().required().messages({
    "date.base": "Booking date is required",
  }),
  comment: Joi.string().max(500).optional().messages({
    "string.base": "Comment must be a string",
    "string.max": "Comment must not exceed 500 characters",
  }),
});

export const validate = (values) => {
  const { error } = validationSchema.validate(values, { abortEarly: false });
  if (!error) return {};
  return error.details.reduce((acc, curr) => {
    acc[curr.path[0]] = curr.message;
    return acc;
  }, {});
};
