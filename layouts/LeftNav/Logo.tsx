import { forwardRef } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from '@/components/Link';

interface LogoProps {
  sx?: any;
  disabledLink?: boolean;
}

const Logo = forwardRef<any, LogoProps>(
  ({ disabledLink = false, sx = {}, ...other }, ref) => {
    const theme = useTheme();
    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          ...sx,
        }}
        {...other}
      >
        <Image
          src={
            theme.palette.mode === 'dark'
              ? '/assets/images/svgs/logo-dark.svg'
              : '/assets/images/svgs/logo-light.svg'
          }
          width={160}
          height={52}
          alt="Logo"
        />
      </Box>
    );

    if (disabledLink) {
      return <>{logo}</>;
    }

    return <Link href="/">{logo}</Link>;
  }
);

Logo.displayName = 'Logo';

export default Logo;
