interface FAQ {
  question: string;
  header?: string;
  answers: string[] | string;
}

const faqData: FAQ[] = [
  {
    question: "What was this app built with?",
    answers: "This was built with Typescript and Next JS on top of React ",
  },
  {
    question: " What CSS was used and why?",

    answers: ["Tailwind CSS was used, the naming of classes is cumbersome"],
  },

  {
    question: " How was the form submission handled?",

    answers: [
      "Formik and Yup were used to handle form submission with the values logging on the console of the browser",
    ],
  },

  {
    question: "Why were the current color choices used?",
    answers:
      "Without a figma design i could not get the exact color codes so i used one of my favourite colors",
  },

  {
    question: "How long did it take to build this project?",

    answers: [
      "It took me 2 hours to impliment this layout, mostly becasue css is very annoying. And a further 6 hours to add some of the extra logic on the project",
    ],
  },

  {
    question: "Did i have fun building this?",

    answers: ["Yes, mostly because i have made a similar project in the past"],
  },
];

export default faqData;
