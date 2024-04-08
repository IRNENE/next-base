//2. 在任何⼦元件層級深度，使⽤ useContext 勾⼦讀取它:

// import { useContext } from 'react';
// import { ThemeContext } from '@/context/theme-xxx';
import { useTheme } from '@/hooks/use-theme';

export default function SwitchButton() {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button onClick={toggleTheme}>
        切換為:{theme === 'light' ? '暗黑' : '明亮'}
      </button>
    </>
  );
}
