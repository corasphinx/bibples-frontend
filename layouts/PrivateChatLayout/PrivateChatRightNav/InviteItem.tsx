import * as React from 'react';
import { Box, Typography, Badge, Avatar, IconButton } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Image from 'next/image';
import SvgColor from '@/components/SvgColor';
import { StyledActionGroupBox, StyledIconButton } from './styles';
import RightContextMenu from '@/components/PrivateChat/RightContextMenu';

const InviteItem = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const contextMenuOpen = Boolean(anchorEl);
  const handlecontextMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleContextMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleRightClick = (e) => {
    e.preventDefault();
    if (e.type === 'contextmenu') {
      handlecontextMenuOpen(e);
    }
  };
  return (
    <StyledActionGroupBox sx={{ height: 58, cursor: 'pointer' }} onContextMenu={handleRightClick}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Avatar
          alt="User"
          src="/assets/images/5.png"
          sx={{ width: 40, height: 40 }}
        />
        <Typography
          color="primary.contrastText"
          fontSize={15}
          fontWeight={500}
          pl={1}
          sx={{
            background:
              'linear-gradient(265.96deg, #00A3FF 4.86%, #E140E4 93.41%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          }}
        >
          Dave Bronx
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <IconButton
          sx={{
            width: '37px',
            height: '25px',
            backgroundColor: '#00AF1C',
            border: 'none',
            borderRadius: '7px',
            '&:hover': {
              backgroundColor: '#00740B',
            },
          }}
        >
          <SvgColor
            src="/assets/images/svgs/check-white-filled.svg"
            sx={{
              width: '11px',
              height: '11px',
              color: '#F0F0F0',
            }}
          />
        </IconButton>
        <IconButton
          sx={{
            ml: 1,
            width: '37px',
            height: '25px',
            backgroundColor: 'primary.main',
            borderStyle: 'solid',
            borderColor: '#E82B2B',
            borderWidth: '1px',
            borderRadius: '7px',
          }}
        >
          <SvgColor
            src="/assets/images/svgs/delete.svg"
            sx={{
              width: '11px',
              height: '11px',
              color: '#E82B2B',
            }}
          />
        </IconButton>
      </Box>
      <RightContextMenu anchorEl={anchorEl} contextMenuOpen={contextMenuOpen} handleClose={handleContextMenuClose} />
    </StyledActionGroupBox>
  );
};

export default InviteItem;
