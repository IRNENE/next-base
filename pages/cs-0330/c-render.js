import { useState } from 'react';

export default function CRender() {
  const [total, setTotal] = useState(0);
  const [name, setName] = useState(0);
  // 小駝峰命名setName
  return (
    <>
      <h1>條件式渲染(conditional rendering)範例</h1>
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          // setTotal(total + 1);
          // setTotal(total + 3); //最終加3
          // setName('IRENE');

          // React 会在调用setTotal函数时传递当前的状态值作为参数
          // 参数就是当前的状态值(total)，通常参数叫state(小駝峰)
          setTotal((state) => {
            const nextState = state + 1;
            return nextState;
          });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1);
        }}
      >
        -1
      </button>
      <hr />
      {/* if表達式語法&&運算子。因為使用的是falsy判斷，並不精確，所以0和NaN一樣會呈現 */}
      {total && <p>1.現在total是{total}</p>}
      {/* 前面判斷式強制轉為布林 */}
      {Boolean(total) && <p>2.現在total是{total}</p>}
      {!!total && <p>3.現在total是{total}</p>}
      {/* 前面判斷式使用比較運算 */}
      {total !== 0 && <p>4.現在total是{total}</p>}
      {(total > 0 || total < 0) && <p>5.現在total是{total}</p>}
      {/* 不要用上面的語法，用三元運算子取代 */}
      {total ? <p>6.現在total是{total}</p> : ''}
      <hr />
    </>
  );
}
// ex1 初始值為物件但最好還是useState(0);!
// const [total, setTotal] = useState({a:0});
// setTotal({ ...total, a: total.a + 1 });
// 更新对象中的某个属性的值，通过展开原对象并在新对象中修改特定属性的值，可以确保对象的其他属性保持不变，从而实现了局部更新

// 在 React 中，useState 函数的第一个参数用于指定状态的初始值。你可以根据需要选择任何合适的初始值，可以是数字、字符串、布尔值、对象、数组等等。例如：p.58
// useState(0)：初始值为数字 0。
// useState('')：初始值为空字符串。
// useState(false)：初始值为布尔值 false。
// useState({})和useState(null)：!特殊情況
// useState([])：初始值为一个空数组。
