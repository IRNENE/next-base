
// 展開和拷貝(淺拷貝...)

// 題目1：展開陣列
// 將兩個陣列合併成一個新的陣列。
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = [...array1,...array2]
console.log(newArray);
// newArray 應該為 [1, 2, 3, 4, 5, 6]


// 題目2：複製陣列
// 複製一個陣列，並向其中添加一個新的元素，確保原始陣列不受影響。
const originalArray = [1, 2, 3];
// 複製 originalArray 到 copiedArray，並向 copiedArray 添加一個新元素 4
const copiedArray = [...originalArray,4]
console.log(copiedArray);


// 題目3：展開物件
// 將兩個物件合併成一個新的物件。
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const newObject = {...object1,...object2}
console.log(newObject);
// newObject 應該為 { a: 1, b: 2, c: 3, d: 4 }


// 題目4：複製物件
// 複製一個物件，並修改複製後的物件的一個屬性，確保原始物件不受影響。
const originalObject = { x: 1, y: 2 };
// 並將 copiedObject 的 y 屬性值設置為 3
const copiedObject = {...originalObject,y:3}
console.log(originalObject);
console.log(copiedObject);

// 請確認 originalObject 的 y 屬性值為 2，copiedObject 的 y 屬性值為 3
// 請嘗試解決這些題目，並確保理解展開和拷貝的概念。