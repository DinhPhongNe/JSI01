// Khởi tạo mảng
const m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];

// Xóa các phần tử không phải dạng số
const filteredM = m.filter((item) => typeof item === "number");

// Tính bình phương các phần tử còn lại
const mSquared = [];
for (let i = 0; i < filteredM.length; i++) {
  mSquared.push(Math.pow(filteredM[i], 2));
}

// In kết quả
console.log(" Kết quả của mSquared sẽ là: " + mSquared )


// 2 + 2 is 4
// oh wait
// 4 letters in chinese
// 我喜欢你 | Wǒ xǐhuān nǐ
// 我很爱你 | Wǒ hěn ài nǐ
// 在你心里 | Zài nǐ xīnlǐ
// 你很美丽 | Nǐ hěn měilì