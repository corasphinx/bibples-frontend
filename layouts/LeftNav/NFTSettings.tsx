import { ChangeEvent, FC, useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledRootBox } from './styles';
import CheckedIcon from '@/components/Icons/CheckedIcon';
import UncheckedIcon from '@/components/Icons/UncheckedIcon';
import LightUncheckedIcon from '@/components/Icons/LightUncheckedIcon';

const NFTSettings: FC = () => {
  const theme = useTheme();
  const [checkedVisible, setCheckedVisible] = useState<boolean>(true);
  const [checkedAlert, setCheckedAlert] = useState<boolean>(true);

  const handleChangeVisible = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedVisible(event.target.checked);
  };

  const handleChangeAlert = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedAlert(event.target.checked);
  };

  return (
    <StyledRootBox>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedVisible}
              onChange={handleChangeVisible}
              icon={
                theme.palette.mode === 'dark' ? (
                  <UncheckedIcon />
                ) : (
                  <LightUncheckedIcon />
                )
              }
              checkedIcon={<CheckedIcon />}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="My NFTs are visible to everyone"
          sx={{ color: theme.palette.primary.contrastText, py: 1 }}
        />
        <Divider
          sx={{
            color:
              theme.palette.mode === 'dark'
                ? 'rgba(104, 104, 104, 0.22)'
                : '#565A7F',
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedAlert}
              onChange={handleChangeAlert}
              icon={
                theme.palette.mode === 'dark' ? (
                  <UncheckedIcon />
                ) : (
                  <LightUncheckedIcon />
                )
              }
              checkedIcon={<CheckedIcon />}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="Be alerted to purchase offers received"
          sx={{ color: theme.palette.primary.contrastText, py: 1 }}
        />
      </FormGroup>
    </StyledRootBox>
  );
};

export default NFTSettings;
