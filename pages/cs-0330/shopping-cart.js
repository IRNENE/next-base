import { useState } from 'react';

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

  const handleIncrease = (id) => {
    // 1 2
    const nextProducts = products.map((v, i) => {
      //如果符合條件(id===傳入id)，則修改其中屬性count+1
      if (v.id === id) return { ...v, count: v.count + 1 };
      // 否則回傳原本物件
      else return v;
    });
    // 3
    setProducts(nextProducts);
  };
  const handleDecrease = (id) => {
    const nextProducts = products.map((v, i) => {
      if (v.id === id) return { ...v, count: v.count - 1 };
      else return v;
    });
    setProducts(nextProducts);
  };
  // 移除函式可放在function(官網解法) 或放在button(老師解法)判斷
  const handleRemove = (id) => {
    const nextProducts = products.filter((v, i) => {
      return v.id !== id;
    });
    setProducts(nextProducts);
  };

  // react官網解法
  const handleDecreaseOffical = (id) => {
    // 遞減數量一樣會減
    let nextProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: product.count - 1,
        };
      } else {
        return product;
      }
    });
    // 要設定到狀態前，先過濾掉只留下數量大於0的
    nextProducts = nextProducts.filter((p) => p.count > 0);
    setProducts(nextProducts);
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
              // 老師
              // // 如果即將變動的數量是0===>作移除
              // const nextProductCount = product.count - 1;
              // if (nextProductCount === 0) {
              //   // 作移除
              //   handleRemove(product.id);
              // } else {
              //   //否則減少數量
              //   handleDecrease(product.id);
              // }

              // 官網
              handleDecreaseOffical(product.id);
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
