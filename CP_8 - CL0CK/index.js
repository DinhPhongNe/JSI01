// Lấy các phần tử HTML tương ứng
const clocks = [document.getElementById("clock1"), document.getElementById("clock2"), document.getElementById("clock3")];
const startButtons = [document.getElementById("start1"), document.getElementById("start2"), document.getElementById("start3"), dodocument.getElementById("start4"),document.getElementById("start5")];
const stopButtons = [document.getElementById("stop1"), document.getElementById("stop2"), document.getElementById("stop3"), document.getElementById("stop4"), document.getElementById("stop5")];
const stopAllButton = document.getElementById("stopAll");

// Khởi tạo một mảng lưu trữ thời gian của từng đồng hồ
let times = [0, 0, 0];

// Hàm cập nhật thời gian trên mỗi đồng hồ
function updateClock(index) {
  times[index]++;
  const minutes = Math.floor(times[index] / 60);
  const seconds = times[index] % 60;
  clocks[index].textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Thêm sự kiện click vào nút "Start" trên mỗi đồng hồ
startButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Đặt interval để cập nhật thời gian trên đồng hồ tương ứng
    const intervalId = setInterval(() => updateClock(index), 1000);
    // Lưu trữ id interval để có thể dừng lại sau này
    button.dataset.intervalId = intervalId;
  });
});

// Thêm sự kiện click vào nút "Stop" trên mỗi đồng hồ
stopButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Dừng interval và đặt lại thời gian của đồng hồ tương ứng
    clearInterval(parseInt(button.dataset.intervalId));
    times[index] = 0;
    clocks[index].textContent = "00:00";
  });
});

// Thêm sự kiện click vào nút "Stop All"
stopAllButton.addEventListener("click", () => {
  // Dừng interval và đặt lại thời gan của tất cả các đồng hồ
  startButtons.forEach(button => clearInterval(parseInt(button.dataset.intervalId)));
  times = [0, 0, 0];
  clocks.forEach(clock => clock.textContent = "00:00");
});