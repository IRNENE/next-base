//2. 在任何⼦元件層級深度，使⽤ useContext 勾⼦讀取它:
// import { useContext } from 'react';
// import { ThemeContext } from '@/context/theme-xxx';

import { useTheme } from '@/hooks/use-theme';
// css modules
import styles from './context-demo.module.css';

export default function List() {
  // const value = useContext(ThemeContext);
  // console.log(value);
  // 透過useContext來讀取提供者元件提供的資料
  // 這裡只需要取得theme，所以只解構theme
  // const { theme } = useContext(ThemeContext);
  const { theme } = useTheme();

  return (
    <>
      {/* <h2>List</h2> */}
      {/* <p>{JSON.stringify(value)}</p> */}

      <h2>展示列表</h2>
      <p>目前佈景是:{theme === 'light' ? '明亮' : '暗黑'}</p>
      {/* <ul
        style={{
          backgroundColor: theme === 'light' ? 'white' : 'black',
          color: theme === 'light' ? 'black' : 'white',
        }}
      > */}
      <ul
        // 展示依照佈景變化的樣式
        className={theme === 'light' ? styles['light'] : styles['dark']}
      >
        <li>11111</li>
        <li>11111</li>
      </ul>
    </>
  );
}
