document.addEventListener('DOMContentLoaded', () => {
  const topics = document.querySelectorAll('#topicSelector button');
  const selectedTopic = document.querySelector('#selectedTopic');

  topics.forEach((button) => {
    button.addEventListener('click', () => {
      topics.forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');
      selectedTopic.value = button.dataset.topic;
    });
  });

  document.querySelectorAll('.oracle-faq-item button').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.oracle-faq-item');
      const isOpen = item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
    });
  });

  document.querySelector('#copyLineBtn').addEventListener('click', async (event) => {
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText('@astrooracle');
      button.textContent = 'คัดลอก @astrooracle แล้ว!';
    } catch {
      button.textContent = 'Line ID: @astrooracle';
    }
  });

  const modal = document.querySelector('#successModal');
  document.querySelector('#oracleForm').addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#trackingCode').textContent = `TUM9-${Math.floor(100000 + Math.random() * 900000)}`;
    modal.classList.add('is-open');
    event.currentTarget.reset();
  });

  document.querySelector('#closeModalBtn').addEventListener('click', () => modal.classList.remove('is-open'));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.classList.remove('is-open');
  });
});
