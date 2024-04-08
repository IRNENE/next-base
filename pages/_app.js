// import '@/styles/globals.css'，這裡加入的樣式會套用到所有頁面和元件中，global標記的樣式只能在這裡

// import '@/styles/product-table.css';這裡是全局css樣式導入，如果是個別樣式，請看cs-0330 product-table.js

//3. 最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它:
// import { ThemeContext } from '@/context/theme-xxx';
// import { useState } from 'react';

// import { ThemeProvider } from '@/hooks/use-theme';
// import { AuthProvider } from '@/hooks/use-auth';
import { CartProvider } from '@/hooks/use-cart';

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  // // 共享狀態，可以是'light'|'dark'
  // const [theme, setTheme] = useState('light');
  // // 切換主題用的函式
  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };

  // value屬性提供資料給提供者階層以下的所有後代元件
  // <ThemeContext.Provider value={{ theme, toggleTheme }}>
  //   {getLayout(<Component {...pageProps} />)}
  // </ThemeContext.Provider>

  // <AuthProvider>
  //   <ThemeProvider></ThemeProvider>
  // </AuthProvider>

  return <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>;
}
