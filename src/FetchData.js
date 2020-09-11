import axios from "axios";

export const FetchData = (name) => {
  const API_KEY = "AIzaSyA458oO8rn8YmIYkpN5NvkCp3rDtykuC7Y";

  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${name}&key=${API_KEY}`)
    .then((response) => {
      let listItems = response.data.items;
      console.log(response.data.items);
      listItems.forEach((book) => {
        console.log(book.volumeInfo.title);
      });
    });
};
