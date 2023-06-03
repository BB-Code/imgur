import React from 'react'
import Paper from '@mui/material/Paper';
import ImgItem from './ImgItem';
import Stack from '@mui/material/Stack';


export default function Content() {
  return (
      <Paper>
          <Stack 
          direction="row" 
          flexWrap="wrap" 
          justifyContent="flex-start"
          alignItem="center"
          >
          { 
                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map( (item)=>{
                return <ImgItem />
            })
          }
          </Stack>
      </Paper>
  )
}
