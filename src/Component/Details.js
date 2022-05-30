import React, {useRef} from "react";
import {Card, CardMedia,
    CardContent, CardActions, Button, 
    Typography, Chip, List, ListSubheader, ListItem, 
    ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CropIcon from '@mui/icons-material/Crop';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import { useNavigate } from "react-router-dom";

function Details(props){
    const data = props.data;


    return(
        
            <Card sx={{ marginTop:'15px', width:'100%'}} id={`single-${data.id}`} >
                <CardMedia
                    component="img"
                    height="180"
                    image={data['marker_image']}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary"><LocationOnIcon /> {data.address}</Typography> */}
                    {/* <Typography variant="body2" color="text.secondary">{data.price}</Typography> */}
                    <Chip icon={<LocationOnIcon />} label={data.address} sx={{margin:'5px'}} />
                    {(data.badge) ? 
                    <Chip icon={<LocalOfferIcon />} label={data.badge} sx={{margin:'5px'}} /> : null }
                    <Chip icon={<CropIcon />} label={`${data.area} sq.ft`} sx={{margin:'5px'}} />
                    <List
                        sx={{ width: '100%', bgcolor: 'background.paper' }}
                    >
                    <ListItem>
                        <ListItemIcon>
                        <CurrencyRupeeIcon />
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-wifi" primary="Price" />
                        <Chip edge="end" label={data.price} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                        <KingBedIcon />
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-wifi" primary="Bedrooms" />
                        <Chip edge="end" label={data.bedrooms} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                        <BathtubIcon />
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-wifi" primary="Bathrooms" />
                        <Chip edge="end" label={data.bathrooms} />
                    </ListItem>
                    {/* <ListItem>
                        <ListItemIcon>
                        <BluetoothIcon />
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
                        <Switch
                        edge="end"
                        onChange={handleToggle('bluetooth')}
                        checked={checked.indexOf('bluetooth') !== -1}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-bluetooth',
                        }}
                        />
                    </ListItem> */}
                </List>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
            
    )
}

export default Details