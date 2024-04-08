import React from 'react';
import FavIcon from './fav-icon';
// 拆解出每個屬性寫是更有助於程式碼的維護
// 主要可以讓編輯程式自動提示或完成，另外也能使用prop-types或TypeScript來檢查每個屬性
// 或是指定預設屬性值
// https://stackoverflow.com/questions/52621169/react-props-should-i-pass-the-object-or-its-properties-does-it-make-much-diffe

export default function BookItem({
  isbn,
  title,
  author,
  fav,
  handleToggleFav,
}) {
  return (
    <>
      <tr>
        <td>{isbn}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>
          <FavIcon isbn={isbn} fav={fav} handleToggleFav={handleToggleFav} />
        </td>
      </tr>
    </>
  );
}
