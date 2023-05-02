import { FC } from 'react';
import { useTheme } from '@mui/material/styles';

import Menu from '@mui/material/Menu';
import { Box, Typography } from '@mui/material';

import SvgColor from '@/components/SvgColor';
import { Divider } from '@mui/material';

import { MethodBox } from './styles';

interface SubscriptionMenuProps {
  anchorEl: null | HTMLElement;
  subscriptionOpen: boolean;
  handleClose: () => void;
}
const SubscriptionMenu: FC<SubscriptionMenuProps> = ({
  anchorEl,
  subscriptionOpen,
  handleClose,
}) => {
  const theme = useTheme();

  return (
    <Menu
      id="community-menu"
      anchorEl={anchorEl}
      open={subscriptionOpen}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      PaperProps={{
        style: {
          backgroundImage:
            'linear-gradient(rgba(50,50,50,0.2), rgba(50,50,50,0.2))',
          backgroundColor: 'rgba(0,0,0,0.43)',
          backdropFilter: 'blur(5px)',
          textAlign: 'center',
          padding: '1rem 2rem',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: '15px',
          fontWeight: '600',
        }}
      >
        This community requires a subscription
      </Typography>
      <Divider sx={{ margin: '0.8rem 0' }} />
      <Typography
        sx={{
          fontSize: '35px',
          fontWeight: '600',
        }}
      >
        99.99$
      </Typography>
      <Typography
        sx={{
          fontSize: '15px',
          fontWeight: '500',
          margin: '0.8rem 0',
        }}
      >
        monthly subscription
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          cursor: 'pointer',
          justifyContent: 'center',
        }}
      >
        <SvgColor
          src="/assets/images/svgs/about.svg"
          sx={{
            width: '12px',
            height: '12px',
            color: '#565A7F',
          }}
        />
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '500',
            color: '#565A7F',
            pl: 1,
          }}
        >
          Biples charges 5% fee on these payments
        </Typography>
      </Box>
      <Divider sx={{ margin: '0.8rem 0' }} />
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: '500',
          color: '#565A7F',
        }}
      >
        Choose your payment method
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <MethodBox>
          <SvgColor
            src="/assets/images/svgs/binance.svg"
            sx={{
              width: '18px',
              height: '25px',
              margin: '0.2rem 0.6rem'
            }}
          />
        </MethodBox>
        <MethodBox>
          <SvgColor
            src="/assets/images/svgs/etherum.svg"
            sx={{
              width: '18px',
              height: '25px',
              margin: '0.2rem 0.6rem'
            }}
          />
        </MethodBox>
        <MethodBox>
          <SvgColor
            src="/assets/images/svgs/tether.svg"
            sx={{
              width: '22px',
              height: '35px',
              margin: '0.2rem 0.6rem'
            }}
          />
        </MethodBox>
        <MethodBox>
          <SvgColor
            src="/assets/images/svgs/card.svg"
            sx={{
              width: '25px',
              height: '25px',
              margin: '0.2rem 0.4rem'
            }}
          />
        </MethodBox>
      </Box>
    </Menu>
  );
};

export default SubscriptionMenu;
