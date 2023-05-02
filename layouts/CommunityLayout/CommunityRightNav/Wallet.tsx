import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import SvgColor from '@/components/SvgColor';
import {
  StyledRootBox,
  StyledActionGroupBox,
  StyledIconButton,
} from './styles';

const Wallet = () => {
  const theme = useTheme();
  return (
    <StyledRootBox>
      <StyledActionGroupBox sx={{ height: 58, px: 1, py: 2 }}>
        <Box sx={{ display: 'flex' }}>
          <Image
            src="/assets/images/svgs/metamask.svg"
            alt=""
            width={30}
            height={30}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              pl: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: '10px',
                color: '#565A7F',
                margin: 0,
                padding: 0,
              }}
            >
              Ethereum
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '10px',
                  color: theme.palette.primary.contrastText,
                  margin: 0,
                  padding: 0,
                }}
              >
                0x63Z...2dcd1
              </Typography>
              <SvgColor
                src="/assets/images/svgs/arrow-down.svg"
                sx={{ width: '6px', height: '3.5px', pl: 2 }}
              />
            </Box>
          </Box>
        </Box>
        <StyledIconButton>
          <SvgColor
            src="/assets/images/svgs/copy.svg"
            sx={{
              width: '11px',
              height: '11px',
              color: theme.palette.primary.contrastText,
            }}
          />
        </StyledIconButton>
        <StyledIconButton>
          <SvgColor
            src="/assets/images/svgs/power.svg"
            sx={{
              width: '11px',
              height: '11px',
              color: theme.palette.primary.contrastText,
            }}
          />
        </StyledIconButton>
      </StyledActionGroupBox>
    </StyledRootBox>
  );
};

export default Wallet;
