import React from 'react';

export default function ChildA(props) {
  return (
    <>
      <h3>ChildA(子女-A)</h3>
      {/* <p>從Parent來的資料:{props.pData}</p> */}
      <p>來自ChildB的資料: {props.dataFromChild}</p>
    </>
  );
}
