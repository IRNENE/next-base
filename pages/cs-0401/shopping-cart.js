import { useState } from 'react';
import { increase } from './reducer';

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  // --- 純函式 START ---
 //純函式，單純處理狀態變化的函式(reducer)
// 1 2
  const decrease = (products, id) => {
    return products.map((v, i) => {
      //如果符合條件(id===傳入id)，則修改其中屬性count-1
      if (v.id === id) return { ...v, count: v.count - 1 };
      // 否則回傳原本物件
      else return v;
    });
  };

  const remove = (products, id) => {
    return products.filter((v, i) => {
      return v.id !== id;
    });
  };

  // --- 純函式 END ---

  // 事件處理函式---狀態處理變動的第三步
  const handleIncrease = (id) => {
    setProducts(increase(products, id));
  };

  const handleDecrease = (id) => {
    setProducts(decrease(products, id));
  };

  const handleRemove = (id) => {
    setProducts(remove(products, id));
  };

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncrease(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              // 老師;
              // 如果即將變動的數量是0===>作移除
              const nextProductCount = product.count - 1;
              if (nextProductCount === 0) {
                // 作移除
                handleRemove(product.id);
              } else {
                //否則減少數量
                handleDecrease(product.id);
              }
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
