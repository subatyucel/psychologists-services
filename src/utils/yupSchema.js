import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters!")
    .required("Please provide a name!"),
  email: yup
    .string()
    .email("Please provide a valid email!")
    .required("Please provide an email!"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters!")
    .required("Please provide a password!"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid email!")
    .required("Please provide an email!"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters!")
    .required("Please provide a password!"),
});
