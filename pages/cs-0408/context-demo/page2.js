import List from '@/components/context-demo/list';
// 用於取代a元件的特別元件，可以在不同頁面保持住狀態
import Link from 'next/link';
export default function Page2() {
  return (
    <>
      <h1>Page2</h1>
      <List />
      <hr />
      a元素: <a href="/cs-0408/context-demo/page1">連至Page1</a>
      (頁面重新刷新，狀態重置為初始值)
      <hr />
      Link元件: <Link href="/cs-0408/context-demo/page1">連至Page1</Link>
      (狀態會保持住)
    </>
  );
}
