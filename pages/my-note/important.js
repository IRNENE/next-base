// Async await未來主流!!必搭配try-catch

// cs-0413 list.js
// !!注意!! 初次render(渲染)會使用初始值
// !!注意!! 在應用程式執行過程中，務必要保持狀態維持同樣的資料類型
// {Array.isArray(products) &&
//     products.map((v, i) => {
//         return (
//           <li key={v.id}>
//             {v.name}/{v.price}
//           </li>
//         );
//       })}這種寫法不適合放在這檢查!!
