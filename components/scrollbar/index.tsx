import SimpleBar from 'simplebar-react';
import { styled } from '@mui/material';

const Scrollbar = styled(SimpleBar)(({ theme }) => ({
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: theme.palette.primary.contrastText,
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
}));

export default Scrollbar;
