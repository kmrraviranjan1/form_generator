import Container from "@mui/material/Container";
import SimpleTextInput from "./SimpleTextInput";
import SimpleButton from "./SimpleButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Formik, Form, useField } from "formik";
import { Box } from "@mui/material";

const SimpleForm = ({ formConfiguration }) => {
  const { title, items, initialValues, validationSchema, submitForm } =
    formConfiguration;
  const getFormComponent = ({ item, label, name, onClick }, rest) => {
    const formComponents = {
      SimpleTextInput: <SimpleTextInput name={name} label={label} {...rest} />,
      SimpleButton: <SimpleButton handleClick={onClick} />,
    };
    return formComponents[item];
  };

  return (
    <Container maxWidth="sm">
      <p>{title}</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        <Form>
          <Stack spacing={2}>
            {items.map(({ item, label, onClick, name, ...rest }, index) => {
              return (
                <Box key={index}>
                  {getFormComponent({ item, label, name, onClick }, rest)}
                </Box>
              );
            })}
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </Form>
      </Formik>
    </Container>
  );
};

export default SimpleForm;
