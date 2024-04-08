import React from 'react';

export default function JsxMap() {
  // 使用map 必定要加key!
  // 要以ul-li渲染呈現以下陣列
  const aa = [1, 4, 9, 16];
  const ab = aa.map((v, i) => {
    return <li key={i}>{v}</li>;
  });
  // ab相當於
  // [<li key={0}>1</li>
  //  <li key={1}>4</li>
  //  <li key={2}>9</li>
  //  <li key={3}>16</li>]

  return (
    <>
      <h1>Jsx語法:陣列map範例</h1>
      <hr />
      <ul>{ab}</ul>
      {/* 實務上不需要再多一個ab，直接在jsx裡寫map即可 */}
      <ul>
        {/* 第二種寫法 */}
        {aa.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ul>
    </>
  );
}
