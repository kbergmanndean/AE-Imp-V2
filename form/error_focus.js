//Form Error Focus
fix('.cb-newsletter-signup form', (element) => {
  $('#subscribe-button').on('click', () => {
    $('.cb-newsletter-signup form .form-group').watch((ele) => {
      let firstInput = $(ele).closest('form').find('.cb-form__error-message').first().prev('input');
      console.log(firstInput);
      firstInput.trigger('focus');
    });
  });
});