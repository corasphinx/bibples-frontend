import { Box, Typography } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import SimpleBar from 'simplebar-react';
import SvgColor from '@/components/SvgColor';
import CommunityCard from '@/components/Home/CommunityCard';
import { FEATURED_COMMUNITIES } from '@/mocks/index';

const Scrollbar = styled(SimpleBar)(({ theme }) => ({
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: theme.palette.primary.contrastText,
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
}));

const StyledRootBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  marginTop: '16px',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '20px',
}));

const FeaturedCommunity = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <StyledTypography sx={{ fontWeight: '600' }}>
          Featured Community
        </StyledTypography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <StyledTypography mr={1}>See all</StyledTypography>
          <SvgColor
            src="assets/images/svgs/right_arrow.svg"
            sx={{
              width: 8,
              height: 8,
              color: theme.palette.primary.contrastText,
            }}
          />
        </Box>
      </Box>
      <StyledRootBox>
        <Scrollbar
          sx={{
            width: 1,
            border: 'none',
            '& .simplebar-content': {
              width: 1,
              display: 'flex',
              flexDirection: 'row',
            },
          }}
        >
          {FEATURED_COMMUNITIES.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </Scrollbar>
      </StyledRootBox>
    </Box>
  );
};

export default FeaturedCommunity;
