import React, { useState } from 'react'
import {Typography, Paper, List, ListItem, ListItemAvatar, ListItemText, Divider, Avatar, ListItemIcon, CardMedia, ButtonGroup, Button} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import CircleIcon from '@mui/icons-material/Circle';

export default function CardList(props) {
    console.log("pro", props)
    const [count, setCount] = useState(1);
    const product = props.product
  return (
    <ListItem alignItems="flex-start" key={`item-${product.id}`}>
    <ListItemAvatar sx={{minWidth:'199px'}}>
      <CardMedia sx={{ width: 165, height: 165, objectFit:'contain', backgroundSize:'contain'}} alt="Remy Sharp" image={product.image} variant="square" />
      <ButtonGroup size="small" aria-label="small outlined button group" sx={{marginLeft:'11%', marginTop:'15px'}}>
        <Button onClick={() => count < 5 && setCount(count + 1) }>+</Button>
        {<Button disabled>{count}</Button>}
        {<Button onClick={() => count && setCount(count - 1) }>-</Button>}
      </ButtonGroup>
    </ListItemAvatar>
    <ListItemText
      primary={
        <Typography variant="h5">{product.name}</Typography>
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
            { 
            product.specification.map((s) => 
            <ListItem disablePadding>
              <CircleIcon sx={{ fontSize: 9, paddingRight:'15px' }} />
              <ListItemText primary={s} />
            </ListItem>)
            }
          </List>}
        </React.Fragment>
      }
      sx={{maxWidth:'55%'}}
    />
    <ListItemText primary={<Typography variant="h5" align="right">₹{product.price}</Typography>} />
  </ListItem>
  )
}
