import React from "react";
import { Book } from "../../components/Book";
import { handleIfPropsUndefined } from "../../utility";
import { useSelector } from "react-redux";

export const BookList = () => {
  const bookListRedux = useSelector((state) => state.reducerBook);

  const publishedDateTrim = (book) => {
    if (book.volumeInfo.publishedDate !== undefined) {
      return book.volumeInfo.publishedDate.substr(0, 4);
    }
  };

  const authorsJoin = (book) => {
    if (book.volumeInfo.authors !== undefined) {
      return book.volumeInfo.authors.join(", ");
    }
  };

  return (
    <>
      {bookListRedux.map((book) => (
        <Book
          key={handleIfPropsUndefined(book.id)}
          id={handleIfPropsUndefined(book.id)}
          title={handleIfPropsUndefined(book.volumeInfo.title)}
          author={handleIfPropsUndefined(authorsJoin(book))}
          publisher={handleIfPropsUndefined(book.volumeInfo.publisher)}
          subtitle={handleIfPropsUndefined(book.volumeInfo.subtitle)}
          description={handleIfPropsUndefined(book.volumeInfo.description)}
          publisherDate={handleIfPropsUndefined(publishedDateTrim(book))}
          rating={handleIfPropsUndefined(book.volumeInfo.averageRating)}
          previewLink={handleIfPropsUndefined(book.volumeInfo.previewLink)}
        />
      ))}
    </>
  );
};
