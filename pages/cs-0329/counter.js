import { useState } from 'react';
// http://localhost:3000/cs-0329/counter
export default function Counter() {
  const [total, setTotal] = useState(0);
  //   [獲得狀態的變數,設定狀態變數的函式]=初始直
  //   初始值僅第一次呈現時被呼叫，後續都不會再被呼叫
  //   函式的return代表元件的render(渲染)dom元素
  // <></>..react 特有的Fragments
  return (
    <>
      <h1>React計數器</h1>
      <h1
        role="presentation"
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        {total}
      </h1>
    </>
  );
}
// onClick 是一個 HTML 屬性，但在 React 中它被視為一個 React 事件屬性，因為 React 會使用它來處理事件，而不是直接將它傳遞給底層 DOM 元素
