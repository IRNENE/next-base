import { createContext } from 'react';

// export const ThemeContext = createContext(null);

// 1. 建立與導出它
// defaultValue可以使用有意義的預設值，或使用null值(假使null出現可以拋出錯誤進行除錯)
// 參考: https://react.dev/reference/react/createContext#parameters
const ThemeContext = createContext(null);
// 設定名稱(除錯用): 用ThemeContext.displayName來區分名稱(在瀏覽器react dev-tools可以看到名稱)
ThemeContext.displayName = 'MyThemeContext';

export { ThemeContext };
