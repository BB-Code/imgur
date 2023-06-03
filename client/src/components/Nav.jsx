import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import UpcomingRounded from '@mui/icons-material/UpcomingRounded';
import Settings from '@mui/icons-material/Settings';
import Cloud from '@mui/icons-material/Cloud';
import Info from '@mui/icons-material/Info';
import Image from '@mui/icons-material/Image';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function Nav() {
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
  return (
      <List
          component="nav"
      >
          <ListItemButton>
              <ListItemIcon>
                  <UpcomingRounded />
              </ListItemIcon>
              <ListItemText primary="上传" />
          </ListItemButton>
          <ListItemButton>
              <ListItemIcon>
                  <Image />
              </ListItemIcon>
              <ListItemText primary="预览" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                  <Settings />
              </ListItemIcon>
              <ListItemText primary="设置" />
              {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <Cloud />
                      </ListItemIcon>
                      <ListItemText primary="腾讯云COS" />
                  </ListItemButton>
              </List>
          </Collapse>
          <ListItemButton>
              <ListItemIcon>
                  <Info />
              </ListItemIcon>
              <ListItemText primary="关于" />
          </ListItemButton>
      </List>
  )
}
