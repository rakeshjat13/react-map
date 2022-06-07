import React from 'react'
import { TableCell,TableHead, TableRow } from "@mui/material";
export default function TableHeadCustom(props) {

    console.log("table header", props);
  return (
            <TableHead sx={{backgroundColor:'#777c7e', color:'#ffffff'}} color="primary">
                <TableRow>
                    {
                        props.column.map((val, i) => (
                        <TableCell align="left" key={i} sx={{color:'#ffffff'}}>
                            {val}
                        </TableCell>))
                    }
                </TableRow>
            </TableHead>
  )
}
