// 要傳送過去，端口5555要打開
import { useState } from 'react';

export default function ImageUpload() {
  // 代表選中的檔案(null代表沒選中檔案，或取消檔案選擇)
  const [selectedFile, setSelectedFile] = useState(null);
  // 預覽圖片的網址(呼叫URL.createObjectURL得到的網址)
  const [previewURL, setPreviewURL] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // console.log(file)

    if (file) {
      // 設定到狀態中
      setSelectedFile(file);
      // 產生預覽網址
      setPreviewURL(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      // 設回預設值
      setPreviewURL('');
    }
  };

  const handleFileUpload = async () => {
    const fd = new FormData();

    // 這裡要對照伺服器中上傳的名稱(req.files.avatar)
    fd.append('avatar', selectedFile);

    // 傳送到伺服器
    const res = await fetch('http://localhost:5555/upload-avatar', {
      method: 'POST',
      body: fd,
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <>
      <h1>圖片上傳與預覽範例</h1>
      <input type="file" onChange={handleFileChange} />
      <hr />
      <button onClick={handleFileUpload}>上傳</button>
      <h2>預覽</h2>
      <img src={previewURL} alt="" />
    </>
  );
}
