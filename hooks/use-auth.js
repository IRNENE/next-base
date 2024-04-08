import { createContext, useState, useContext } from 'react';

// 1. 建立與導出它
// 不需要再用額外的檔案來建立Context，直接在這裡建立與使用
const AuthContext = createContext(null);

// 2. 建立一個Context Provider元件
// 提供給最上層元件使用(_app.js)，共享狀態要在這裡統一集中管理
// 這裡的children是指所有被包覆在AuthProvider元件中的子元件
export function AuthProvider({ children }) {
  // 共享狀態
  const [auth, setAuth] = useState({
    isAuth: false,
    userData: {
      id: 0,
      username: '',
      name: '',
    },
  });

  // 登入
  const login = () => {
    setAuth({
      isAuth: true,
      userData: {
        id: 1,
        username: 'herry',
        name: '哈利',
      },
    });
  };

  const logout = () => {
    setAuth({
      isAuth: false,
      userData: {
        id: 0,
        username: '',
        name: '',
      },
    });
  };

  return (
    <AuthContext.Provider
      // 使用value屬性提供資料給提供者階層以下的所有後代元件
      value={{ auth, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// 3. 提供一個包裝好的useContext名稱
// 提供給消費者(consumer)們方便使用，呼叫 useAuth()就可以取得共享狀態
export const useAuth = () => useContext(AuthContext);
