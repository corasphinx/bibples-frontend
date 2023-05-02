import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SvgColor from '@/components/SvgColor';
import { Divider } from '@mui/material';
import Image from 'next/image';
import { StyledActionGroupBox } from './styles';

const LinkItem = () => {
  const theme = useTheme();

  return (
    <StyledActionGroupBox>
      <Typography
        sx={{
          fontSize: '1rem',
          fontWeight: '600',
          color: theme.palette.primary.contrastText,
          margin: 0,
          padding: 0,
        }}
      >
        December 3
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          mb: 1,
          mt: 1,
        }}
      >
        <Image
          src={'/assets/images/1.png'}
          alt=""
          width={83}
          height={83}
          style={{
            borderRadius: '10px',
          }}
        />
        <Box sx={{ ml: 2 }}>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: '600',
              color: theme.palette.primary.contrastText,
              margin: 0,
              padding: 0,
            }}
          >
            Google
          </Typography>
          <Typography
            sx={{
              fontSize: '0.8rem',
              color: theme.palette.primary.contrastText,
              margin: 0,
              padding: 0,
            }}
          >
            <a href="#">www.google.com/search?q=googlesxr...</a>
          </Typography>
          <Divider />
          <Typography
            sx={{
              fontSize: '0.8rem',
              color: theme.palette.primary.contrastText,
              margin: 0,
              padding: 0,
            }}
          >
            December 7 at 10:25 PM
          </Typography>
        </Box>
      </Box>
    </StyledActionGroupBox>
  );
};

export default LinkItem;
