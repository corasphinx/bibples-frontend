import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledRootBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '15px',
  padding: '0px 16px',
}));

export const StyledActionGroupBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
