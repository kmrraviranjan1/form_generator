import React from 'react'
import SimpleForm from '../SimpleForm';

const Form1 = () => {
    const FormConfiguration = {
        title: "Simple Form",
        items: [
          {
            item: "SimpleTextInput",
            payload: {
              name: "ravi",
              no: 1,
            },
          },
          {
            item: "SimpleTextInput",
          },
          {
            item: "SimpleTextInput",
          },
          {
            item: "SimpleButton",
          },
          {
            item: "SimpleButton",
            payload: {
              name: "kumar",
              no: 2,
            },
          },
        ],
      };
  return (
    <SimpleForm formConfiguration={FormConfiguration} />
  )
}

export default Form1