import { useState } from 'react';
import data from '@/data/books.json';

import BookItem from './book-item';

export default function BookList() {
  // 在進入狀態前，要先擴充每個書籍物件的屬性，能代表是否有加入收藏
  // 多一個fav屬性(布林，預設為false)
  const initState = data.map((v, i) => {
    return { ...v, fav: false };
  });

  const [books, setBooks] = useState(initState);

  const handleToggleFav = (isbn) => {
    const nextBook = books.map((v, i) => {
      if (v.isbn === isbn) return { ...v, fav: !v.fav };
      else return v;
    });

    setBooks(nextBook);
  };

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const { isbn, title, author, fav } = book;
            return (
              <BookItem
                key={isbn}
                isbn={isbn}
                title={title}
                author={author}
                fav={fav}
                handleToggleFav={handleToggleFav}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
