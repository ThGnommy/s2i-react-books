import React from 'react'
import { Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Button } from '@material-ui/core'

export const Book = (props) => {
    
    return(
        <>
            <Card>
      <CardActionArea>
        <CardMedia
          image="http://books.google.com/books/content?id=lKq8ngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          title="World of Warcraft, Cronache"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </>
    )
}