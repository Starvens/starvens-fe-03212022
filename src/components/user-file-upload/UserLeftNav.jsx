import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import HistoryIcon from '@mui/icons-material/History';
import DeleteIcon from '@mui/icons-material/Delete';
import IosShareIcon from '@mui/icons-material/IosShare';
import ShareIcon from '@mui/icons-material/Share';
import MenuIcon from '@mui/icons-material/Menu'
import OutlinedInput from '@mui/material/OutlinedInput';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import FileUploadBox from './FileUploadBox';

const drawerWidth = 240;
const icons = [<HomeIcon />, <FolderIcon />, <HistoryIcon />, <ShareIcon />, <DeleteIcon />]

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: theme.palette.primary.light,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: theme.palette.primary.light,
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.primary.main,
  alignItems: 'center',
  // justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    // backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    backgroundColor: theme.palette.primary.main,
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    // backgroundColor: theme.palette.secondary.main,
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function UserLeftNav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ height: 70 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img hidden={open} src='/Starvens_Logo.png' height='70' width='38'></img>
          <Typography
            sx={{
              font: 'normal normal bold 28px/34px Montserrat',
              marginLeft: "2rem",
              color: "#F8F8F8",
              textAlign: "center"
            }}
          >
            StarvensDrive
          </Typography>
          <OutlinedInput startAdornment={
            <SearchIcon />
          } sx={{
            font: 'normal normal bold 20px/24px Montserrat', color: '#355E3B66', background: '#F8F8F8', height: '3rem',
            borderRadius: '1rem',
            marginLeft: 'auto'
          }} placeholder="  Search...." >
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <SettingsIcon />
            </IconButton>
          </OutlinedInput>
          <Box sx={{ marginLeft: 'auto' }}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <SettingsIcon fontSize='large' />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <AccountCircleIcon fontSize='large' />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <img src='/Starvens_Logo.png' height='70' width='38'></img>
          {/* <Typography
            sx={{
              font: 'normal normal bold 28px/34px Montserrat',
              marginLeft: "2rem",
              color: "#F8F8F8",
              textAlign: "center"
            }}
          >
            StarvensDrive
          </Typography> */}
          <IconButton sx={{ marginLeft: 'auto' }} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon style={{ color: '#F8F8F8' }} />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'My Files', 'Recent', 'Shared', 'Recycle Bin'].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {icons[index]}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
        <BorderLinearProgress sx={{ margin: '1rem', marginTop: 'auto' }} variant="determinate" value={50} />
        {open ? <Typography
          sx={{
            font: 'normal normal bold 16px/19px Montserrat;',
            paddingBottom: '3rem',
            color: '#355E3B',
            textAlign: "center"
          }}
        >
          100MB used of 1 GB
        </Typography> : null}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, height: '100vh', marginTop: '4.2rem', backgroundColor: theme.palette.primary.light }}>
        {/* <Box component="main" sx={{ p: 3, height: '100vh', marginTop: '4.2rem', backgroundColor: theme.palette.primary.light }}> */}
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Typography
              sx={{
                fontWeight: "bold",
                // marginLeft: "16rem",
                width: '16rem',
                backgroundColor: "#f8f8f8",
                padding: '0.3rem',
                cursor: 'pointer',
                // zIndex: '3',
                borderRadius: '1rem',
                textAlign: 'center',
                fontSize: "16px",
                // height: '3rem',
                color: "#355E3B",
                fontFamily: "Montserrat",
              }}
            >
              Text To Audio
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                // marginLeft: "16rem",
                width: '16rem',
                backgroundColor: "#f8f8f8",
                textAlign: 'center',
                padding: '0.3rem',
                cursor: 'pointer',
                // zIndex: '3',
                borderRadius: '1rem',
                fontSize: "16px",
                // height: '3rem',
                color: "#355E3B",
                fontFamily: "Montserrat",
              }}
            >
              Audio To Text
            </Typography>
          </Box>
          <Box>
            {/* <Box sx={{ height: '13rem', margin: '1rem', backgroundColor: theme.palette.primary.main }}> </Box> */}
            <FileUploadBox></FileUploadBox>

          </Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
}