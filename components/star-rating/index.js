import { useState, useEffect } from 'react';
// 導入.module.css檔案
import styles from './star.module.css';
// css有問題就重開vscode
// 引入需下載react-icons
// import { FaRegStar } from 'react-icons/fa';
export default function StarRating({
  initRating = 0, // 初始的評分
  maxCount = 5, // 最大可評的分數(幾個星星圖)
  onRatingChange = () => {},
  color = 'lightblue',
  icon = <>&#9733;</>, //預設只是星星符號元素
}) {
  // 點按時的評分，一開始是0分代表沒有評分
  // initRating是一個初始化用的值，代表元件一開始渲染(呈現)時用一次，之後就不會有相關
  // 反樣式: 以props作為state的初始值(Props In Initial State)，也與derived state(衍生的狀態)有關
  // const [rating, setRating] = useState(initRating);
  const [rating, setRating] = useState(0); // 修正後，不用在這裡寫初始值
  // 解決上述反樣式的其一方式，完全同步化傳入的initRating(如果是父母的狀態時)
  useEffect(() => {
    // 當initRating有變動後，會執行一次這裡的程式碼
    setRating(initRating);
  }, [initRating]);
  // ^^^^^^^^^^^ 監聽initRating的變動(change)

  // 滑鼠游標懸停(hover)時使用，一開始是0分代表沒有評分
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <>
      <div>
        {/* 
          這裡使用簡易建立5個陣列1...N的語法，可以參考:
          https://github.com/orgs/mfee-react/discussions/50 
        */}
        {Array(maxCount)
          .fill(1)
          .map((v, i) => {
            // 每個按鈕的分數，相當於索引+1
            const score = i + 1;

            return (
              <button
                key={i}
                className={styles['star-btn']}
                onClick={() => {
                  // 點按後設定分數
                  setRating(score);
                  // 利用onRatingChange的函式，可以回送分數到父母元件
                  onRatingChange(score);
                }}
                onMouseEnter={() => {
                  // 滑鼠游標移入時設定分數
                  setHoverRating(score);
                }}
                onMouseLeave={() => {
                  // 滑鼠游標移出時設定分數為0
                  setHoverRating(0);
                }}
              >
                <span
                  // // 使用style屬性作動態屬性傳入套用
                  // style={{
                  //   color:
                  //     score <= rating || score <= hoverRating ? color : 'gray',
                  // }}

                  // 使用styled-jsx樣式方式來套用
                  // className={
                  //   score <= rating || score <= hoverRating ? 'on' : 'off'
                  // }

                  // 使用css-module樣式方式來套用!業界用
                  className={
                    score <= rating || score <= hoverRating
                      ? styles['on']
                      : styles['off']
                  }
                  // 這裡要在有屬性color傳入時，設定css變數的值，讓star.module.css進行套用
                  style={{ '--on-color': color }}
                >
                  {icon}
                </span>
              </button>
            );
          })}
      </div>
      {/* 以下的styled-jsx以樣板字串方式套用傳入屬性變數color */}
      <style jsx>
        {`
          .on {
            color: ${color};
          }

          .off {
            color: gray;
          }
        `}
      </style>
    </>
  );
}
