import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomSnackbar(props) {
  const { open, message, severity } = props;
  const [openState, setOpenState] = useState(open);

  useEffect(() => setOpenState(props.open), [props.open]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenState(false);
  };

  return (
    <Snackbar
      open={openState}
      autoHideDuration={6000}
      onClose={handleClose}
      className="snackBar"
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
