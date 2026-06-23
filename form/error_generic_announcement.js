//Error messages generic and not announcing
fix('.contact-us-form-wrapper .form-field select, .contact-us-form-wrapper .form-field input', (element) => {
  $(element).closest('.form-field').ATContext({before: ''});
  let formFieldStatus = $(element).closest('.form-field').find('.ae-compliance-indent');
  formFieldStatus.role('status').attr('aria-live','polite');
  $(element).describedBy(formFieldStatus[0]);
  $(element).closest('.form-field').watch((ele)=> {
    if ($(ele).find('.error-msgs').length) {
      let fieldLabel = $(ele).find('label').text().trim();
      $(ele).find('.ae-compliance-indent').text(`${fieldLabel} field is required`);
    }
  });
});