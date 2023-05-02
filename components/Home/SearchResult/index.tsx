import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledRootBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
  borderRadius: '10px',
  height: '185px',
  marginTop: '30px',
}));

const SearchResult = () => {
  return <StyledRootBox></StyledRootBox>;
};

export default SearchResult;
