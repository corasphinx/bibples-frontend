import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  Checkbox,
  InputAdornment,
  FormControlLabel,
  Divider,
} from '@mui/material';
import { useTheme, styled, alpha } from '@mui/material/styles';
import Image from 'next/image';
import CheckedIcon from '@/components/Icons/CheckedIcon';
import UncheckedIcon from '@/components/Icons/UncheckedIcon';
import Link from '@/components/Link';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '10px',
  width: '54px',
  height: '54px',
  backgroundColor: alpha('#686868', 0.22),
}));

const Login = () => {
  const theme = useTheme();
  const [checkedVisible, setCheckedVisible] = useState<boolean>(true);

  const handleChangeVisible = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedVisible(event.target.checked);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        py: 10,
        bgcolor: '#111111',
      }}
    >
      <Image
        src="/assets/images/svgs/logo-dark.svg"
        width={137}
        height={45}
        alt="Logo"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          borderWidth: 1,
          borderStyle: (theme) =>
            theme.palette.mode === 'dark' ? 'solid' : 'none',
          borderColor: '#252525',
          borderRadius: '12px',
          background:
            'linear-gradient(20.08deg, rgba(0, 0, 0, 0.48) 6.24%, rgba(10, 0, 0, 0.07) 103.48%)',
          backdropFilter: 'blur(62.5px)',
          px: { xs: 2, md: 10 },
          py: { xs: 6, md: 8 },
          mt: 5,
          width: { xs: 350, md: 520 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: -10,
          }}
        >
          <Image
            src="/assets/images/svgs/glow-login.svg"
            width={100}
            height={100}
            alt=""
            style={{ height: 400, width: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Typography fontSize={25} fontWeight={600}>
            Sign in
          </Typography>
          <Typography fontSize={13}>
            <Link href="/register" underline="none" sx={{ color: '#4079E4' }}>
              Create account
            </Link>{' '}
            instead?
          </Typography>
        </Box>

        <Typography fontSize="15px" color="#FFFFFF">
          User Name
        </Typography>
        <TextField
          hiddenLabel
          fullWidth
          autoComplete="username"
          id="user-name"
          variant="outlined"
          placeholder="User name here..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  src="/assets/images/svgs/user-prefix.svg"
                  width={10}
                  height={10}
                  alt=""
                  priority
                  style={{ color: '#6D6D6D' }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            mt: 1,
            mb: 3,
            fontSize: '13px',
            '& .MuiOutlinedInput-root': {
              backgroundColor: alpha('#686868', 0.22),
              borderRadius: '10px',
              '& fieldset': {
                border: 'none',
              },
              '&:hover fieldset': {},

              '&.Mui-focused fieldset': {},
              '& input:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 30px rgba(104, 104, 104, 0.9) inset',
              },
            },
          }}
        />
        <Typography fontSize="15px" color="#FFFFFF">
          Password
        </Typography>
        <TextField
          hiddenLabel
          id="password"
          type="password"
          variant="outlined"
          placeholder="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  src="/assets/images/svgs/lock-prefix.svg"
                  width={10}
                  height={10}
                  alt=""
                  style={{ color: '#6D6D6D' }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            mt: 1,
            mb: 3,
            fontSize: '13px',
            '& .MuiOutlinedInput-root': {
              backgroundColor: alpha('#686868', 0.22),
              borderRadius: '10px',
              '& fieldset': {
                border: 'none',
              },
              '&:hover fieldset': {},
              '&.Mui-focused fieldset': {},
              '& input:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 30px rgba(104, 104, 104, 0.9) inset',
              },
            },
          }}
        />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedVisible}
                  onChange={handleChangeVisible}
                  icon={<UncheckedIcon />}
                  checkedIcon={<CheckedIcon />}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label="Remember me"
              sx={{ fontSize: '13px' }}
            />
          </Box>
          <Link
            href="/login"
            sx={{ fontSize: '10px', color: '#4079E4' }}
            underline="none"
          >
            Forget your password?
          </Link>
        </Box>

        <Button
          variant="contained"
          sx={{
            background:
              'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
            textTransform: 'none',
            color: theme.palette.primary.contrastText,
            borderRadius: '10px',
            py: 1.25,
            mb: 3,
            fontSize: 16,
          }}
        >
          Sign in
        </Button>
        <Divider sx={{ fontSize: '13px', mb: 3 }}>or</Divider>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <StyledIconButton>
            <Image
              src="/assets/images/svgs/metamask.svg"
              width={30}
              height={30}
              style={{ cursor: 'pointer' }}
              alt="social-metamask"
            />
          </StyledIconButton>
          <StyledIconButton>
            <Image
              src="/assets/images/svgs/trustwallet.svg"
              width={30}
              height={30}
              style={{ cursor: 'pointer' }}
              alt="social-images"
            />
          </StyledIconButton>
          <StyledIconButton>
            <Image
              src="/assets/images/svgs/coinbase.svg"
              width={30}
              height={30}
              style={{ cursor: 'pointer' }}
              alt="social-coinbase"
            />
          </StyledIconButton>
          <StyledIconButton>
            <Image
              src="/assets/images/svgs/google.svg"
              width={30}
              height={30}
              style={{ cursor: 'pointer' }}
              alt="social-google"
            />
          </StyledIconButton>
          <StyledIconButton>
            <Image
              src="/assets/images/svgs/twitter.svg"
              width={30}
              height={30}
              style={{ cursor: 'pointer' }}
              alt="social-twitter"
            />
          </StyledIconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
