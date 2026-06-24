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

//alt 
fix('.login-forgot .login-forgot__input', (element) => {
  $(element).ATContext({before:''});
  $(element).find('.ae-compliance-indent').attr({role:'status','aria-live':'polite'});
  $(element).find('input').describedBy($(element).find('.ae-compliance-indent')[0]);
  $(element).watch((ele)=> {
    if ($(ele).find('.alert').length) {
      let formfieldName = $(element).find('label').text().trim();
      $(ele).find('.ae-compliance-indent').text(`${$(ele).find('.alert').text().trim().replace('This field',formfieldName)}`);
      $(ele).find('input').attr('aria-invalid','true');
    } else {
      $(ele).find('input').removeAttr('aria-invalid');
    }
  });
});