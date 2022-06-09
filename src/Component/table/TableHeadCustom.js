import React from 'react'
import { TableCell,TableHead, TableRow } from "@mui/material";


export default React.memo(function(props){

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
})
// export default TableHeadCustom = React.memo(TableHeadCustom1);

