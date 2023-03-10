import TextField from "@mui/material/TextField";
import { useField } from "formik";
const SimpleTextInput = ({ name, label, ...rest }, props) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      fullWidth
      label={label}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...rest}
      {...field}
      {...props}
    />
  );
};

export default SimpleTextInput;
