(function () {
  const stage = document.querySelector('.service-stage');
  if (!stage) return;

  const cards = [...stage.querySelectorAll('.service-card')];
  const desktop = matchMedia('(min-width: 901px)');
  const GATHER_MS = 1200;   // เวลารวมกลาง + ค้างก่อนกระจาย
  let busy = false;

  function step(clicked) {
    busy = true;
    clicked.classList.add('is-clicked');
    stage.classList.add('is-gathering');          // รวมเข้ากลาง

    setTimeout(() => {
      cards.forEach(c => c.dataset.slot = (+c.dataset.slot + 1) % 4); // เลื่อน 1 ช่อง
      stage.classList.remove('is-gathering');     // กระจายออก
      setTimeout(() => {
        clicked.classList.remove('is-clicked');
        busy = false;
      }, 750);
    }, GATHER_MS);
  }

  cards.forEach(card => {
    if (card.tagName !== 'A') {                   // การ์ดที่ไม่ใช่ลิงก์ ให้กดด้วยคีย์บอร์ดได้
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    }

    card.addEventListener('click', e => {
      if (!desktop.matches) return;               // มือถือ/แท็บเล็ต ไม่ใช้เอฟเฟกต์
      if (card.dataset.slot === '1' && card.tagName === 'A') return; // ใบหน้ากลางที่เป็นลิงก์ → เข้าหน้านั้น
      e.preventDefault();
      if (!busy) step(card);
    });
  });
})();