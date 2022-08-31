import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton> {/* to get the ripple effect */}
          <MenuIcon />
        </IconButton>
        <img src="https://cdn.vox-cdn.com/thumbor/8rFZqHl8uRYNKRy93HRc_6WID3Q=/0x0:1320x880/1820x1213/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg" alt="" />
      </div>
      <div className="header__middle">
        <SearchIcon/>
        <input placeholder='Searc Mail' type="text" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  )
}

export default Header