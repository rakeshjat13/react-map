import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Typography, Paper, List, ListItem, ListItemAvatar, ListItemText, Divider, Avatar, ListItemIcon} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import CircleIcon from '@mui/icons-material/Circle';


export default function CartDetail() {
    const theme = useTheme();
  return (<>
      <Typography component="div" variant="h5">
           Your Cart Details
      </Typography>
    <Paper sx={{marginTop:2}}>
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ width: 165, height: 165 }} alt="Remy Sharp" src="./assets/img/apple-iphone-13.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="h5">Apple iPhone 13</Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {<List>
          <ListItem disablePadding>
            
              {/* <ListItemIcon sx={{maxWidth:'20px'}}>
                <CircleIcon sx={{ fontSize: 9, maxWidth:'20px' }} />
              </ListItemIcon> */}
              <CircleIcon sx={{ fontSize: 9, paddingRight:'15px' }} />
              <ListItemText primary="6 GB RAM | 128 GB ROM | Expandable Upto 1 TB" />
        
          </ListItem>
          <ListItem disablePadding>
           
              {/* <ListItemIcon>
                <CircleIcon sx={{ fontSize: 9, maxWidth:'20px' }} />
              </ListItemIcon> */}
              <CircleIcon sx={{ fontSize: 9, paddingRight:'15px' }} />
              <ListItemText primary="16.51 cm (6.5 inch) Full HD+ Display" />
        
          </ListItem>
        </List>}
            </React.Fragment>
          }
        />

        <ListItemText primary={<Typography variant="h5">₹86,999</Typography>} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ width: 165, height: 165 }} alt="Remy Sharp" src="./assets/img/apple-iphone-13.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="h5">Apple iPhone 13</Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {<List>
          <ListItem disablePadding>
            
              {/* <ListItemIcon sx={{maxWidth:'20px'}}>
                <CircleIcon sx={{ fontSize: 9, maxWidth:'20px' }} />
              </ListItemIcon> */}
              <CircleIcon sx={{ fontSize: 9, paddingRight:'15px' }} />
              <ListItemText primary="6 GB RAM | 128 GB ROM | Expandable Upto 1 TB" />
        
          </ListItem>
          <ListItem disablePadding>
           
              {/* <ListItemIcon>
                <CircleIcon sx={{ fontSize: 9, maxWidth:'20px' }} />
              </ListItemIcon> */}
              <CircleIcon sx={{ fontSize: 9, paddingRight:'15px' }} />
              <ListItemText primary="16.51 cm (6.5 inch) Full HD+ Display" />
        
          </ListItem>
        </List>}
            </React.Fragment>
          }
        />

        <ListItemText primary={<Typography variant="h5">₹86,999</Typography>} />
      </ListItem>
    </List>
    </Paper>
    </>
  )
}

