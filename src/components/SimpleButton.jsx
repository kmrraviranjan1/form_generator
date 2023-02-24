import React from "react";
import Button from "@mui/material/Button";

const SimpleButton = ({payload, handleClick }) => {
  return (
    <Button variant="contained" onClick={handleClick}>
      Button
    </Button>
  );
};

export default SimpleButton;
