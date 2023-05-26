/* eslint-disable import/no-anonymous-default-export */
export default {
  fields: {
    cardNumber: {
      name: "cardNumber",
      placeholder: "Card Number",
      label: "New Card Details",
      type: "text",
    },
    expiry: {
      type: "text",
      label: "",
      name: "expiry",
      placeholder: "Expiry",
    },
    
    cvv: {
      type: "text",
      label: "",
      name: "cvv",
      placeholder: "CVV",
    },
    cardPin: {
      type: "text",
      label: "",
      name: "cardPin",
      placeholder: "PIN",
    },
  },
};
