import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CopyAll from '@mui/icons-material/CopyAll';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import React from 'react'

export default function ImgItem() {
  return (
        <div style={{
            margin: '8px',
            padding:'6px'
        }}>
      <Card>
          <CardActionArea>
          <CardMedia
              component="img"
              image="https://ph-files.imgix.net/b3d23fda-7d9d-4d1b-a7f2-e064db22c3d2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&bg=0fff&dpr=1"
              alt="image"
          />
          </CardActionArea>
          <CardContent>
              <Typography variant="body2" color="text.secondary">
                  test png
              </Typography>
          </CardContent>
          <CardActions disableSpacing>
              <IconButton aria-label="copy">
                  <CopyAll />
              </IconButton>
              <IconButton aria-label="edit">
                  <Edit />
              </IconButton>
              <IconButton aria-label="delete">
                  <Delete />
              </IconButton>
          </CardActions>
      </Card>
      </div>
  )
}
