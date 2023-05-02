import { FC } from 'react';
import * as React from 'react';
import {
  Avatar,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Image from 'next/image';
import SimpleBar from 'simplebar-react';
import SvgColor from '@/components/SvgColor';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import {
  LEFT_NAV_WIDTH,
  RIGHT_NAV_WIDTH,
  APP_BAR_MOBILE,
  APP_BAR_DESKTOP,
} from '@/constants/index';
import { COMMUNITIES } from '@/mocks/index';
import CreateCommunityModal from '@/components/Home/CreateCommunityModal';
import JoinCommunityModal from '@/components/Home/JoinCommunityModal';

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

const CommunityTopNav: FC<TopNavProps> = ({
  onOpenLeftNav,
  onOpenRightNav,
}) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const [anchorElCommunity, setAnchorElCommunity] = React.useState<null | HTMLElement>(null);
  const openAddCommunityMenu = Boolean(anchorElCommunity);
  const addCommunityClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElCommunity(event.currentTarget);
  };
  const handleAddCommunityClose = () => {
    setAnchorElCommunity(null);
  };

  const [openCreateCommunity, setCreateCommunityOpen] = React.useState(false);
  const [openJoinCommunity, setJoinCommunityOpen] = React.useState(false);

  const handleClickCommunityOpen = () => {
    handleAddCommunityClose();
    setCreateCommunityOpen(true);
  };
  const handleCreateCommunityClose = () => {
    setCreateCommunityOpen(false);
  };
  const handleClickJoinCommunityOpen = () => {
    handleAddCommunityClose();
    setJoinCommunityOpen(true);
  };
  const handleJoinCommunityClose = () => {
    setJoinCommunityOpen(false);
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
              <StyledAddCommunityButton
                variant="contained"
                startIcon={
                  <SvgColor
                    src="/assets/images/svgs/plus.svg"
                    sx={{
                      width: 13,
                      height: 13,
                      color: theme.palette.primary.contrastText,
                    }}
                  />
                }
                onClick={addCommunityClick}
              >
                Add Community
              </StyledAddCommunityButton>
              <Menu
                id="community-menu"
                anchorEl={anchorElCommunity}
                open={openAddCommunityMenu}
                onClose={handleAddCommunityClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
                PaperProps={{
                  style:{
                    backgroundImage: 'linear-gradient(rgba(50,50,50,0.2), rgba(50,50,50,0.2))',
                    backgroundColor: 'rgba(0,0,0,0.43)',
                    backdropFilter: 'blur(5px)'
                  }
                }}
              >
                <MenuItem
                  onClick={handleClickCommunityOpen}
                >
                  <ListItemIcon></ListItemIcon>
                  Create a Community
                </MenuItem>
                <MenuItem
                  onClick={handleClickJoinCommunityOpen}
                >
                  <ListItemIcon></ListItemIcon>
                  Join a Community
                </MenuItem>
              </Menu>
              <CreateCommunityModal open={openCreateCommunity} handleClose={handleCreateCommunityClose} />
              <JoinCommunityModal open={openJoinCommunity} handleClose={handleJoinCommunityClose} />
              {COMMUNITIES.map((item: CommunityProps) => (
                <StyledCommunityButton
                  key={item.name}
                  variant="contained"
                  startIcon={
                    <Avatar>
                      <Image
                        src={item.avatarUrl}
                        alt="Community Icon"
                        width={50}
                        height={50}
                      />
                    </Avatar>
                  }
                  endIcon={
                    item.verified && (
                      <Image
                        src="/assets/images/verified.png"
                        alt="Verification Icon"
                        width={12}
                        height={12}
                      />
                    )
                  }
                >
                  {item.name}
                </StyledCommunityButton>
              ))}
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

export default CommunityTopNav;
