import { Box, Divider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SvgColor from '@/components/SvgColor';
import { StyledRootBox } from './styles';
import FeedItem from './FeedItem';

const NewsFeed = () => {
  const theme = useTheme();
  return (
    <StyledRootBox sx={{ py: 2 }}>
      <Box
        sx={{
          height: 45,
          bgcolor: theme.palette.background.default,
          borderColor:
            theme.palette.mode === 'dark' ? 'transparent' : '#C7C7C7',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          cursor: 'pointer',
        }}
      >
        <SvgColor
          src="/assets/images/svgs/arrow-down.svg"
          sx={{
            transform: 'scaleY(-1)',
            width: 12,
            height: 14,
            color: theme.palette.primary.contrastText,
          }}
        />
        <Typography sx={{ color: theme.palette.primary.contrastText, pl: 2 }}>
          News Feed (45)
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {Array.from(Array(10)).map((_, index) => (
          <FeedItem key={index} />
        ))}
      </Box>
    </StyledRootBox>
  );
};

export default NewsFeed;
