//Form Errors Not Announcing
fix('.cb-newsletter-signup form .form-group', (element) => {
  $(element).ATContext({ before: '' });
  $(element).find('.ae-compliance-indent').attr({ 'role': 'status', 'aria-live': 'polite' }).addClass('ae-form-errors');
  $(element).watch((ele) => {
      let aeError = $(ele).find('.cb-form__error-message').length ? $(ele).find('.cb-form__error-message').text().trim() : ''
      $(ele).find('.ae-form-errors').text(aeError)
      $(ele).find('input').describedBy($(ele).find('.cb-form__error-message')[0]);
  });
});