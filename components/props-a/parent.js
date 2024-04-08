import React from 'react';
import Child from './child';

export default function Parent() {
  return (
    <>
      <h2>Parent(父母)</h2>
      {/* 父母元件可以用用類似HTML給定屬性的方式，傳遞各種類型的資料給子女元件 */}

      <Child title={'123'} price={false} hasStock="hello" />
      {/* 
      <Child
        title="學React"
        price={99}
        hasStock={true}
        aa={[1, 2, 3]}
        oa={{ a: 1, b: 2 }}
        sum={(x, y) => x + y}
      />
      <Child />
      <Child title="我會了" aa={[5, 6, 7]} /> */}
    </>
  );
}
