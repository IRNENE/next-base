import React from 'react';
import PropTypes from 'prop-types';

// 子女元件可以從函式的傳入參數得到父母傳給它的值
// props必定是一個物件
// 在傳入參數中解構提取所有的屬性成為變數
export default function Child({
  title = '', //這裡可以再使用預設值的寫法，作為預設屬性值
  price = 100,
  hasStock = false,
  aa = [],
  oa = {},
  sum = () => {},
}) {
  // 父母元件沒給定值會應用子元件預設值
  // console.log(props);
  return (
    <>
      <h3>Child(子女)</h3>
      {/* <p>title:{props.title}</p> */}
      <p>title:{title}</p>
      <p>price:{price}</p>
      <p>hasStock:{hasStock ? 'true' : 'false'}</p>
      <p>aa:{JSON.stringify(aa)}</p>
      <p>oa:{JSON.stringify(oa)}</p>
      <p>sum(1,2):{sum(1, 2)}</p>
    </>
  );
}

Child.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  hasStock: PropTypes.bool,
};
