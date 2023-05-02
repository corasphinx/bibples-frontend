import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledRootBox = styled(Box)(({ theme }) => ({
  borderRadius: '10px',
  marginRight: '16px',
  position: 'relative',
}));

export const StyledInfoBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 6,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px',
  background:
    'linear-gradient(90.6deg, rgba(21, 21, 21, 0.42) 0.3%, rgba(185, 35, 255, 0) 105.8%)',
  backdropFilter: 'blur(2.5px)',
  padding: '10px 20px',
}));

export const StyledActionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

export const StyledProfileImageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 30px',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '15px',
  height: 45,
  width: '100%',
  justifyContent: 'start',
  fontSize: '1rem',
  paddingLeft: '25px',
}));