import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import SvgColor from '@/components/SvgColor';
import { StyledActionGroupBox, StyledIconButton } from './styles';
import SubscriptionMenu from '@/components/Home/SubscriptionMenu';

const CommunityItem = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const subscriptionOpen = Boolean(anchorEl);
  const handleSubscriptionOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSubscriptionClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledActionGroupBox sx={{ height: 58 }}>
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
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <SvgColor
          src="/assets/images/svgs/users.svg"
          sx={{
            width: '12px',
            height: '12px',
            pl: 2,
            color: theme.palette.primary.contrastText,      
          }}
        />
        <Typography
          sx={{
            fontSize: '0.8rem',
            color: theme.palette.primary.contrastText,
            margin: 0,
            padding: 0,
          }}
        >
          140K members
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <SvgColor
          src="/assets/images/svgs/users-online.svg"
          sx={{
            width: '12px',
            height: '12px',
            pl: 2,
            color: theme.palette.primary.contrastText,
          }}
        />
        <Typography
          sx={{
            fontSize: '0.8rem',
            color: theme.palette.primary.contrastText,
            margin: 0,
            padding: 0,
          }}
        >
          1K online
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}
        onClick={handleSubscriptionOpen}
      >
        <Typography
          sx={{
            fontSize: '0.8rem',
            color: theme.palette.primary.contrastText,
            margin: 0,
            padding: 0,
          }}
        >
          $
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <SvgColor
          src="/assets/images/svgs/join.svg"
          sx={{
            width: '12px',
            height: '12px',
            pl: 2,
            color: theme.palette.primary.contrastText,
          }}
        />
        <Typography
          sx={{
            fontSize: '0.8rem',
            color: theme.palette.primary.contrastText,
            margin: 0,
            padding: 0,
          }}
        >
          Join
        </Typography>
      </Box>
      <SubscriptionMenu anchorEl={anchorEl} subscriptionOpen={subscriptionOpen} handleClose={handleSubscriptionClose} />
    </StyledActionGroupBox>
  );
};

export default CommunityItem;
