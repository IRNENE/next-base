import { useState } from 'react';
import ProductList from '@/components/checkout/product-list';
import CartList from '@/components/checkout/cart-list';
import styles from '@/components/checkout/checkout.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from '@/components/checkout/navbar';

export default function Checkout() {
  // 加到購物車的商品項目狀態
  const [items, setItems] = useState([]);

  //刪除
  const removeItem = (id) => {
    const nextItems = items.filter((v, i) => {
      return v.id !== id;
    });
    setItems(nextItems);
  };

  // 遞減
  const decreaseItem = (id) => {
    // 展開每個成員
    let nextItems = items.map((v, i) => {
      //如果符合條件(id===傳入的id)，則修改其中屬性qty-1
      if (v.id === id && v.qty - 1 > 0) return { ...v, qty: v.qty - 1 };
      // 否則回傳原本物件
      else return v;
    });
    // 過濾掉(刪除掉)數量等於0的濕品
    nextItems = nextItems.filter((v) => v.qty > 0);
    setItems(nextItems);
  };

  // 遞增
  const increaseItem = (id) => {
    // 展開每個成員
    const nextItems = items.map((v, i) => {
      //如果符合條件(id===傳入的id)，則修改其中屬性qty+1
      if (v.id === id) return { ...v, qty: v.qty + 1 };
      // 否則回傳原本物件
      else return v;
    });

    setItems(nextItems);
  };

  // 加到購物車
  // item 是要加入的商品物件
  const addItem = (item) => {
    // 先判斷要加入的商品物件是否有在購物車中
    const foundIndex = items.findIndex((v, i) => {
      return v.id === item.id;
    });

    // 如果有找到
    if (foundIndex > -1) {
      // 遞增商品
      increaseItem(item.id);
    } else {
      // 否則作新增商品，擴充商品數量屬性qty，預設為1
      const newItem = { ...item, qty: 1 };
      const nextItems = [...items, newItem];
      setItems(nextItems);
    }
  };
  const calcTotalItems = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].qty;
    }
    return total;
  };

  const calcTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].qty * items[i].price;
    }
    return total;
  };

  // 陣列迭代方法: reduce(累加、歸納)
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const totalItems = items.reduce((acc, v) => acc + v.qty, 0); //初始值設置為 0
  const totalPrice = items.reduce((acc, v) => acc + v.qty * v.price, 0);

  return (
    <>
      <div className={styles['container']}>
        <Navbar />
        <h3>商品列表</h3>
        <div className={styles['product']}>
          <ProductList addItem={addItem} />
        </div>
        <h3>購物車</h3>
        <div className={styles['cart']}>
          <CartList
            items={items}
            increaseItem={increaseItem}
            decreaseItem={decreaseItem}
            removeItem={removeItem}
          />
        </div>
        <hr />
        <div>
          總數量: {totalItems} / 總金額:{totalPrice}
          {/* 因為 CartList 和 ProductList 改變了，按鈕還可以選是因為過程；用hook cart帶值傳遞，或改回原本的*/}
        </div>
      </div>
    </>
  );
}

/* 總數量: {calcTotalItems()} / 總金額:{calcTotalPrice()} */
