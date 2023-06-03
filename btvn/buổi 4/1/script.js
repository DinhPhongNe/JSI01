// Khởi tạo đồng hồ
function initClock(clockId) {
  let startTime = 0;
  let intervalId;

  function updateClock() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    document.getElementById(clockId).textContent = timeString;
  }

  // Bắt đầu đồng hồ
  document.getElementById(`start${clockId}`).addEventListener('click', () => {
    startTime = Date.now();
    intervalId = setInterval(updateClock, 10);
  });

  // Dừng đồng hồ
  document.getElementById(`stop${clockId}`).addEventListener('click', () => {
    clearInterval(intervalId);
    startTime = 0;
    document.getElementById(clockId).textContent = '00:00.00';
  });

  // Tạm dừng đồng hồ
  document.getElementById(`pause${clockId}`).addEventListener('click', () => {
    clearInterval(intervalId);
  });
}

// Khởi tạo tất cả các đồng hồ
initClock('clock1');
initClock('clock2');
initClock('clock3');
initClock('clock4');
initClock('clock5');

// Bắt đầu tất cả các đồng hồ
document.getElementById('start-all').addEventListener('click', () => {
  initClock('clock1');
  initClock('clock2');
  initClock('clock3');
  initClock('clock4');
  initClock('clock5');
});

// Dừng tất cả các đồng hồ
document.getElementById('stop-all').addEventListener('click', () => {
  clearInterval(intervalId);
  document.getElementById('clock1').textContent = '00:00.00';
  document.getElementById('clock2').textContent = '00:00.00';
  document.getElementById('clock3').textContent = '00:00.00';
  document.getElementById('clock4').textContent = '00:00.00';
  document.getElementById('clock5').textContent = '00:00.00';
});