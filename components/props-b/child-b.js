import { useState, useEffect } from 'react';

export default function ChildB(props) {
  // 子女-B元件內部私有的狀態
  const [cData, setCData] = useState('child-b data');

  // 方式2: 利用useEffect在此元件初次渲染後執行
  // useEffect(() => {
  //   props.setDataFromChild(cData);
  // }, []);

  return (
    <>
      <h3>ChildB(子女-B)</h3>
      <button
        onClick={() => {
          // setState有副作用，要在事件處理函式中執行
          // 方式1: 利用事件處理函式執行
          props.setDataFromChild(cData);
        }}
      >
        送資料給父母
      </button>
    </>
  );
}
