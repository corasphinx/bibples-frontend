import * as React from 'react';
import { Box, Typography, Badge, Avatar } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Image from 'next/image';
import SvgColor from '@/components/SvgColor';
import { StyledActionGroupBox, StyledIconButton } from './styles';
import RightContextMenu from '@/components/PrivateChat/RightContextMenu';

interface PrivateMessageItemProps {
  active: boolean;
}

const PrivateMessageItem = (props: PrivateMessageItemProps) => {
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
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: props.active ? '#44b700' : '#565A7F',
              boxShadow: `0 0 0 2px ${theme.palette.primary.contrastText}`,
            },
          }}
        >
          <Avatar
            alt="User"
            src="/assets/images/5.png"
            sx={{ width: 40, height: 40 }}
          />
        </Badge>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pl: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Typography
              color="primary.contrastText"
              fontSize={15}
              fontWeight={500}
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
          <Typography fontSize={10} color="primary.contrastText">
            Dave is typing...
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: 39,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontSize: '10px',
            color: theme.palette.primary.contrastText,
            margin: 0,
            padding: 0,
          }}
        >
          14:40
        </Typography>
        <Box
          sx={{
            background:
              'linear-gradient(265.96deg, #00A3FF 4.86%, #E140E4 93.41%)',
            borderRadius: 50,
            width: 16,
            height: 16,
          }}
        >
          <Typography
            sx={{
              fontSize: '10px',
              fontWeight: '600',
              color: '#fff',
              textAlign: 'center',
              margin: 0,
              padding: 0,
            }}
          >
            2
          </Typography>
        </Box>
      </Box>
      <RightContextMenu anchorEl={anchorEl} contextMenuOpen={contextMenuOpen} handleClose={handleContextMenuClose} />
    </StyledActionGroupBox>
  );
};

export default PrivateMessageItem;
