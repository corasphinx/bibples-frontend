import { useState, FC } from 'react';
import { Box } from '@mui/material';
import PrivateChatTopNav from '@/layouts/PrivateChatLayout/PrivateChatTopNav';
import LeftNav from '@/layouts/LeftNav';
import PrivateChatRightNav from '@/layouts/PrivateChatLayout/PrivateChatRightNav';
import {
  LEFT_NAV_WIDTH,
  RIGHT_NAV_WIDTH,
  APP_BAR_MOBILE,
  APP_BAR_DESKTOP,
} from '@/constants/index';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const PrivateChatLayout: FC<LayoutProps> = ({ children }) => {
  const [openLeftNav, setOpenLeftNav] = useState<boolean>(false);
  const [openRightNav, setOpenRightNav] = useState<boolean>(false);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          maxWidth: '100%',
          pl: { lg: `${LEFT_NAV_WIDTH}px` },
          pr: { lg: `${RIGHT_NAV_WIDTH}px` },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            pt: { xs: `${APP_BAR_MOBILE}px`, lg: `${APP_BAR_DESKTOP + 40}px` },
            pb: 5,
          }}
        >
          {children}
        </Box>
      </Box>
      <PrivateChatTopNav
        onOpenLeftNav={() => setOpenLeftNav(true)}
        onOpenRightNav={() => setOpenRightNav(true)}
      />
      <LeftNav open={openLeftNav} onClose={() => setOpenLeftNav(false)} />
      <PrivateChatRightNav
        open={openRightNav}
        onClose={() => setOpenRightNav(false)}
      />
    </>
  );
};

export default PrivateChatLayout;
