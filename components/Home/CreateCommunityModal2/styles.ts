import { styled } from '@mui/material/styles';
import { Button, Box, IconButton, OutlinedInput, Dialog } from '@mui/material';

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  borderRadius: '10px',
  fontSize: '1.25rem',
  color: '#565A7F',
}));

export const RowBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '3rem',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)'
      : theme.palette.primary.main,
  height: 58,
  minWidth: 260,
  marginBottom: '5rem',
}));