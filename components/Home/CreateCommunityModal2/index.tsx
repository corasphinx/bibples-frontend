import { ChangeEvent, FC, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import DragDropFile from '@/components/Home/DragDropFile';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import CheckedIcon from '@/components/Icons/CheckedIcon';
import UncheckedIcon from '@/components/Icons/UncheckedIcon';
import LightUncheckedIcon from '@/components/Icons/LightUncheckedIcon';

import {
  Divider,
  DialogContent,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

import {
  BootstrapDialog,
  StyledButton,
  StyledOutlinedInput,
  RowBox,
} from './styles';

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: any;
}

interface CreateCommunityModal2Props {
  open: boolean;
  handleClose: () => void;
}
const CreateCommunityModal2: FC<CreateCommunityModal2Props> = ({
  open,
  handleClose,
}) => {
  const theme = useTheme();
  const [checkedSolana, setCheckedSolana] = useState<boolean>(true);
  const [checkedEth, setCheckEth] = useState<boolean>(true);

  const handleChangeSolana = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedSolana(event.target.checked);
  };

  const handleChangeEth = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckEth(event.target.checked);
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="join-community-dialog-title"
        open={open}
        maxWidth="xl"
        PaperProps={{
          style: {
            backgroundImage:
              'linear-gradient(rgba(21,21,21,0.85), rgba(21,21,21,0.85))',
            backgroundColor: 'rgba(0,0,0,0)',
            backdropFilter: 'blur(7.5px)',
          },
        }}
      >
        <DialogContent
          style={{ width: '700px', padding: '0px', textAlign: 'center' }}
        >
          <RowBox>
            <Box
              sx={{
                width: '160px',
                height: '160px',
                border: 'double 3px transparent',
                borderRadius: '50%',
                backgroundImage:
                  'linear-gradient(rgba(21,21,21,1), rgba(21,21,21,1)), radial-gradient(circle at top left, #6AF6FF, #E140E4)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow:
                  '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
              }}
            >
              <Image
                src="/assets/images/svgs/camera.svg"
                alt="User Profile"
                width={50}
                height={50}
              />
            </Box>
            <Box
              sx={{
                width: '60%',
                alignSelf: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  marginBottom: '0.5rem',
                  marginLeft: '1rem',
                }}
              >
                Server Name*
              </Typography>
              <StyledOutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Server name here..."
              />
            </Box>
          </RowBox>

          <Divider />

          <RowBox>
            <Box
              sx={{
                width: '100%',
                alignSelf: 'center',
                paddingRight: '1rem',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  marginBottom: '0.5rem',
                  marginLeft: '1rem',
                }}
              >
                Background Image
              </Typography>
              <DragDropFile />
            </Box>
            <Box
              sx={{
                width: '100%',
                alignSelf: 'center',
                paddingLeft: '1rem',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  marginBottom: '0.5rem',
                  marginLeft: '1rem',
                }}
              >
                Description
              </Typography>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={8}
                placeholder="Description here..."
                style={{
                  backgroundColor: theme.palette.background.default,
                  borderRadius: '10px',
                  fontSize: '1rem',
                  color: '#565A7F',
                  width: '100%',
                  padding: '0.2rem',
                }}
              />
            </Box>
          </RowBox>

          <Divider />

          <RowBox>
            <Box
              sx={{
                width: '100%',
                alignSelf: 'center',
                paddingRight: '1rem',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  marginBottom: '0.5rem',
                  marginLeft: '1rem',
                }}
              >
                Twitter*
              </Typography>
              <StyledOutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Twitter link here..."
              />
            </Box>
            <Box
              sx={{
                width: '100%',
                alignSelf: 'center',
                paddingLeft: '1rem',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  marginBottom: '0.5rem',
                  marginLeft: '1rem',
                }}
              >
                Website
              </Typography>
              <StyledOutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Website link here..."
              />
            </Box>
          </RowBox>

          <RowBox
            style={{
              marginBottom: '1rem',
            }}
          >
            <Box
              sx={{
                width: '100%',
                alignSelf: 'center',
                paddingRight: '1rem',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  marginBottom: '0.5rem',
                  marginLeft: '1rem',
                }}
              >
                Medium
              </Typography>
              <StyledOutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Medium link here..."
              />
            </Box>
            <Box
              sx={{
                width: '100%',
                alignSelf: 'center',
                paddingLeft: '1rem',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  marginBottom: '0.5rem',
                  marginLeft: '1rem',
                }}
              >
                Personalized invitation link
              </Typography>
              <StyledOutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Invitation link here..."
              />
            </Box>
          </RowBox>
          <Box>
            <Typography
              sx={{
                fontSize: '0.9rem',
                textAlign: 'right',
                marginBottom: '0.5rem',
                paddingRight: '3rem',
                background:
                  'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
              }}
            >
              Invite your friends with your invitation link
            </Typography>
          </Box>

          <Divider />
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedEth}
                  onChange={handleChangeEth}
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
              label={
                <Image
                  src="/assets/images/svgs/eth.svg"
                  alt=""
                  width={46}
                  height={68}
                />
              }
              sx={{ color: theme.palette.primary.contrastText }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedSolana}
                  onChange={handleChangeSolana}
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
              label={
                <Image
                  src="/assets/images/svgs/solana.svg"
                  alt=""
                  width={40}
                  height={40}
                />
              }
              sx={{
                color: theme.palette.primary.contrastText,
                paddingLeft: '5rem',
              }}
            />
          </Box>
          <StyledButton variant="contained">Create</StyledButton>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default CreateCommunityModal2;
