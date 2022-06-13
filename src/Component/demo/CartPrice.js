import { CardContent, Paper, Typography, Card, Box, Stack  } from '@mui/material'
import React from 'react'

export default function CartPrice() {
  return (
    <>
        <Typography component="div" variant="h5">
           Price Details
        </Typography>
        <Paper sx={{marginTop:2}}>
            <Card>
                <CardContent>
                    <Stack direction="row" spacing={2}>
                        <Box >
                            <Typography textAlign="left">
                                Item Price (2)
                            </Typography>
                            <Typography textAlign="right" sx={{marginRight: '0px', marginLeft:''}}>
                                1999
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Box >
                            <Typography textAlign="left">
                                Item Price (2)
                            </Typography>
                            <Typography textAlign="right" sx={{marginRight: '0px', marginLeft:''}}>
                                1999
                            </Typography>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Paper>
    </>
  )
}
