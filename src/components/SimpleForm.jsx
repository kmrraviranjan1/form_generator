import Container from "@mui/material/Container";
import SimpleTextInput from "./SimpleTextInput";
import SimpleButton from "./SimpleButton";

const SimpleForm = ({ formConfiguration }) => {
  const { title, items } = formConfiguration;
  const getFormComponent = (item, payload) => {
    const formComponents = {
      SimpleTextInput: <SimpleTextInput payload={payload} />,
      SimpleButton: <SimpleButton payload={payload} />,
    };
    return formComponents[item];
  };
  return (
    <Container>
      <p>{title}</p>
      <div>
        {items.map(({ item, payload }, index) => {
          return <div key={index}>{getFormComponent(item, payload)}</div>;
        })}
      </div>
    </Container>
  );
};

export default SimpleForm;
