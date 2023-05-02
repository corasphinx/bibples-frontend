import * as React from 'react';
import { ChangeEvent, FC, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import SvgColor from '@/components/SvgColor';
import {
  BootstrapDialog,
  StyledProfileImageBox,
  StyledOutlinedInput,
  StyledPinInput,
  StyledButton,
} from './styles';
import {
  Box,
  Typography,
  Divider,
  DialogTitle,
  DialogContent,
  IconButton,
  InputAdornment,
  FormControlLabel,
  FormControl,
  MenuItem,
  SelectChangeEvent,
  Select,
  Button,
  Checkbox,
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ToggleIcon from '@/components/Icons/ToggleIcon';
import UnToggleIcon from '@/components/Icons/UnToggleIcon';
import LightUnToggleIcon from '@/components/Icons/LightUnToggleIcon';
import ReactCodeInput from 'react-code-input';

import ConnectWalletModal from '@/components/Home/ConnectWalletModal';

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            p: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      ) : null}
      {children}
    </DialogTitle>
  );
}

interface ProfileModalProps {
  open: boolean;
  handleClose: () => void;
}
const ProfileModal: FC<ProfileModalProps> = ({ open, handleClose }) => {
  const theme = useTheme();
  const [checkedSound, setCheckedSound] = useState<boolean>(true);
  const [checkedPrivate, setCheckedPrivate] = useState<boolean>(true);

  const handleChangeSound = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedSound(event.target.checked);
  };

  const handleChangePrivate = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedPrivate(event.target.checked);
  };

  const [filter, setFilter] = useState('all');

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  const [openConnectWallet, setConnectWalletOpen] = React.useState(false);
  const handleConnectWalletOpen = () => {
    setConnectWalletOpen(true);
  };
  const handleConnectWalletClose = () => {
    setConnectWalletOpen(false);
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="profile-dialog-title"
      open={open}
      maxWidth="xl"
      PaperProps={{
        style: {
          backgroundImage:
            'linear-gradient(rgba(21,21,21,0.85), rgba(21,21,21,0.85))',
          backgroundColor: 'rgba(0,0,0,0)',
          backdropFilter: 'blur(7.5px)',
          borderRadius: '10px',
          padding: '1rem 2rem',
        },
      }}
    >
      <BootstrapDialogTitle id="profile-dialog-title" onClose={handleClose}>
        Account Settings
      </BootstrapDialogTitle>
      <DialogContent>
        <Divider sx={{ margin: '0 0 1rem 0' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            placeContent: 'space-between',
          }}
        >
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

          <Divider orientation="vertical" sx={{ margin: '0 2rem' }} flexItem />

          <Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginBottom: '0.3rem',
                }}
              >
                Old Password
              </Typography>
              <StyledOutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Old Password..."
                endAdornment={
                  <InputAdornment position="end">
                    <SvgColor
                      src="/assets/images/svgs/eye.svg"
                      sx={{ width: 15, height: 15, cursor: 'pointer' }}
                    />
                  </InputAdornment>
                }
              />
            </Box>
            <Box
              sx={{
                margin: '1rem 0',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginBottom: '0.3rem',
                }}
              >
                New Password
              </Typography>
              <StyledOutlinedInput
                defaultValue=""
                fullWidth
                placeholder="New Password..."
                endAdornment={
                  <InputAdornment position="end">
                    <SvgColor
                      src="/assets/images/svgs/eye.svg"
                      sx={{ width: 15, height: 15, cursor: 'pointer' }}
                    />
                  </InputAdornment>
                }
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginBottom: '0.3rem',
                }}
              >
                Confirm Password
              </Typography>
              <StyledOutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Confirm Password..."
                endAdornment={
                  <InputAdornment position="end">
                    <SvgColor
                      src="/assets/images/svgs/eye.svg"
                      sx={{ width: 15, height: 15, cursor: 'pointer' }}
                    />
                  </InputAdornment>
                }
              />
            </Box>
          </Box>

          <Divider orientation="vertical" sx={{ margin: '0 2rem' }} flexItem />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '600',
              }}
            >
              Notifications
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedPrivate}
                  onChange={handleChangePrivate}
                  icon={
                    theme.palette.mode === 'dark' ? (
                      <UnToggleIcon />
                    ) : (
                      <LightUnToggleIcon />
                    )
                  }
                  checkedIcon={<ToggleIcon />}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label="Private messages"
              sx={{ color: theme.palette.primary.contrastText }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedSound}
                  onChange={handleChangeSound}
                  icon={
                    theme.palette.mode === 'dark' ? (
                      <UnToggleIcon />
                    ) : (
                      <LightUnToggleIcon />
                    )
                  }
                  checkedIcon={<ToggleIcon />}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label="Sound"
              sx={{ color: theme.palette.primary.contrastText }}
            />
            <Divider sx={{ margin: '1rem 0' }} />

            <FormControl sx={{ minWidth: 200 }}>
              <Select
                value={filter}
                size="small"
                onChange={handleChange}
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  borderRadius: '10px',
                }}
              >
                <MenuItem value={'all'}>Select language</MenuItem>
                <MenuItem value={'English'}>English</MenuItem>
                <MenuItem value={'Chinese'}>Chinese</MenuItem>
              </Select>
            </FormControl>
            <Divider sx={{ margin: '1rem 0' }} />

            <StyledButton variant="contained" onClick={handleConnectWalletOpen}>
              Connect Wallet
            </StyledButton>
            <ConnectWalletModal
              open={openConnectWallet}
              handleClose={handleConnectWalletClose}
            />
          </Box>
        </Box>

        <Divider sx={{ margin: '1rem 0' }} />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            placeContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: '600',
                marginBottom: '0.3rem',
              }}
            >
              Twitter
            </Typography>
            <StyledOutlinedInput
              defaultValue=""
              fullWidth
              placeholder="Twitter link here..."
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: '600',
                marginBottom: '0.3rem',
              }}
            >
              Medium
            </Typography>
            <StyledOutlinedInput
              defaultValue=""
              fullWidth
              placeholder="Medium link here..."
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: '600',
                marginBottom: '0.3rem',
              }}
            >
              Website
            </Typography>
            <StyledOutlinedInput
              defaultValue=""
              fullWidth
              placeholder="Website link here..."
            />
          </Box>
        </Box>

        <Divider sx={{ margin: '1rem 0' }} />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            placeContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '0.5rem',
              }}
            >
              Two-factor Authentication
            </Typography>
            <Typography
              sx={{
                fontSize: '12px',
                marginBottom: '1rem',
                maxWidth: '25rem',
              }}
            >
              Download and install Google Authenticator. Enable Two-factor
              Authentication to protect your account from unauthorized access.
              Scan the QR code with your Google Authenticator App or enter the
              secret key manually.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ReactCodeInput
                type="text"
                fields={6}
                name={'Enable 2FA'}
                inputMode="tel"
                inputStyle={{
                  margin: '4px',
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '10px',
                  fontSize: '2rem',
                  paddingLeft: '0.8rem',
                  backgroundColor: 'black',
                  border: '1px solid',
                }}
              />
              <StyledButton variant="contained">Enable</StyledButton>
            </Box>
          </Box>
          <Divider orientation="vertical" sx={{ margin: '0 2rem' }} flexItem />
          <Box>
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '0.5rem',
              }}
            >
              Secret key
            </Typography>
            <Typography
              sx={{
                fontSize: '12px',
                marginBottom: '1rem',
                maxWidth: '15rem',
              }}
            >
              Write down this code, never reveal it to others. You can use it to
              regain access to your account if there is no access to the
              authenticator.
            </Typography>
            <StyledOutlinedInput
              value="323145214124seda31asertgh"
              fullWidth
              readOnly
              placeholder="Secret key..."
              endAdornment={
                <InputAdornment position="end">
                  <SvgColor
                    src="/assets/images/svgs/copy.svg"
                    sx={{ width: 15, height: 15, cursor: 'pointer' }}
                  />
                </InputAdornment>
              }
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            placeContent: 'space-between',
            marginTop: '2rem',
          }}
        >
          <Button variant="contained" color="error">
            Delete your account
          </Button>
          <Button variant="contained" color="secondary" sx={{ color: 'white' }}>
            Save changes
          </Button>
        </Box>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default ProfileModal;
