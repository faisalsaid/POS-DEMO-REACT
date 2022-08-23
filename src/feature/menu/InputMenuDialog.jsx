import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogTitle } from '@mui/material';

const InputMenuDialog = (props) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open}>
      <DialogTitle>DAILOG</DialogTitle>
      <Button onClick={() => onClose('Messege Send to Parent Element')}>Close</Button>
    </Dialog>
  );
};

export default InputMenuDialog;
