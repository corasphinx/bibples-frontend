import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import SvgColor from '@/components/SvgColor';
import { StyledActionGroupBox, StyledIconButton } from './styles';
import FeedRightContextMenu from '@/components/Home/FeedRightContextMenu';

const FeedItem = () => {
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
    <StyledActionGroupBox sx={{ height: 58, cursor: 'context-menu' }} onContextMenu={handleRightClick}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Image
          src="/assets/images/tron.svg"
          alt=""
          width={30}
          height={30}
          style={{ borderRadius: 50 }}
        />
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
              sx={{
                fontSize: '1rem',
                fontWeight: '600',
                color: theme.palette.primary.contrastText,
                margin: 0,
                padding: 0,
              }}
            >
              Tronwars
            </Typography>
            <SvgColor
              src="/assets/images/svgs/verified.svg"
              sx={{
                width: '12px',
                height: '12px',
                pl: 2,
                color: theme.palette.primary.contrastText,
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: '10px',
              color: theme.palette.primary.contrastText,
              margin: 0,
              padding: 0,
            }}
          >
            New collection available!!!
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
      <FeedRightContextMenu anchorEl={anchorEl} contextMenuOpen={contextMenuOpen} handleClose={handleContextMenuClose} />
    </StyledActionGroupBox>
  );
};

export default FeedItem;
