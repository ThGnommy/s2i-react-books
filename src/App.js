import React, {useState, useEffect} from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core'
import { Searchbar } from './components/Searchbar'
import { Book } from './components/Book'
import axios from 'axios'
import './App.css'
import 'fontsource-roboto'

const API_KEY = 'AIzaSyA458oO8rn8YmIYkpN5NvkCp3rDtykuC7Y'

const App = () => {

  const [name, setName] = useState('');

  const handleBookName = (e) => {
    setName(e.target.value)
  }

  const fetchData = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}&key=${API_KEY}`)
    .then(response => {

      let listItems = response.data.items


      console.log(response.data.items)

      listItems.forEach(book => {
        console.log(book.volumeInfo.title)
      })
      
    })
  }

  return (
    <>
      <Container>
        <Grid item xs={12} alignItems="center" justify="center" container>
        <Typography variant="h2">Book Finder</Typography>
        </Grid>
        <Grid xs={12} alignItems="center" justify="center" container item> 
         <Searchbar onChange={handleBookName} />
        </Grid>
        <Grid xs={12} alignItems="center" justify="center" container item>
        <Button onClick={fetchData} variant="contained" color="primary">
          Primary
        </Button>
        </Grid>
        <Grid>
          <Book />
        </Grid>
      </Container>
    </>
  );
}

export default App;