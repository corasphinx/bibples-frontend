import { useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Drawer,
  Typography,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import SimpleBar from 'simplebar-react';
import PrivateMessages from './PrivateMessages';
import GroupMessages from './GroupMessages';
import Invites from './Invites';
import { RIGHT_NAV_WIDTH } from '@/constants/index';
import SvgColor from '@/components/SvgColor';

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

const PrivateChatRightNav: FC<RightNavProps> = ({ open, onClose }) => {
  const { pathname } = useRouter();
  const theme = useTheme();

  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

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
          height: '58px',
          bgcolor: 'primary.main',
          px: '14px',
          py: '10px',
          my: 5,
          borderRadius: '10px',
        }}
      >
        <OutlinedInput
          id="search-input"
          defaultValue=""
          fullWidth
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <SvgColor
                src="/assets/images/svgs/search.svg"
                sx={{ width: 12, height: 12, bgcolor: 'text.secondary' }}
              />
            </InputAdornment>
          }
          sx={{
            bgcolor: 'background.default',
            px: 2,
            height: '40px',
            textAlign: 'center',
            borderRadius: '10px',
          }}
        />
      </Box>
      <Box
        sx={{
          bgcolor: 'primary.main',
          borderRadius: '10px',
          px: '14px',
          py: '26px',
        }}
      >
        <GroupMessages />
        <PrivateMessages />
        <Invites />
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

export default PrivateChatRightNav;
