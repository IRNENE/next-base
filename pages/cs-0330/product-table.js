import products from '@/data/Product.json';
import Image from 'next/image';
// styles會是一個物件
import styles from '@/styles/product-table.module.css';

export default function ProductTable() {
  console.log(products);
  return (
    <>
      <table className={styles.MyTable}>
        {/* 大駝峰命名{styles.MyTable}，首字母大写，没有空格或下划线;
      小駝峰{styles['my-table']} */}
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
                <Image
                  src={`/pics/${v.photos.split(',')[0]}`}
                  alt=""
                  width={300}
                  height={200}
                />
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
