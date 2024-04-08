import products from '@/data/Product.json';

export default function ProductTable() {
  console.log(products);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {products.map((v, i) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>
                <img src={`/pics/${v.photos.split(',')[0]}`} />
              </td>
              <td>{v.name}</td>
              <td>{v.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
// 在 React 中，唯一需要拥有 key 的元素是在动态生成的列表中的直接子元素，React 可以通过其父元素 <tr> 的 key 来识别和跟踪它们
// 放在public可直接訪問
