import { Link } from "react-router-dom";
import { Button, Grid, colors } from "@mui/material";
import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Home from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';



const MainTemplet = () => {
  return (
    <Fragment>
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={2.5}>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <nav aria-label="main mailbox folders">
            <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                    <Link to={"/home"}></Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                    <Link to={"/about"}></Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FormatListBulletedRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Service" />
                    <Link to={"/service"}></Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <BusinessCenterRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Portfolio" />
                    <Link to={"/portfolio"}></Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PermPhoneMsgRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contect" />
                    <Link to={"/contect"}></Link>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <Divider />
            {/* <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav> */}
          </Box>
        </Grid>

        <Grid item xs>
          <Button>
            <h1>hi</h1>
          </Button>
          <div></div>
          <div>${}</div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MainTemplet;
