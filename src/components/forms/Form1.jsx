import React from "react";
import SimpleForm from "../SimpleForm";
import * as Yup from "yup";

const Form1 = () => {
  const handleSubmit = (payload) => {
    console.log("handleSubmit payload: ", payload);
  };
  const FormConfiguration = {
    title: "Simple Form",
    initialValues: { name: "", age: "", address: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be 3 letters or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      age: Yup.number().max(99, "Must be 99years or less").required("Required"),
      address: Yup.string().required("Required"),
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

  return <SimpleForm formConfiguration={FormConfiguration} />;
};

export default Form1;
