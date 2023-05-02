import * as React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import SvgColor from '@/components/SvgColor';
import InviteItem from './InviteItem';
import Collapse from '@mui/material/Collapse';

interface InvitesProps {}

const Invites = (props: InvitesProps) => {
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
          mb: 2,
          px: 3,
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
        <Typography
          pl={2}
          sx={{
            background:
              'linear-gradient(265.96deg, #00A3FF 4.86%, #E140E4 93.41%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          }}
        >
          Invites (3)
        </Typography>
      </Box>
      <Collapse in={open}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {Array.from(Array(3)).map((_, index) => (
            <InviteItem key={index} />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Invites;
