(() => {
  if (!document.querySelector('.admin-chat-toggle')) {
    document.body.insertAdjacentHTML('beforeend', `
      <button class="admin-chat-toggle" type="button" aria-label="เปิดแชทติดต่อแอดมิน" aria-expanded="false" aria-controls="admin-chat-panel">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-5.5A7.5 7.5 0 1 1 20 11.5Z"></path>
          <path d="M8 11h.01M12 11h.01M16 11h.01"></path>
        </svg>
      </button>
      <section class="admin-chat-panel" id="admin-chat-panel" aria-labelledby="admin-chat-title" hidden>
        <header class="admin-chat-header">
          <div>
            <h2 id="admin-chat-title">ติดต่อแอดมิน</h2>
            <p>ส่งข้อความถึงทีม TUM9</p>
          </div>
          <button class="admin-chat-close" type="button" aria-label="ปิดหน้าต่างแชท">&times;</button>
        </header>
        <div class="admin-chat-messages" role="log" aria-live="polite">
          <p class="admin-chat-message admin-chat-message--admin">สวัสดีค่ะ ฝากข้อความถึงแอดมินได้เลย เมื่อกดส่ง ระบบจะเปิดอีเมลฉบับร่างให้คุณตรวจสอบและส่ง</p>
        </div>
        <form class="admin-chat-form">
          <label for="admin-chat-name">ชื่อ <span>(ไม่บังคับ)</span></label>
          <input id="admin-chat-name" name="name" autocomplete="name" placeholder="ชื่อของคุณ">
          <label for="admin-chat-email">อีเมลสำหรับติดต่อกลับ <span>(ไม่บังคับ)</span></label>
          <input id="admin-chat-email" name="email" type="email" autocomplete="email" placeholder="you@example.com">
          <label for="admin-chat-message">ข้อความ</label>
          <textarea id="admin-chat-message" name="message" rows="3" required placeholder="พิมพ์ข้อความที่ต้องการติดต่อ"></textarea>
          <button class="admin-chat-send" type="submit">เขียนอีเมลถึงแอดมิน</button>
          <p class="admin-chat-note">ระบบจะเปิดแอปอีเมลของคุณ กรุณากดส่งในแอปเพื่อส่งข้อความ</p>
        </form>
      </section>
    `);
  }

  const toggle = document.querySelector('.admin-chat-toggle');
  const panel = document.querySelector('#admin-chat-panel');
  const close = document.querySelector('.admin-chat-close');
  const form = document.querySelector('.admin-chat-form');
  const message = document.querySelector('#admin-chat-message');

  if (!toggle || !panel || !close || !form || !message) return;

  function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) message.focus();
    else toggle.focus();
  }

  toggle.addEventListener('click', () => setOpen(panel.hidden));
  close.addEventListener('click', () => setOpen(false));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) setOpen(false);
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const text = String(formData.get('message') || '').trim();
    const body = [
      `ชื่อ: ${name || '-'}`,
      `อีเมลสำหรับติดต่อกลับ: ${email || '-'}`,
      '',
      'ข้อความ:',
      text
    ].join('\n');
    const mailto = `mailto:eldonser007@gmail.com?subject=${encodeURIComponent('ติดต่อแอดมิน TUM9')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
})();
