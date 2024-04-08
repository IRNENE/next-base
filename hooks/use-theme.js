import { createContext, useState, useContext } from 'react';

// 1 建立與導出它
// 不需要再用額外的檔案來建立Context，直接在這裡建立與使用
const ThemeContext = createContext(null);

// 2. 建立一個Context Provider元件
// 提供給最上層元件使用(_app.js)，共享狀態要在這裡統一集中管理
// 這裡的children是指所有被包覆在ThemeProvider元件中的子元件

export function ThemeProvider({ children }) {
  // 共享狀態，可以是'light'|'dark'
  const [theme, setTheme] = useState('light');
  // 切換主題用的函式
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    // value屬性提供資料給提供者階層以下的所有後代元件
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. 提供一個包裝好的useContext名稱
// 提供給消費者(consumer)們方便使用
export const useTheme = () => useContext(ThemeContext);
