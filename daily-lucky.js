const dailyReadings = [
  {
    message: 'วันนี้เหมาะกับการเริ่มต้นสิ่งเล็ก ๆ ที่คุณเลื่อนมานาน ลงมือทีละก้าวแล้วจังหวะดีจะค่อย ๆ ตามมา',
    number: '3, 8',
    color: 'ม่วงลาเวนเดอร์',
    focus: 'เริ่มต้นสิ่งใหม่'
  },
  {
    message: 'เปิดใจรับฟังคนรอบข้าง คุณอาจพบคำแนะนำดี ๆ จากบทสนทนาธรรมดาที่ไม่ทันคาดคิด',
    number: '2, 6',
    color: 'ฟ้าอ่อน',
    focus: 'สื่อสารและร่วมมือ'
  },
  {
    message: 'ค่อย ๆ จัดการเรื่องสำคัญตามลำดับ ความสม่ำเสมอในวันนี้จะช่วยให้เป้าหมายชัดขึ้น',
    number: '4, 9',
    color: 'เขียวมิ้นต์',
    focus: 'วางแผนและลงมือทำ'
  },
  {
    message: 'ให้เวลากับสิ่งที่ทำให้ใจสงบ พลังที่ได้กลับมาจะช่วยให้คุณมองเห็นทางเลือกใหม่',
    number: '1, 7',
    color: 'ชมพูอ่อน',
    focus: 'พักใจและทบทวน'
  },
  {
    message: 'ความคิดสร้างสรรค์กำลังเด่น ลองทำสิ่งเดิมด้วยวิธีใหม่ แล้วคุณอาจได้ผลลัพธ์ที่น่าพอใจ',
    number: '5, 8',
    color: 'ทองอ่อน',
    focus: 'ไอเดียและแรงบันดาลใจ'
  },
  {
    message: 'แบ่งปันความตั้งใจดีให้คนรอบตัว วันนี้ความสัมพันธ์ที่อบอุ่นจะเป็นแรงสนับสนุนสำคัญ',
    number: '2, 9',
    color: 'ส้มพีช',
    focus: 'มิตรภาพและความสัมพันธ์'
  },
  {
    message: 'เชื่อมั่นในจังหวะของตัวเอง ไม่จำเป็นต้องรีบเทียบเส้นทางกับใคร ความก้าวหน้าของคุณมีความหมายเสมอ',
    number: '3, 6',
    color: 'น้ำเงินคราม',
    focus: 'ความมั่นใจในตัวเอง'
  }
];

const today = new Date();
const dayNumber = Math.floor(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000);
const reading = dailyReadings[((dayNumber % dailyReadings.length) + dailyReadings.length) % dailyReadings.length];
const dateLabel = new Intl.DateTimeFormat('th-TH', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(today);

document.querySelector('#dailyDate').textContent = dateLabel;
document.querySelector('#dailyMessage').textContent = reading.message;
document.querySelector('#luckyNumber').textContent = reading.number;
document.querySelector('#luckyColor').textContent = reading.color;
document.querySelector('#luckyFocus').textContent = reading.focus;
