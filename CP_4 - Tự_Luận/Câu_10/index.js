// Khởi tạo chuỗi
const str = "High knowledge, high return";

// Chuyển đổi chuỗi -> mảng và xóa các phần tử có giá trị là khoảng trắng
const arr = str.split(" ").filter((item) => item !== "");

// Chuyển đổi các phần tử có giá trị là chữ hoa -> chữ thường
for (let i = 0; i < arr.length; i++) {
  if (arr[i].toUpperCase() === arr[i]) {
    arr[i] = arr[i].toLowerCase();
  }
}

console.log(arr);

// 2 + 2 is 4
// oh wait
// 4 letters in chinese
// 我喜欢你 | Wǒ xǐhuān nǐ
// 我很爱你 | Wǒ hěn ài nǐ
// 在你心里 | Zài nǐ xīnlǐ
// 你很美丽 | Nǐ hěn měilì