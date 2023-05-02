import type { ReactElement } from 'react';
import { Box, InputAdornment, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { NextPageWithLayout } from '@/pages/_app';
import HomeLayout from '@/layouts/HomeLayout';
import { SearchBar } from '@/components/Home/SearchBar';
import SearchResult from '@/components/Home/SearchResult';
import FeaturedCommunity from '@/components/Home/FeaturedCommunity';
import CuratedCommunity from '@/components/Home/CuratedCommunity';
import SvgColor from '@/components/SvgColor';

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '0px 16px',
  textAlign: 'center',
  borderRadius: '10px',
}));

const Home: NextPageWithLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        px: 4,
        py: 3,
        bgcolor: 'primary.main',
        borderRadius: '15px',
      }}
    >
      <StyledOutlinedInput
        defaultValue=""
        fullWidth
        placeholder="Explorer"
        startAdornment={
          <InputAdornment position="start">
            <SvgColor
              src="/assets/images/svgs/search.svg"
              sx={{ width: 12, height: 12 }}
            />
          </InputAdornment>
        }
      />
      <SearchResult />
      <FeaturedCommunity />
      <CuratedCommunity />
    </Box>
  );
};

Home.getLayout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;

export default Home;
