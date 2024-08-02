import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import { Fullscreen, FullscreenExit } from "@mui/icons-material";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleFullscreenToggle = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#304463" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          POS
        </Typography>
        <IconButton onClick={handleFullscreenToggle}>
          {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
        </IconButton>
        {user && (
          <IconButton onClick={handleMenuOpen}>
            <Avatar src={user.photoURL} alt={user.displayName} />
          </IconButton>
        )}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
          <MenuItem onClick={() => navigate("/change-password")}>
            Change Password
          </MenuItem>
          <MenuItem onClick={() => navigate("/change-language")}>
            Change Language
          </MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
