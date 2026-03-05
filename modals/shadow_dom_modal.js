//Modal in Shadow DOM manual tab loop
//note: must define types, HTMLElement
fix('#csm-wrapper', (element) => {
  $(element).watch((ele) => {
    if (ele.querySelector('.cc-banner')) {
      const allowBtn = ele.querySelector('.cc-allow');
      const firstInteractiveEl = ele.querySelector('a.isense-cc-link');
      allowBtn.addEventListener('keydown', (e) => {
        if (e.key === "Tab" && !e.shiftKey) {
          setFocusNonInteractive(firstInteractiveEl);
        }
      });
      firstInteractiveEl.addEventListener('keydown', (e) => {
        if (e.key === "Tab" && e.shiftKey) {
          allowBtn.focus();
        }
      });
    }
  });
});