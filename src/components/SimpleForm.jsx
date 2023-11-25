import Container from "@mui/material/Container";
import SimpleTextInput from "./SimpleTextInput";
import SimpleButton from "./SimpleButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Formik, Form } from "formik";
import { Box } from "@mui/material";
import * as Yup from "yup";

const getFormComponent = ({ item, label, name, onClick, rest }) => {
  const formComponents = {
    SimpleTextInput: <SimpleTextInput name={name} label={label} {...rest} />,
    SimpleButton: <SimpleButton handleClick={onClick} />,
  };
  return formComponents[item] || <></>;
};

const SimpleForm = ({
  formConfiguration = {
    title: "Simple Dynamic form",
    items: [],
    initialValues: {},
    validationSchema: Yup.object(),
    submitForm: () => {
      console.log("I submitted form");
    },
  },
}) => {
  const { title, items, initialValues, validationSchema, submitForm } =
    formConfiguration;

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
            {items.length && (
              <>
                {items.map(({ item, label, onClick, name, ...rest }, index) => {
                  return (
                    <Box key={index}>
                      {getFormComponent({ item, label, name, onClick, rest })}
                    </Box>
                  );
                })}
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </>
            )}
            {!items.length && (
              <h3>Add some items to your Form and see the magic</h3>
            )}
          </Stack>
        </Form>
      </Formik>
    </Container>
  );
};

export default SimpleForm;
