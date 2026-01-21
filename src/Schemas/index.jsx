import * as Yup from "yup";

export const signupshema = Yup.object({
  firstname: Yup.string()
    .min(4, "Minimum 4 characters")
    .max(10, "Maximum 10 characters")
    .required("Please enter your first name"),

  lastname: Yup.string().min(4).max(10).required("Please enter your last name"),

  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),

  country: Yup.string().min(2).required("Enter your country"),

  phonenumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be 10 digits")
    .required("Enter your mobile number"),

  message: Yup.string().min(2).required("Enter message"),
});
