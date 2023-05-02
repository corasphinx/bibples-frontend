import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import SvgColor from '@/components/SvgColor';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, InputAdornment, OutlinedInput } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import FileItem from './FileItem';

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
  onClose: any;
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

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  borderRadius: '10px',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  borderRadius: '10px',
  margin: '10px 0px',
  padding: '0px',
}));

const StyledJoinButton = styled(Button)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)'
      : theme.palette.primary.main,
  height: 58,
  minWidth: 260,
  marginTop: '20px',
}));

interface FileModalProps {
  open: boolean;
  handleClose: () => void;
}
const FileModal: FC<FileModalProps> = ({ open, handleClose }) => {
  const theme = useTheme();

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="gallery-dialog-title"
        open={open}
        maxWidth="sm"
        PaperProps={{
          style: {
            backgroundImage:
              'linear-gradient(rgba(21,21,21,0.85), rgba(21,21,21,0.85))',
            backgroundColor: 'rgba(0,0,0,0)',
            backdropFilter: 'blur(7.5px)',
          },
        }}
      >
        <BootstrapDialogTitle id="gallery-dialog-title" onClose={true}>
          Files
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <h4>December</h4>
          <Grid container>
            {Array.from(Array(5)).map((_, index) => (
              <FileItem key={index}/>
            ))}
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default FileModal;
