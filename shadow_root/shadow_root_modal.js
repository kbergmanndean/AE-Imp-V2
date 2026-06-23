//Shadow Root Modal
fix('image-capture-container #image-capture-guidelines-modal [data-testid="-modal"]', (element) => {
  $(element).label($(element).find('h1'));
  $(element).closest('image-capture-container').find('[data-testid="imageCapturePhotoGuidelinesButton"]').attr('tabindex','0');
  $(element).closest('image-capture-container').find('[data-testid="imageCapturePhotoGuidelinesButton"]').simulateClickOnKeypress();
  $(element).parent('div').watch((ele)=> {
    //focus on close when open dialog
    if ($(ele).hasClass('visible')) {
      $(ele).find('[data-testid="imageCaptureGuidelinesDoneButton"] button').trigger('focus');
    } else {
      //return focus to trigger on dialog close
      $(ele).closest('image-capture-container').find('[data-testid="imageCapturePhotoGuidelinesButton"]').trigger('focus');
    }
  });

  //manual tab loop
  const focusableElements = $(element).find('a, button, input, [tabindex="0"]');
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1]; 
  $(focusableElements).each((_, element) => {
      $(element).on('keydown', function (e) {
        const isTabPressed = e.key === 'Tab'
        if (!isTabPressed) return;

        const activeElement = document.querySelector('image-capture').shadowRoot.activeElement;

        if (e.shiftKey) {
          if (activeElement === firstFocusableElement) {
            if (lastFocusableElement instanceof HTMLElement) lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (activeElement === lastFocusableElement) {
            if (firstFocusableElement instanceof HTMLElement) firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      });
    });
});