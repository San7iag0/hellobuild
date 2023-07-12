import { useState } from "react";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { LocalStorageService } from '../../services/LocalStorageService';

export type AlertColor = 'success' | 'info' | 'warning' | 'error';

interface Props {
  severity: AlertColor;
  children: React.ReactNode;
}

export const TransitionAlerts = ({children, severity}:Props) => {

  const [ openAlert, setOpenAlert ] = useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse 
      in={openAlert}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
                LocalStorageService.setItem('login', false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {children}
        </Alert>
      </Collapse>
    </Box>
  );
}
