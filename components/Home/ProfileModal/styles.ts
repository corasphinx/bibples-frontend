import { Box, Dialog, OutlinedInput, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const StyledProfileImageBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 30px',
  borderRadius: '15px',
  maxHeight: '250px'
}));

export const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  borderRadius: '10px',
  fontSize: '0.7rem',
}));

export const StyledPinInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  borderRadius: '10px',
  fontSize: '1rem',
  width: '3.5rem'
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)'
      : theme.palette.primary.main,
  height: 50,
  minWidth: 100,
}));