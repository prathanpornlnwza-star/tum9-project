document.addEventListener('DOMContentLoaded', () => {
  const categoryButtons = document.querySelectorAll('.category-btn');
  const continueBtn = document.getElementById('continueBtn');
  let selectedCategory = null;

  // วนลูปผูก Event การคลิกให้แต่ละปุ่มหมวดหมู่
  categoryButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // 1. ดึงปุ่มที่ถูกคลิกเสมอ (แม้จะเผลอไปกดโดนรูปข้างใน)
      const clickedBtn = e.currentTarget;

      // 2. เคลียร์คลาส selected ของปุ่มอื่นออกทั้งหมด
      categoryButtons.forEach((b) => b.classList.remove('selected'));

      // 3. เพิ่มคลาส selected ให้ปุ่มที่เพิ่งกด
      clickedBtn.classList.add('selected');

      // 4. บันทึกชื่อเรื่องที่เลือกไว้
      selectedCategory = clickedBtn.getAttribute('data-category');
      console.log('เลือกหัวข้อ:', selectedCategory);

      // 5. ปลดล็อกปุ่ม Continue ให้กดได้
      if (continueBtn) {
        continueBtn.removeAttribute('disabled');
      }
    });
  });

  // เมื่อกดปุ่ม Continue
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      if (!selectedCategory) return;

      sessionStorage.setItem('selectedCategory', selectedCategory);
      window.location.href = 'select-card.html';
    });
  }
}); 