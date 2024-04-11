import { useState } from 'react';

export default function ControlledForm() {
  // input-text
  const [inputText, setInputText] = useState('');
  // 顯示密碼的核取方塊用
  const [showPassword, setShowPassword] = useState(false);
  // input-date
  // 使用純文字yyyy-mm-dd字串
  const [inputDateText, setInputDateText] = useState('');

  // 給定一個時間日期(Date)物件，輸出yyyy-mm-dd字串
  // (date instanceof Date)是檢查是否為時間日期(Date)物件
  const dateToString = (date = null) =>
    date instanceof Date ? date.toISOString().split('T')[0] : '';
  // 給定一個yyyy-mm-dd字串，輸出時間日期(Date)物件
  const stringToDate = (str) => new Date(str);
  // 使用時間日期(Date)物件狀態
  const [inputDateObject, setInputDateObject] = useState(
    stringToDate('2024-01-01')
  );

  // const convertDateToString = (date) => {
  //     return date.toISOString().split('T')[0];
  //   };
  // const [inputDateObject, setInputDateObject] = useState(null);

  // textarea
  const [textareaText, setTextareaText] = useState('');

  // radio-button-group
  const petOptions = ['狗', '貓', '倉鼠'];
  // 記錄使用者選中的選項值
  const [pet, setPet] = useState('倉鼠');

  // checkbox group(以純文字陣列為例)
  const [pets, setPets] = useState(['狗']);

  // 處理核取方塊的change事件處理函式
  const handlePetsChange = (e) => {
    // 取得核取方塊觸發事件的值
    const tv = e.target.value;
    // 判斷是否有在pets陣列中
    if (pets.includes(tv)) {
      // 如果有在目前的狀態中 ===> 移出
      const nextPets = pets.filter((v) => v !== tv);
      setPets(nextPets);
    } else {
      // 否則 ===> 加入
      const nextPets = [...pets, tv];
      setPets(nextPets);
    }
  };

  // checkbox group(以物件陣列為例，擴充checked屬性)
  // 多一個checked屬性(布林，預設為false)
  const initState = petOptions.map((v, i) => {
    return { id: i + 1, label: v, checked: false };
  });
  const [petsX, setPetsX] = useState(initState);
  // 處理checked屬性值切換的處理函式
  const handleToggleChecked = (id) => {
    const nextPetsX = petsX.map((v, i) => {
      //如果符合條件(id===傳入的id)，則反相其中屬性checked的值
      if (v.id === id) {
        return { ...v, checked: !v.checked };
      }
      // 否則回傳原本物件
      else return v;
    });
    // 狀態修改通用第3步
    setPetsX(nextPetsX);
  };

  const handleToggleCheckedAll = (e) => {
    const nextPetsX = petsX.map((v, i) => {
      //  強制所有選項物件的checked屬性和全選的e.target.checked完全一致
      return { ...v, checked: e.target.checked };
      // 這個值就是全選勾選框的狀態 e.target.checked。
    });
    setPetsX(nextPetsX);
  };

  return (
    <>
      <h1>可控表單元件範例</h1>
      <section title="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          // 1. value 屬性必需對應到某個 state(狀態)
          value={inputText}
          onChange={(e) => {
            // 2. 元件的事件處理函式必需可以更動到 value 屬性的對應 state(狀態)值
            setInputText(e.target.value);
          }}
        />
        <h2>密碼輸入框(input-password)</h2>
        <input
          type={showPassword ? 'text' : 'password'}
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />{' '}
        <input
          type="checkbox"
          checked={showPassword}
          onChange={(e) => {
            // 第1種寫法，使用事件物件
            //setShowPassword(e.target.checked)
            // 第2種寫法，布林值切換toggle
            setShowPassword(!showPassword);
          }}
        />
        顯示密碼
        <h2>日期輸入框(input-date)-純文字</h2>
        <input
          type="date"
          value={inputDateText}
          onChange={(e) => {
            setInputDateText(e.target.value);
          }}
        />
        <h2>日期輸入框(input-date)-Date物件</h2>
        {/* <input
          type="date"
          value={inputDateObject ? convertDateToString(inputDateObject) : ''}
          onChange={(e) => {
            setInputDateObject(new Date(e.target.value));
          }}
        /> */}
        {/* 第二種 */}
        <input
          type="date"
          // 要轉為字串值
          value={dateToString(inputDateObject)}
          onChange={(e) => {
            // 進入狀態前要轉換為時間日期物件
            setInputDateObject(stringToDate(e.target.value));
          }}
        />
      </section>
      <section title="textarea">
        <h2>文字輸入區域(textarea)</h2>
        {/*  textarea原本是用開頭與結尾標籤包住文字，但是在React中，要用value屬性來對應state */}
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value);
          }}
        />
      </section>
      <section title="radio-button-group">
        <h2>選項按鈕群組(radio-button-group)</h2>
        {petOptions.map((v, i) => {
          return (
            <label
              // 當petOptions陣列在應用執行過程中，完全不會變動。也就是只有靜態呈現的情況，才能用"索引"當key。否則要自行產生唯一的key值。
              key={i}
            >
              <input
                type="radio"
                // 每個radio會用v來和目前的狀態(pet)比較，要完全相符才會是true
                checked={v === pet}
                value={v}
                onChange={(e) => {
                  // console.log(v);
                  // 第一種寫法，如果有用value屬性時
                  // 在onChange時可以用e.target.value得到value屬性的值
                  setPet(e.target.value);

                  // 第二種寫法
                  // setPet(v);
                }}
              />
              {v}
            </label>
          );
          // 原先的<></> 無法加上key屬性，要使用原型的<Fragment></Fragment>元件才能加
          // return (
          //  <Fragment key={i}>
          //    <input type="radio" />
          //    {v}
          //  </Fragment>
          //)
        })}
      </section>
      <section title="checkbox-group">
        <h2>核取方塊群組(checkbox-group)</h2>
        {petOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                checked={pets.includes(v)}
                value={v}
                // 事件處理函式移出到外部撰寫會清楚得多(在map中再寫其它迭代函式，會讓程式碼變得複雜混亂)
                onChange={handlePetsChange}
              />
              {v}
            </label>
          );
        })}
      </section>

      <section title="checkbox-group2">
        <h2>核取方塊群組(checkbox-group)-物件陣列狀態</h2>
        <div>
          <input
            type="checkbox"
            // every陣列方法，要所有的值都為true才會回傳true
            // 為了要連動所有的項目都勾選後要設定這個值
            // 全選並不需要額外的狀態，它的狀態為所有checkbox被選中時的計算出的狀態
            checked={petsX.every((v) => v.checked)} //它是為了讓動物選項狀態和全選狀態有關聯綁在一起，如果沒有綁在一起
            // 強制設定所有選項物件的checked屬性，和全選的e.target.checked完全一致
            onChange={handleToggleCheckedAll}
          />
          全選
        </div>
        <hr />
        {petsX.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                checked={v.checked}
                value={v.label}
                onChange={() => handleToggleChecked(v.id)}
              />
              {v.label}
            </label>
          );
        })}
      </section>
    </>
  );
}
// .includes() 是一個陣列的方法，它用於檢查陣列中是否包含指定的值，如果包含則返回 true，否則返回 false
