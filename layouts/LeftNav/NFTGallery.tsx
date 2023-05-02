import { FC, useState } from 'react';
import {
  FormControl,
  IconButton,
  Select,
  SelectChangeEvent,
  MenuItem,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import SvgColor from '@/components/SvgColor';
import { StyledRootBox, StyledActionGroupBox } from './styles';

const NFTGallery: FC = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState('all');

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <StyledRootBox sx={{ pb: 1 }}>
      <StyledActionGroupBox sx={{ py: 2 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <Select
            value={filter}
            size="small"
            onChange={handleChange}
            sx={{ bgcolor: theme.palette.secondary.main, borderRadius: '10px' }}
          >
            <MenuItem value={'all'}>All NFTs</MenuItem>
            <MenuItem value={'mine'}>My NFTs</MenuItem>
          </Select>
        </FormControl>

        <IconButton
          aria-label="refresh"
          sx={{
            width: 40,
            height: 40,
            bgcolor: theme.palette.secondary.main,
            borderRadius: '10px',
            border: '0.5px solid',
            borderColor: theme.palette.secondary.contrastText,
          }}
        >
          <SvgColor
            src="assets/images/svgs/refresh.svg"
            sx={{
              width: 18,
              height: 18,
              background:
                'linear-gradient(92.74deg, #FA15FF 12.91%, #4079E4 105.44%)',
            }}
          />
        </IconButton>
      </StyledActionGroupBox>
      <Grid container>
        {Array.from(Array(9)).map((_, index) => (
          <Grid key={index} xs={4}>
            <Image
              src={'/assets/images/' + (index + 1) + '.png'}
              alt=""
              width={83}
              height={83}
              style={{
                borderRadius: '10px',
              }}
            />
          </Grid>
        ))}
      </Grid>
    </StyledRootBox>
  );
};

export default NFTGallery;
