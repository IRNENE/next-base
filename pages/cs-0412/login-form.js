import { useState } from 'react';

export default function LoginForm() {
  // 用物件狀態對應整個表單欄位，要準備送到後端的資料為主
  // 使用的屬性名稱xxxx，即為表單欄位的名稱(name="xxxx")
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  // 顯示密碼的核取方塊用，獨立寫法比較方便控制，這值並不需要放在user物件中
  const [showPassword, setShowPassword] = useState(false);

  // 多欄位共用事件處理函式
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.type, e.target.value);

    // ES6特性: computed property names(計算得出的屬性名稱)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    // [e.target.name]: e.target.value
    // ^^^^^^^^^^^^^^^ 在方括號裡給定一個表達式，計算出一個字串值可以動態設定屬性名稱
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // 表單送出
  const handleSubmit = (e) => {
    // 阻擋表單預設行為(送到目前網址+GET)
    e.preventDefault();

    // 準備整理要送到伺服器的資料
    // 欄位檢查 ---START---(老師簡易型-送出表單後才檢查)
    // 建立一個新的錯誤物件
    const newErrors = {
      username: '',
      password: '',
    };

    // 信號值，代表有出現錯誤，判斷是否要送出表單用
    //let hasErrors = false

    // if (user.username === '') {
    if (!user.username) {
      newErrors.username = '帳號為必填';
      //hasErrors = true
    }

    if (!user.password) {
      newErrors.password = '密碼為必填';
      // hasErrors = true
    } else if (user.password.length < 6 || user.password.length > 10) {
      newErrors.password = '密碼長度需要介於6到10';
      //hasErrors = true
    }

    // 如果檢查有發生錯誤時
    // hasErrors相當於Object.values(newErrors).some((v) => v)
    if (Object.values(newErrors).some((v) => v)) {
      setErrors(newErrors); // 呈現錯誤訊息
      return; // 跳出函式，不繼續往下
    } else {
      // 清空錯誤訊息
      setErrors({
        username: '',
        password: '',
      });
    }
    // 欄位檢查 ---END---

    // 送到伺服器(fetch)
    alert('檢查通過，送到伺服器去');
  };

  return (
    <>
      <h1>會員登入表單範例</h1>
      {/* 標準作法，使用form的onSubmit事件處理函式來處理表單送出 */}
      <form onSubmit={handleSubmit}>
        <label>
          帳號:{' '}
          <input
            type="text"
            // 需要加上name屬性，才能對應到useState中的屬性
            name="username"
            // 共用事件處理函式
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span className="error">{errors.username}</span>
        <br />
        <label>
          密碼:{' '}
          <input
            type={showPassword ? 'text' : 'password'}
            // 需要加上name屬性，才能對應到useState中的屬性
            name="password"
            // 共用事件處理函式
            onChange={handleFieldChange}
          />
        </label>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={(e) => {
            setShowPassword(e.target.checked);
          }}
        />
        顯示密碼
        <br />
        <span className="error">{errors.password}</span>
        <br />
        {/* 因為是在form中的button最好加上type="submit"，預設是這個。type=button的話，才是代表一般的按鈕。 */}
        <button type="submit">登入</button>
      </form>
      <style jsx>
        {`
          .error {
            color: red;
            font-size: 12px;
          }
        `}
      </style>
    </>
  );
}
