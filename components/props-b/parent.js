import { useState } from 'react';
import ChildA from './child-a';
import ChildB from './child-b';

export default function Parent() {
  // 父母元件內部私有的狀態
  // const [pData, setPData] = useState('parent data');

  // 宣告一組專門讓子女B傳送資料回來的狀態
  const [dataFromChild, setDataFromChild] = useState('');

  return (
    <>
      <h2>Parent(父母)</h2>
      {/* <p>來自ChildB的資料:{dataFromChild}</p> */}
      <hr />

      {/* 利用屬性直接傳給子女元件 */}
      {/* <ChildA pData={pData} /> */}
      <ChildA dataFromChild={dataFromChild} />
      {/* 傳送設定的狀態用的函式給子女B */}
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  );
}
