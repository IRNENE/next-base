import { useState } from 'react';

export default function AsyncB() {
  // 密碼輸入框用
  const [password, setPassword] = useState('');
  // 紀錄強度評分用
  const [score, setScore] = useState(0);
  // 評定密碼強度的函式
  const scorePasswordStrength = (str) => {
    let r = 0;
    if (str.length >= 4) r += 2;
    if (str.length >= 6) r += 2;
    if (str.length >= 8) r += 2;
    return r;
  };
  return (
    <>
      <h1>setState 異步說明範例-B</h1>
      <hr />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          // 錯誤寫法
          // setScore(scorePasswordStrength(password));
          // 正確寫法，用事件觸發當下目標對象的值
          setScore(scorePasswordStrength(e.target.value));
        }}
      />
      <p>密碼強度評分:{score}</p>
    </>
  );
}
