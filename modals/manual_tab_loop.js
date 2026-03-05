//Manual Tab Loop
fix('.greetings-card .modal-content', (element) => {
  onAppears(element, (modal) => {
    $(modal).find('.modal-close-btn').trigger('focus');
  });
  const focusableElements = 'button, [href], input, select, textarea';
  let focusableContent = $(element).find(focusableElements).not('[disabled], [tabindex="-1"]');
  if (focusableContent.length) {
    let firstFocusable = focusableContent.first();
    let lastFocusable = focusableContent.last();
    focusableContent.watch((ele) => {
      focusableContent = $(element).find(focusableElements).not('[disabled], [tabindex="-1"]');
      firstFocusable = focusableContent.first();
      lastFocusable = focusableContent.last();
    });
    $(element).on('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstFocusable[0]) {
          e.preventDefault();
          lastFocusable.trigger('focus');
        } else if (!e.shiftKey && document.activeElement === lastFocusable[0]) {
          e.preventDefault();
          firstFocusable.trigger('focus');
        }
      }
    });
  }
});