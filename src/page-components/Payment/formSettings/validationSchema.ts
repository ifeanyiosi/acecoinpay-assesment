/* eslint-disable import/no-anonymous-default-export */
import * as Yup from "yup";
import formData from "./formData";

export default {
  cardSetup: Yup.object().shape({
    [formData.fields.cardNumber.name]: Yup.string()
      .matches(
        /[0-9]$/,
        "Invalid Card Number! Can only be digits between 0 and 9"
      )
      .matches(/[0-9]{16}$/, "Invalid Card Number! Must be 16 digits long")
      .max(16, "Invalid Card Number! Cannot be more 16 digits long")
      .required("Required"),
    [formData.fields.expiry.name]: Yup.date().required("Required"),
    [formData.fields.cvv.name]: Yup.string()
      .matches(/[0-9]$/, "Invalid CVV! Can only be digits between 0 and 9")
      .matches(/[0-9]{3}$/, "Invalid CVV! Must be 3 digits long")
      .max(3, "Invalid CVV! Must be 3 digits long")
      .required("Required"),
    [formData.fields.cardPin.name]: Yup.string()
      .matches(/[0-9]$/, "Invalid Card Pin! Can only be digits between 0 and 9")
      .matches(/[0-9]{4}$/, "Invalid Card Pin! Must be 4 digits long")
      .max(4, "Invalid Card Pin! Must be 4 digits long")
      .required("Required"),
  }),
};
