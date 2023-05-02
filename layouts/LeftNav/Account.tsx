import * as React from 'react';
import { FC } from 'react';
import Image from 'next/image';
import { IconButton, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SvgColor from '@/components/SvgColor';
import ProfileModal from '@/components/Home/ProfileModal';
import {
  StyledRootBox,
  StyledActionGroupBox,
  StyledActionBox,
  StyledProfileImageBox,
} from './styles';

const Account: FC = () => {
  const theme = useTheme();
  const [openProfile, setProfileOpen] = React.useState(false);

  const handleProfileOpen = () => {
    setProfileOpen(true);
  };
  const handleProfileClose = () => {
    setProfileOpen(false);
  };
  
  return (
    <StyledRootBox>
      <StyledActionGroupBox sx={{ py: 1 }}>
        <StyledActionBox>
          <IconButton
            onClick={handleProfileOpen}
          >
            <SvgColor
              src="/assets/images/svgs/settings.svg"
              sx={{
                width: 16,
                height: 16,
                color: theme.palette.primary.contrastText,
              }}
            />
          </IconButton>
          <ProfileModal open={openProfile} handleClose={handleProfileClose} />
          <IconButton>
            <SvgColor
              src="/assets/images/svgs/user-account.svg"
              sx={{
                width: 16,
                height: 16,
                color: theme.palette.primary.contrastText,
              }}
            />
          </IconButton>
          <IconButton>
            <SvgColor
              src="/assets/images/svgs/out.svg"
              sx={{
                width: 16,
                height: 16,
                color: theme.palette.primary.contrastText,
              }}
            />
          </IconButton>
        </StyledActionBox>
        <StyledActionBox>
          <IconButton>
            <SvgColor
              src="/assets/images/svgs/bell.svg"
              sx={{
                width: 16,
                height: 16,
                color: theme.palette.primary.contrastText,
              }}
            />
          </IconButton>
          <IconButton>
            <SvgColor
              src="/assets/images/svgs/mail.svg"
              sx={{
                width: 16,
                height: 16,
                color: theme.palette.primary.contrastText,
              }}
            />
          </IconButton>
        </StyledActionBox>
      </StyledActionGroupBox>
      <Divider
        sx={{
          color:
            theme.palette.mode === 'dark'
              ? 'rgba(104, 104, 104, 0.22)'
              : '#565A7F',
        }}
      />
      <StyledProfileImageBox>
        <Image
          src="/assets/images/profile.png"
          alt="User Profile"
          width={160}
          height={160}
          style={{
            padding: '3.6px',
            borderRadius: '50%',
            background: 'linear-gradient(to right, #6AF6FF, #E140E4)',
          }}
        />
        <Typography
          sx={{
            marginTop: '10px',
            background:
              'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            fontSize: '1.25rem',
          }}
        >
          Biplesmember22
        </Typography>
      </StyledProfileImageBox>
    </StyledRootBox>
  );
};

export default Account;
