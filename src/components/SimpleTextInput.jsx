import TextField from '@mui/material/TextField';
import React from "react";

const SimpleTextInput = ({payload}) => {
  return (
    <div>
      <TextField
        error={false}
        id="outlined-error-helper-text"
        label="Name "
        // defaultValue="Hello World"
        // helperText="Incorrect entry."
      />
    </div>
  );
};

export default SimpleTextInput;
