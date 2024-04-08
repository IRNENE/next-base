import React, { useState } from 'react';
// 導入.module.css檔案
import styles from '@/styles/star.module.css';

export default function Star() {
  // 點按時的評分，一開始是0分代表沒有評分
  const [rating, setRating] = useState(0);
  // 滑鼠游標懸停(hover)時使用，一開始是0分代表沒有評分
  const [hoverRating, setHoverRating] = useState(0);
  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        {/* 
          這裡使用簡易建立5個陣列1...N的語法，可以參考:
          https://github.com/orgs/mfee-react/discussions/50 
        */}
        {Array(5)
          .fill(1)
          .map((v, i) => {
            const score = i + 1; // 每個按鈕的分數，相當於索引+1
            return (
              <button
                key={i}
                className={styles['star-btn']}
                onClick={() => {
                  // 點按後設定分數
                  setRating(score);
                }}
                // 滑鼠游標移入時設定分數
                onMouseEnter={() => {
                  setHoverRating(score);
                }}
                // 滑鼠游標移出時設定分數為0
                onMouseLeave={() => {
                  setHoverRating(0);
                }}
              >
                <span
                  className={
                    // 如果這個星星的分數(score)小於等於目前的評分(rating)，或小於目前的滑鼠游標懸停(hover)評分，則套用亮起樣式
                    score <= rating || score <= hoverRating
                      ? styles['on']
                      : styles['off']
                  }
                >
                  &#9733;
                </span>
              </button>
            );
          })}
      </div>
    </>
  );
}
// arr.fill(value[, start[, end]])
// // 將索引為 1 到索引為 3（不包括）的元素填充為 9
// arr.fill(9, 1, 3);
// console.log(arr);
// 輸出：[0, 9, 9, 0, 0]
