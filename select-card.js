document.addEventListener('DOMContentLoaded', () => {
  // 1. ดึงหัวข้อที่เลือกจากหน้าแรกมาแสดง
  const savedCategory = sessionStorage.getItem('selectedCategory') || 'ความรัก';
  const topicSpan = document.getElementById('currentTopic');
  if (topicSpan) {
    topicSpan.textContent = savedCategory;
  }

  // 2. ผูก Event คลิกเลือกจำนวนไพ่ (1, 3, 5, 10)
  const cardItems = document.querySelectorAll('.card-item');
  cardItems.forEach((item) => {
    item.addEventListener('click', () => {
      const cardCount = item.getAttribute('data-count');
      
      // บันทึกจำนวนไพ่ลง sessionStorage
      sessionStorage.setItem('selectedCardCount', cardCount);
      
      // ไปยังหน้าคลี่ไพ่ให้เลือก
      window.location.href = 'pick-cards.html';
    });
  });
});