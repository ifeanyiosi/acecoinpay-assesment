import * as Yup from "yup";

const CARD_FORM_INITIAL_STATE = {
  cardNumber: "",
  expiry: "",
  cvv: "",
  cardPin: "",
};

const CARD_FORM_VALIDATION = Yup.object().shape({
  cardNumber: Yup.number()
    .integer()
    .typeError("Invalid Card Number")
    .required("Required"),
  expiry: Yup.date().required("Required"),
  cvv: Yup.number()
    .integer()
    .typeError("Invalid CVV Number")
    .required("Required"),
  cardPin: Yup.number()
    .integer()
    .typeError("Invalid Pin Number")
    .required("Required"),
});

const submitCardForm = (values: typeof CARD_FORM_INITIAL_STATE): void => {
  console.log(values);
};

export { CARD_FORM_INITIAL_STATE, CARD_FORM_VALIDATION, submitCardForm };
