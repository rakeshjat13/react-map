import { CardContent, Paper, Typography, Card, Box, Stack  } from '@mui/material'
import React from 'react'

export default function CartPrice(props) {
    console.log("props", props);
    const totalCartPrice = props.data.reduce((a, v) => (a + v.price), 0);
  return (
    <>
        <Typography component="div" variant="h5">
           Price Details
        </Typography>
        <Paper sx={{marginTop:2}}>
            <Card>
                <CardContent>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} mt={2}>
                        <Typography textAlign="left">
                            Price ({props.data.length} Items)
                        </Typography>
                        <Typography textAlign="right" sx={{marginRight: '0px', marginLeft:''}}>
                            {`₹${totalCartPrice}`}
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" spacing={2} mt={2}>
                        <Typography textAlign="left">
                            Discount
                        </Typography>
                        <Typography textAlign="right" sx={{marginRight: '0px', marginLeft:''}}>
                            - 0
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" mt={2} >
                        <Typography>
                            Delivery Charges
                        </Typography>
                        <Typography>
                            Free
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" mt={4} >
                        <Typography variant='h5'>
                            Total Price
                        </Typography>
                        <Typography variant='h5'>
                            {totalCartPrice}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Paper>
    </>
  )
}
