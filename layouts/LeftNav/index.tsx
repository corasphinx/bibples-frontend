import { useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Drawer } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import SimpleBar from 'simplebar-react';
import Logo from './Logo';
import Account from './Account';
import NFTGallery from './NFTGallery';
import NFTSettings from './NFTSettings';
import ColorMode from './ColorMode';
import { LEFT_NAV_WIDTH } from '@/constants/index';

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

interface LeftNavProps {
  open: boolean;
  onClose: () => void;
}

const LeftNav: FC<LeftNavProps> = ({ open, onClose }) => {
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
      <Box
        sx={{
          mt: 5,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Logo />
      </Box>

      <Box sx={{ mt: 5 }}>
        <Account />
      </Box>

      <Box sx={{ mt: 2.5 }}>
        <NFTGallery />
      </Box>

      <Box sx={{ mt: 2.5 }}>
        <NFTSettings />
      </Box>

      <Box sx={{ mt: 2.5, pb: 5 }}>
        <ColorMode />
      </Box>
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: LEFT_NAV_WIDTH },
      }}
    >
      <Drawer
        anchor="left"
        open
        variant="permanent"
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.default,
            display: { xs: 'none', lg: 'block' },
            width: LEFT_NAV_WIDTH,
            border: 'none',
          },
        }}
      >
        {renderContent}
      </Drawer>
      <Drawer
        anchor="left"
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
            width: LEFT_NAV_WIDTH,
            border: 'none',
          },
        }}
      >
        {renderContent}
      </Drawer>
    </Box>
  );
};

export default LeftNav;
