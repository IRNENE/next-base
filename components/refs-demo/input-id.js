import React from 'react';

export default function InputId() {
  return (
    <>
      <h2>input使用id</h2>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          alert(document.getElementById('my-input').value);
        }}
      >
        獲取值
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').focus();
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').blur();
        }}
      >
        失焦(blur)
      </button>
    </>
  );
}
