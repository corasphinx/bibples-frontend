import { useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer } from '@mui/material';
import SimpleBar from 'simplebar-react';
import Wallet from './Wallet';
import Sections from './Sections';
import NewsFeed from './NewsFeed';
import { RIGHT_NAV_WIDTH } from '@/constants/index';

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

interface RightNavProps {
  open: boolean;
  onClose: () => void;
}

const CommunityRightNav: FC<RightNavProps> = ({ open, onClose }) => {
  const { pathname } = useRouter();
  const theme = useTheme();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        px: 4,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box sx={{ mt: 5 }}>
        <Wallet />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Sections />
      </Box>
      <Box sx={{ mt: 2.5, pb: 5 }}>
        <NewsFeed />
      </Box>
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: RIGHT_NAV_WIDTH },
      }}
    >
      <Drawer
        anchor="right"
        open
        variant="permanent"
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.default,
            display: { xs: 'none', lg: 'block' },
            width: RIGHT_NAV_WIDTH,
            border: 'none',
          },
        }}
      >
        {renderContent}
      </Drawer>
      <Drawer
        anchor="right"
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.default,
            display: { xs: 'block', lg: 'none' },
            width: RIGHT_NAV_WIDTH,
            border: 'none',
          },
        }}
      >
        {renderContent}
      </Drawer>
    </Box>
  );
};

export default CommunityRightNav;
