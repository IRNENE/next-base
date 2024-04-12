import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EffectDemo() {
  const [total, setTotal] = useState(0);

  // 樣式1:
  // 說明: 每次render(渲染)之後(after)都會執行一次
  // 用途: 用於除錯/記錄，或特別的自訂勾子開發時
  useEffect(() => {
    console.log('每次render(渲染)之後(after)都會執行一次');
  });

  //   !!!至少要會第二個
  // 樣式2: didMount時間點
  // 說明: 第一次render(渲染)之後(after)執行一次，之後不會再執行。
  //       近似於原本生命周期方法的componentDidMount
  // 用途: 元件呈現之後，向伺服器fetch/ajax獲取資料呈現。與非React的JS應用整合。
  useEffect(() => {
    console.log('第一次render(渲染)之後(after)執行一次，之後不會再執行');
  }, []);
  // ^^ 保持空陣列，代表不與任何變數相依賴，相當於套用有第二傳入參數的預設行為

  // 樣式3: didMount+didUpdate時間點
  // 說明: 第一次render(渲染)之後(after)執行一次。之後當total(相依變數)有更動之後(after)，會再執行一次
  //       近似於原本生命周期方法的componentDidMount+componentDidUpdate
  // 用途: 解決狀態變動異步方案之一。不同狀態間的連鎖更動(A->B->C)或同步化。同個元件(或頁面)要立即套用不同資料。
  useEffect(() => {
    console.log(
      '3.第一次render(渲染)之後(after)執行一次。之後當total(相依變數)有更動之後(after)，會再執行一次'
    );
  }, [total]);
  // ^^^^^^^ 加入相依變數會監聽(total)的更動(change)事件
  // 使用"引用(參照)相等性原則"，相當於Object.is()或===來比較有沒有更動

  // 樣式4: willUnmount時間點(cleanup)
  // 說明: 元件被移出真實DOM之前(before)會執行一次
  //       近似於原本生命周期方法的componentWillUnmount
  // 用途: 配合樣式2使用，作某些元件要移出前釋放記憶體或呼叫反函式(移除事件監聽，清除記時器…)
  useEffect(() => {
    return () => {
      console.log('元件被移出真實DOM之前(before)會執行一次');
    };
  }, []);

  return (
    <>
      <h1>useEffect四種樣式範例</h1>
      <h1
        role="presentation"
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        {total}
      </h1>
      <button
        onClick={() => {
          setTotal(1);
        }}
      >
        total設定為1
      </button>
      {/* 測試第4樣式，連至首頁 */}
      <hr />
      <Link href="/">連至首頁</Link>
    </>
  );
}
