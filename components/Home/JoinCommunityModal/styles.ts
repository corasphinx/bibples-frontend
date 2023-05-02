import { styled } from '@mui/material/styles';
import { Button, Box, IconButton } from '@mui/material';

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

export const StyledActionGroupBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1px',
  padding: '0px 20px'
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: '30px',
  height: '30px',
  backgroundColor: theme.palette.primary.main,
  borderColor: theme.palette.mode === 'light' ? '#BBBBBB' : 'transparent',
  borderRadius: '7.5px',
  borderWidth: '0.5px',
  borderStyle: 'solid',
}));