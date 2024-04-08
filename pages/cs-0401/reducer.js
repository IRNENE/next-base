//純函式，單純處理狀態變化的函式(reducer)
// 1 2
export const increase = (products, id) => {
  return products.map((v, i) => {
    //如果符合條件(id===傳入id)，則修改其中屬性count+1
    if (v.id === id) return { ...v, count: v.count + 1 };
     // 否則回傳原本物件
    else return v;
  });
};