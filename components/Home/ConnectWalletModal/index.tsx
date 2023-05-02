import * as React from 'react';
import { ChangeEvent, FC, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import SvgColor from '@/components/SvgColor';
import {
  WalletBox,
  StyledInfoBox,
  StyledActionBox,
  StyledProfileImageBox,
} from './styles';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControlLabel,
  Checkbox,
  IconButton,
} from '@mui/material';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import CheckedIcon from '@/components/Icons/CheckedIcon';
import UncheckedIcon from '@/components/Icons/UncheckedIcon';
import LightUncheckedIcon from '@/components/Icons/LightUncheckedIcon';

import SwipeableViews from 'react-swipeable-views';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

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

interface ConnectWalletModalProps {
  open: boolean;
  handleClose: () => void;
}
const ConnectWalletModal: FC<ConnectWalletModalProps> = ({
  open,
  handleClose,
}) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const [checkedRemind, setCheckedRemind] = useState<boolean>(true);

  const handleChangeRemind = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedRemind(event.target.checked);
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="connect-wallet-dialog-title"
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
        <BootstrapDialogTitle
          id="connect-wallet-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent>
          <Box
            sx={{
              width: '400px',
              margin: '3rem 5rem',
              textAlign: 'center'
            }}
          >
            <Typography
              sx={{
                fontSize: '35px',
                fontWeight: '600',
                marginBottom: '2rem'
              }}
            >
              Connect your wallet
            </Typography>

            <Tabs
              value={value}
              onChange={handleChange}
              // textColor="secondary"
              // indicatorColor="secondary"
              variant="fullWidth"
              // TabIndicatorProps={{
              //   style: {
              //     backgroundColor: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)'
              //   }
              // }}
            >
              <Tab label="Ethereum" {...a11yProps(0)} />
              <Tab label="Solana" {...a11yProps(1)} />
              <Tab label="Polygon" {...a11yProps(2)} />
            </Tabs>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <WalletBox>
                  <Box
                    sx={{
                      display: 'flex',
                    }}
                  >
                    <Image
                      src="assets/images/svgs/metamask.svg"
                      width={30}
                      height={30}
                      alt="Metamask"
                    />
                    <Typography
                      sx={{
                        fontSize: '1.25rem',
                        marginLeft: '0.5rem',
                      }}
                    >
                      Metamask
                    </Typography>
                  </Box>
                  <Image
                    src="assets/images/svgs/link.svg"
                    width={18}
                    height={18}
                    alt="link"
                  />
                </WalletBox>
                <WalletBox>
                  <Box
                    sx={{
                      display: 'flex',
                    }}
                  >
                    <Image
                      src="assets/images/svgs/trustwallet.svg"
                      width={30}
                      height={30}
                      alt="TrustWallet"
                    />
                    <Typography
                      sx={{
                        fontSize: '1.25rem',
                        marginLeft: '0.5rem',
                      }}
                    >
                      Trust Wallet
                    </Typography>
                  </Box>
                  <Image
                    src="assets/images/svgs/link.svg"
                    width={18}
                    height={18}
                    alt="link"
                  />
                </WalletBox>
                <WalletBox>
                  <Box
                    sx={{
                      display: 'flex',
                    }}
                  >
                    <Image
                      src="assets/images/svgs/coinbase.svg"
                      width={30}
                      height={30}
                      alt="Coinbase"
                    />
                    <Typography
                      sx={{
                        fontSize: '1.25rem',
                        marginLeft: '0.5rem',
                      }}
                    >
                      Coinbase Wallet
                    </Typography>
                  </Box>
                  <Image
                    src="assets/images/svgs/link.svg"
                    width={18}
                    height={18}
                    alt="link"
                  />
                </WalletBox>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Solana Wallets comming soon...
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                Polygon Wallets comming soon...
              </TabPanel>
            </SwipeableViews>

            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedRemind}
                  onChange={handleChangeRemind}
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
              label="Remind me later"
              sx={{ color: theme.palette.primary.contrastText, py: 1 }}
            />

            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: '#565A7F',
              }}
            >
              Read-only access is given to verify the token holding of the
              wallet that is available on the blockchain. This does not give
              Biples access to your funds or the power to act on your behalf.
            </Typography>

            <Box
              sx={{
                borderRadius: '10px',
                padding: '1rem',
                background: '#68686838',
                width: '200px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '2rem'
              }}
            >
              <SvgColor
                src="assets/images/svgs/quiz.svg"
                sx={{
                  width: 18,
                  height: 18,
                  color: '#fff',
                }}
              />
              <Typography
                sx={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: theme.palette.primary.contrastText,
                }}
              >
                How to create a wallet?
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default ConnectWalletModal;
