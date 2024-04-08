import React from 'react';

export default function JsxRender() {
  return (
    <>
      <h1>JSX語法中各種值的渲染</h1>
      <h2>number(數字)</h2>
      {123}
      <br />
      {1 - 1}
      <br />
      {NaN}
      <hr />
      <h2>string(字串)</h2>
      {'abc'}
      <br />
      hello
      <br />
      {`price =${100 - 1}`}
      <hr />
      <h2>boolean(布林)</h2>
      {/* 布林值不渲染呈現 */}
      {true}
      {false}
      <hr />
      <h2>null 與 undefined</h2>
      {/* 不渲染呈現*/}
      {null}
      {undefined}
      <hr />
      <h2>array(陣列)</h2>
      {/* 類似array.join('') */}
      {[1, 2, 3]}
      {['a', 'b', 999]}
      <hr />
      <h2>object(物件)</h2>
      {/* 不能直接渲染，會產生執行期中斷錯誤 ，並非react child*/}
      {/* {{ a: 1, b: 2 }} */}
      {/* {JSON.stringify({ a: 1, b: 2 })} */}
      {/* 可改成JSON字串輸出 */}
      <hr />
      <h2>function(函式)</h2>
      {/* 不能直接渲染，有警告 ，並非react child*/}
      {/* {() => {}} */}
    </>
  );
}
// Array.join() 用於將陣列中的所有元素連接成一個字符串。
