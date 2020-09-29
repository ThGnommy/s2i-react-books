import React, { useContext } from "react";
import { Book } from "../../components/Book";
import { BookContext, handleIfPropsUndefined } from "../../BookProvider";

export const BookList = () => {
  const { bookList } = useContext(BookContext);
  // eslint-disable-next-line
  const [bookListValue, setBookListValue] = bookList;

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
      {bookListValue.map((book) => (
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
