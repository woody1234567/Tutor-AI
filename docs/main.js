window.CSAI = (function () {
  const qs = (s, el = document) => el.querySelector(s);

  function initYear() {
    const y = new Date().getFullYear();
    const el = qs('#year');
    if (el) el.textContent = y;
  }

  function initNav() {
    const btn = qs('.nav-toggle');
    const menu = qs('#nav-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      const show = !menu.classList.contains('show');
      menu.classList.toggle('show', show);
      btn.setAttribute('aria-expanded', String(show));
    });
    // Close on link click (mobile)
    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) menu.classList.remove('show');
    });
  }

  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      const target = qs(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Demo request:', data);
    alert('已收到您的預約需求，感謝！\n我們將於 1–2 個工作日內回覆。');
    form.reset();
    return false;
  }

  function init() {
    initYear();
    initNav();
    initSmoothScroll();
  }

  document.addEventListener('DOMContentLoaded', init);

  return { handleSubmit };
})();

