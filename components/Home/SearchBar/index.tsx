import { InputAdornment, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';
import SvgColor from '@/components/SvgColor';

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '0px 16px',
  textAlign: 'center',
  borderRadius: '10px',
}));

export const SearchBar = () => (
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
);
