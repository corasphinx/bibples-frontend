import * as React from 'react';
import { FC } from 'react';
import {
  Avatar,
  Badge,
  AppBar,
  Box,
  Stack,
  Toolbar,
  IconButton,
  Button,
  Slide,
  useScrollTrigger,
  Typography,
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Image from 'next/image';
import SimpleBar from 'simplebar-react';
import SvgColor from '@/components/SvgColor';
import {
  LEFT_NAV_WIDTH,
  RIGHT_NAV_WIDTH,
  APP_BAR_MOBILE,
  APP_BAR_DESKTOP,
} from '@/constants/index';
import { COMMUNITIES } from '@/mocks/index';
import GalleryModal from '@/components/PrivateChat/GalleryModal';
import FileModal from '@/components/PrivateChat/FileModal';
import LinkModal from '@/components/PrivateChat/LinkModal';

interface CommunityProps {
  name: string;
  avatarUrl: string;
  verified: boolean;
}

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Scrollbar = styled(SimpleBar)(({ theme }) => ({
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: theme.palette.primary.contrastText,
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '14px',
  width: '58px',
  height: '58px',
  backgroundColor: theme.palette.primary.main,
  borderColor: '#BBBBBB',
  borderStyle: theme.palette.mode === 'dark' ? 'none' : 'solid',
  borderWidth: '1px',
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${LEFT_NAV_WIDTH + RIGHT_NAV_WIDTH}px)`,
    left: LEFT_NAV_WIDTH,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: APP_BAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APP_BAR_DESKTOP,
    padding: theme.spacing(5, 0, 0, 0),
  },
}));

const StyledAddCommunityButton = styled(Button)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)'
      : theme.palette.primary.main,
  height: 58,
  minWidth: 260,
  paddingLeft: 44,
  paddingRight: 44,
}));

const StyledCommunityButton = styled(Button)(({ theme }) => ({
  height: 58,
  minWidth: 180,
  paddingLeft: 16,
  marginLeft: theme.spacing(2),
  textAlign: 'start',
}));

interface TopNavProps {
  onOpenLeftNav: () => void;
  onOpenRightNav: () => void;
}

const PrivateChatTopNav: FC<TopNavProps> = ({
  onOpenLeftNav,
  onOpenRightNav,
}) => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const [openGallery, setGalleryOpen] = React.useState(false);
  const handleClickGalleryOpen = () => {
    setGalleryOpen(true);
  };
  const handleGalleryClose = () => {
    setGalleryOpen(false);
  };

  const [openFile, setFileOpen] = React.useState(false);
  const handleClickFileOpen = () => {
    setFileOpen(true);
  };
  const handleFileClose = () => {
    setFileOpen(false);
  };

  const [openLink, setLinkOpen] = React.useState(false);
  const handleClickLinkOpen = () => {
    setLinkOpen(true);
  };
  const handleLinkClose = () => {
    setLinkOpen(false);
  };
  return (
    <HideOnScroll>
      <StyledAppBar color="transparent" enableColorOnDark>
        <StyledToolbar>
          <IconButton
            onClick={onOpenLeftNav}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none',
              },
            }}
          >
            <SvgColor
              src="/assets/icons/menu.svg"
              sx={{
                width: 'auto',
                height: 13,
                color: theme.palette.primary.contrastText,
              }}
            />
          </IconButton>
          <Scrollbar
            sx={{
              width: 1,
              pb: 2,
              '& .simplebar-content': {
                width: 1,
                display: 'flex',
                flexDirection: 'row',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                whiteSpace: 'nowrap',
              }}
            >
              <StyledIconButton sx={{ mr: 2 }}>
                <SvgColor
                  src="/assets/images/svgs/search-white.svg"
                  sx={{
                    width: 26,
                    height: 26,
                    color: theme.palette.primary.contrastText,
                  }}
                />
              </StyledIconButton>
              <StyledIconButton sx={{ mr: 2 }}>
                <SvgColor
                  src="/assets/images/svgs/videocam.svg"
                  sx={{
                    width: 26,
                    height: 26,
                    color: theme.palette.primary.contrastText,
                  }}
                />
              </StyledIconButton>
              <StyledIconButton sx={{ mr: 2 }}>
                <SvgColor
                  src="/assets/images/svgs/call.svg"
                  sx={{
                    width: 26,
                    height: 26,
                    color: theme.palette.primary.contrastText,
                  }}
                />
              </StyledIconButton>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'primary.main',
                  borderColor: '#BBBBBB',
                  borderStyle: theme.palette.mode === 'dark' ? 'none' : 'solid',
                  borderWidth: '1px',
                  borderRadius: '14px',
                  height: '58px',
                  px: 10,
                  mr: 2,
                }}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar
                    alt="User"
                    src="/assets/images/4.png"
                    sx={{ width: 42, height: 42 }}
                  />
                </StyledBadge>
                <Box sx={{ ml: 2 }}>
                  <Typography
                    fontSize={20}
                    fontWeight={600}
                    sx={{
                      background:
                        'linear-gradient(265.96deg, #00A3FF 4.86%, #E140E4 93.41%)',
                      '-webkit-background-clip': 'text',
                      '-webkit-text-fill-color': 'transparent',
                    }}
                  >
                    Andrew Jackson
                  </Typography>
                  <Typography fontSize={12} color="primary.contrastText">
                    Last seen 2 hours ago
                  </Typography>
                </Box>
              </Box>
              <StyledIconButton sx={{ mr: 2 }}
                onClick={handleClickGalleryOpen}
                >
                <SvgColor
                  src="/assets/images/svgs/image.svg"
                  sx={{
                    width: 26,
                    height: 26,
                    color: theme.palette.primary.contrastText,
                  }}
                />
              </StyledIconButton>
              <GalleryModal open={openGallery} handleClose={handleGalleryClose} />
              <StyledIconButton sx={{ mr: 2 }}
                onClick={handleClickFileOpen}
                >
                <SvgColor
                  src="/assets/images/svgs/text_snippet.svg"
                  sx={{
                    width: 26,
                    height: 26,
                    color: theme.palette.primary.contrastText,
                  }}
                />
              </StyledIconButton>
              <FileModal open={openFile} handleClose={handleFileClose} />
              <StyledIconButton
                onClick={handleClickLinkOpen}
                >
                <SvgColor
                  src="/assets/images/svgs/link.svg"
                  sx={{
                    width: 26,
                    height: 26,
                    color: theme.palette.primary.contrastText,
                  }}
                />
              </StyledIconButton>
              <LinkModal open={openLink} handleClose={handleLinkClose} />
            </Box>
          </Scrollbar>
          <IconButton
            onClick={onOpenRightNav}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none',
              },
            }}
          >
            <SvgColor
              src="/assets/icons/menu.svg"
              sx={{
                width: 'auto',
                height: 13,
                color: theme.palette.primary.contrastText,
              }}
            />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>
    </HideOnScroll>
  );
};

export default PrivateChatTopNav;
