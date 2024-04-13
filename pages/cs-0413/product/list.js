import { useState, useEffect } from 'react';
// 2.使用範例資料
// 範例資料來源: https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
// 先註解大概json的資料模型樣貌
// const data = [
//   {
//     id: '1',
//     picture: 'https://via.placeholder.com/150',
//     stock: 5,
//     name: 'iPhone 12 Pro',
//     price: 25000,
//     tags: '蘋果,大螢幕',
//   },
// ]

// 連至 /product/list 資料夾的路由
export default function List() {
  // 商品要使用的狀態
  // 物件陣列狀態大部份初始化值會使用至少空陣列
  // !!注意!! 初次render(渲染)會使用初始值
  // !!注意!! 在應用程式執行過程中，務必要保持狀態維持同樣的資料類型
  const [products, setProducts] = useState([]);

  // 與伺服器要求獲取資料的async函式
  const getProducts = async () => {
    const url =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products';

    try {
      // fetch預設是使用GET，不需要加method設定
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      // 設定到狀態中
      if (Array.isArray(data)) setProducts(data);
      else {
        console.log('伺服器回傳資料類型錯誤');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>商品列表頁</h1>
      <ul>
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              {v.name}/{v.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}
