import React from "react";
import SimpleForm from "../SimpleForm";
import * as Yup from "yup";

const Form1 = () => {
  const handleSubmit = (payload) => {
    console.log("handleSubmit payload: ", payload);
  };

  const formConfiguration = {
    title: "Simple Form",
    initialValues: { name: "", age: "", address: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be 3 letters or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      age: Yup.number()
        .min(1, "Min 1 years")
        .max(99, "Must be 99years or less")
        .required("Required"),
      address: Yup.string()
        .min(5, "Must be 5 letters or more")
        .notOneOf(["patna", "mumbai"])
        .required("Required"),
    }),
    items: [
      {
        name: "name",
        item: "SimpleTextInput",
        label: "Name",
        payload: {
          name: "ravi",
          no: 1,
        },
      },
      {
        name: "age",
        item: "SimpleTextInput",
        label: "Age",
        type: "number",
      },
      {
        name: "address",
        item: "SimpleTextInput",
        label: "Address",
      },
    ],
    submitForm: handleSubmit,
  };

  return <SimpleForm formConfiguration={formConfiguration} />;
};

export default Form1;
