import * as React from 'react';
import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import SvgColor from '@/components/SvgColor';
import {
  StyledRootBox,
  StyledInfoBox,
  StyledActionBox,
  StyledProfileImageBox,
} from './styles';
import { Avatar } from '@mui/material';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';

import CreateCommunityModal2 from '@/components/Home/CreateCommunityModal2';

import { StyledButton } from './styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface CreateCommunityModalProps {
  open: boolean;
  handleClose: () => void;
}
const CreateCommunityModal: FC<
  CreateCommunityModalProps
> = ({ open, handleClose }) => {
  const [type, setCreateCommunityType] = React.useState('digital');
  const [openCreateCommunityModal2, setCreateCommunity2Open] = React.useState(false);

  const createWith = (type) => {
    setCreateCommunityType(type);
    setCreateCommunity2Open(true);
    handleClose();
  }
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="create-dialog-dialog-title"
        open={open}
        maxWidth='xl'
        PaperProps={{
          style:{
            backgroundImage: 'linear-gradient(rgba(21,21,21,0.85), rgba(21,21,21,0.85))',
            backgroundColor: 'rgba(0,0,0,0)',
            backdropFilter: 'blur(7.5px)'
          }
        }}
      >
        <BootstrapDialogTitle
          id="create-dialog-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{mt: 10, mb: 10, pl:5, pr:5}}>
            <Grid item xs={4} style={{textAlign: 'center'}} onClick={() => createWith('digital')}>
              <Image
                src={'/assets/images/community-digital-collectibles.png'}
                alt="community-digital-collectibles"
                width={90}
                height={70}
              />
              <StyledButton variant="contained" sx={{ mt: 2.5 }} style={{justifyContent: 'center'}}>
                Digital Collectibles
              </StyledButton>
            </Grid>
            <Grid item xs={4} style={{textAlign: 'center'}} onClick={() => createWith('crypto')}>
              <Image
                src={'/assets/images/community-cryptocurrencies.png'}
                alt="community-cryptocurrencies"
                width={70}
                height={70}
              />
              <StyledButton variant="contained" sx={{ mt: 2.5 }} style={{justifyContent: 'center'}}>
                Cryptocurrencies
              </StyledButton>
            </Grid>
            <Grid item xs={4} style={{textAlign: 'center'}} onClick={() => createWith('others')}>
              <Image
                src={'/assets/images/community-others.png'}
                alt="community-others"
                width={80}
                height={70}
              />
              <StyledButton variant="contained" sx={{ mt: 2.5 }} style={{justifyContent: 'center'}}>
                Others
              </StyledButton>
            </Grid>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
      <CreateCommunityModal2 open={openCreateCommunityModal2} type={type} />
    </div>
  );
};

export default CreateCommunityModal;
