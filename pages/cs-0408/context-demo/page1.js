//2. 在任何⼦元件層級深度，使⽤ useContext 勾⼦讀取它:
// import { useContext } from 'react';
// import { ThemeContext } from '@/context/theme';

import List from '@/components/context-demo/list';
import SwitchButton from '@/components/context-demo/switch-button';
import Link from 'next/link'; // 用於取代a元件的特別元件，可以在不同頁面保持住狀態

export default function Page1() {
  // const value = useContext(ThemeContext);
  // console.log(value);

  return (
    <>
      <h1>Page1</h1>
      {/* <p>{JSON.stringify(value)}</p>
      <List /> */}
      <SwitchButton />
      <List />
      <hr />
      a元素: <a href="/cs-0408/context-demo/page2">連至Page2</a>
      (頁面重新刷新，狀態重置為初始值)
      <hr />
      Link元件: <Link href="/cs-0408/context-demo/page2">連至Page2</Link>
      (狀態會保持住)
    </>
  );
}
