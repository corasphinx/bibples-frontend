import { styled } from '@mui/material/styles';
import { Button, Box, IconButton } from '@mui/material';

export const MethodBox = styled(Box)(({ theme }) => ({
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  margin: '0.5rem',
  background: 'rgba(104, 104, 104, 0.22)',
  backdropFilter: 'blur(2.61799px)',
  border: '1px solid rgba(104, 104, 104, 0.22)',
}));
