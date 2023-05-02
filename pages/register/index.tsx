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
// import { useToasts } from 'react-toast-notifications';
import * as referralCodes from 'referral-codes';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '10px',
  width: '54px',
  height: '54px',
  backgroundColor: alpha('#686868', 0.22),
}));

const Register = () => {
  const theme = useTheme();
  const [checkedVisible, setCheckedVisible] = useState<boolean>(true);

  const handleChangeVisible = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedVisible(event.target.checked);
  };

  // const { addToast } = useToasts();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    const [referralCode] = referralCodes.generate({
      length: 12,
    });
    console.log({referralCode})
    // if (userName === '' || email === '' || password === '')
    //   return addToast('Fill the empty fields!', { appearance: 'error' });
    // if (password !== confirmPassword)
    //   return addToast('Password is invalid', { appearance: 'error' });
  }
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
        <Typography fontSize="15px" color="#FFFFFF">
          User Name
        </Typography>
        <TextField
          hiddenLabel
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
                WebkitBoxShadow: '0 0 0 100px rgba(104, 104, 104, 0.9) inset',
              },
            },
          }}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Typography fontSize="15px" color="#FFFFFF">
          Email
        </Typography>
        <TextField
          hiddenLabel
          autoComplete="email"
          id="email"
          variant="outlined"
          placeholder="Email here..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  src="/assets/images/svgs/mail-prefix.svg"
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
                WebkitBoxShadow: '0 0 0 100px rgba(104, 104, 104, 0.9) inset',
              },
            },
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Typography fontSize="15px" color="#FFFFFF">
          Password
        </Typography>
        <TextField
          hiddenLabel
          id="password"
          type="password"
          variant="outlined"
          placeholder="********"
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
                WebkitBoxShadow: '0 0 0 100px rgba(104, 104, 104, 0.9) inset',
              },
            },
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Typography fontSize="15px" color="#FFFFFF">
          Confirm Password
        </Typography>
        <TextField
          hiddenLabel
          id="confirm-password"
          type="password"
          variant="outlined"
          placeholder="********"
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
                WebkitBoxShadow: '0 0 0 100px rgba(104, 104, 104, 0.9) inset',
              },
            },
          }}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
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
            mt: 2,
            fontSize: 16,
          }}
          onClick={handleSignup}
        >
          Sign up
        </Button>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontSize: 13 }}>
            Already Have an account?{' '}
            <Link
              href="/login"
              sx={{ color: '#FB15FF', textDecorationColor: '#FB15FF' }}
            >
              Sign in
            </Link>
          </Typography>
          <Typography fontSize={8} mt={1}>
            *by clicking “sign up” button you are agree with our{' '}
            <Link
              href="#"
              sx={{ color: '#1563FF', textDecorationColor: '#1563FF' }}
            >
              privacy policy
            </Link>
            and{' '}
            <Link
              href="#"
              sx={{ color: '#1563FF', textDecorationColor: '#1563FF' }}
            >
              terms & condition.
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
