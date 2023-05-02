import * as React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import SvgColor from '@/components/SvgColor';
import PrivateMessageItem from './PrivateMessageItem';
import Collapse from '@mui/material/Collapse';

const PrivateMessages = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ mb: 2 }}>
      <Box
        sx={{
          height: 45,
          bgcolor: 'background.default',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'transparent' : '#C7C7C7',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          cursor: 'pointer',
        }}
        onClick={() => setOpen(state => !open)}
      >
        <SvgColor
          src="/assets/images/svgs/arrow-down.svg"
          sx={{
            transform: 'scaleY(-1)',
            width: 12,
            height: 14,
            color: 'primary.contrastText',
          }}
        />
        <Typography sx={{ color: 'primary.contrastText', pl: 2 }}>
          Private Messages (3)
        </Typography>
      </Box>
      <Collapse in={open}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {Array.from(Array(3)).map((_, index) => (
            <PrivateMessageItem key={index} active={true} />
          ))}
          <PrivateMessageItem active={false} />
        </Box>
      </Collapse>
    </Box>
  );
};

export default PrivateMessages;
