import {
  AppBar,
  Button,
  IconButton,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "7em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  drawerContainer: {
    marginLeft: "auto",
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  estimateButton: {
    ...theme.typography.estimateButton,
    marginLeft: "50px",
    marginRight: "25px",
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: 0,
  },
  menuItems: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
    color: "white",
  },
  selected: {
    opacity: 1,
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const menuItems = [
  { label: "Services", link: "/services" },
  { label: "Custom Software Developement", link: "/appDevelopeMent" },
  { label: "Mobile Developement", link: "/mobiledevelopement" },
  { label: "Website Developement", link: "/webdevelopement" },
];

export default function Header() {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const tabs = [
    { label: "Home", link: "/" },
    {
      label: "Services",
      link: "/services",
      onMouseOver: (e) => setMenuLocation(e.currentTarget),
    },
    { label: "The Rvolution", link: "/revolution" },
    { label: "About Us", link: "/about" },
    { label: "Contact Us", link: "/contact" },
  ];

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const [activeTab, setActiveTab] = useState(0);
  const [menuLocation, setMenuLocation] = useState(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    menuItems.forEach(({ link }, index) => {
      if (link === window.location.pathname) {
        setActiveTab(1);
        setSelectedMenuItem(index);
      }
    });
    tabs.forEach(
      ({ link }, index) => {
        if (link === window.location.pathname) {
          setActiveTab(index);
          setSelectedMenuItem(null);
        }
      },
      [activeTab, selectedMenuItem, tabs]
    );
  });

  const MenuTabs = (
    <>
      {" "}
      <Tabs
        value={activeTab}
        onChange={(e, value) => setActiveTab(value)}
        className={classes.tabsContainer}
      >
        {tabs.map((tab, i) => {
          return (
            <Tab
              key={`tab${i}`}
              component={Link}
              to={tab.link}
              label={tab.label}
              className={classes.tab}
              disableRipple
              onMouseOver={tab.onMouseOver}
            />
          );
        })}
      </Tabs>
      <Button
        className={classes.estimateButton}
        variant="contained"
        color="secondary"
      >
        Free Estimate
      </Button>
      <Menu
        style={{ zIndex: 2000 }}
        anchorEl={menuLocation}
        open={Boolean(menuLocation)}
        onClose={() => setMenuLocation(null)}
        id="simple-menu"
        MenuListProps={{ onMouseLeave: () => setMenuLocation(null) }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {menuItems.map(({ label, link }, index) => (
          <MenuItem
            key={`menuItem${index}`}
            selected={index === selectedMenuItem}
            component={Link}
            to={link}
            classes={{
              root: classes.menuItems,
              selected: classes.selected,
            }}
            onClick={() => {
              setSelectedMenuItem(index);
              setMenuLocation(null);
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <div className={classes.toolbarMargin} />
          {tabs.map((tab, index) => (
            <ListItem
              key={`listItem${index}`}
              component={Link}
              to={tab.link}
              divider
              button
              onClick={() => setOpenDrawer(false) && setActiveTab(index)}
              selected={index === activeTab}
              classes={{ selected: classes.selected, root: classes.menuItems }}
            >
              <ListItemText disableTypography>{tab.label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.drawerContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <React.Fragment>
      <AppBar elevation={trigger ? 4 : 0} className={classes.appbar}>
        <Toolbar disableGutters>
          <Button
            component={Link}
            className={classes.logoContainer}
            to="/"
            onClick={() => setActiveTab(0)}
          >
            <img className={classes.logo} alt="Company Logo" src={logo} />
          </Button>
          {matches ? drawer : MenuTabs}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
