import { FC } from 'react';
import { useTheme } from '@mui/material/styles';

import Menu from '@mui/material/Menu';
import { Box, Typography } from '@mui/material';

import SvgColor from '@/components/SvgColor';

interface FeedRightContextMenuProps {
  anchorEl: null | HTMLElement;
  contextMenuOpen: boolean;
  handleClose: () => void;
}
const FeedRightContextMenu: FC<
  FeedRightContextMenuProps
> = ({ anchorEl, contextMenuOpen, handleClose }) => {

  const theme = useTheme();

  return (
    <div>
      <Menu
          id="community-menu"
          anchorEl={anchorEl}
          open={contextMenuOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
          PaperProps={{
            style:{
              backgroundImage: 'linear-gradient(rgba(50,50,50,0.2), rgba(50,50,50,0.2))',
              backgroundColor: 'rgba(0,0,0,0.43)',
              backdropFilter: 'blur(5px)',
              textAlign: 'center',
              padding: '5px'
            }
          }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
              <SvgColor
                src="/assets/images/svgs/pin.svg"
                sx={{
                  width: '12px',
                  height: '12px',
                  pl: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  margin: 0,
                  padding: 1
                }}
              >
                Pin
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
              <SvgColor
                src="/assets/images/svgs/eye.svg"
                sx={{
                  width: '12px',
                  height: '12px',
                  pl: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  margin: 0,
                  padding: 1
                }}
              >
                Mark as read
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
              <SvgColor
                src="/assets/images/svgs/eye-close.svg"
                sx={{
                  width: '12px',
                  height: '12px',
                  pl: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  margin: 0,
                  padding: 1
                }}
              >
                Hide
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer', color: 'red' }}>
              <SvgColor
                src="/assets/images/svgs/leave.svg"
                sx={{
                  width: '12px',
                  height: '12px',
                  pl: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  margin: 0,
                  padding: 1
                }}
              >
                Leave
              </Typography>
            </Box>
        </Menu>
    </div>
  );
};

export default FeedRightContextMenu;
