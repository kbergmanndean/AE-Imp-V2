//Form submit announcement
fix('.cb-l-padding-large--vertical.cb-bg-color-white', (element) => {
  $(element).ATContext({ after: '' });
  $('.cb-l-padding-large--vertical.cb-bg-color-white > .ae-compliance-indent').attr({ 'role': 'status', 'aria-live': 'polite' });
  $(element).find('.container > div').watch((ele) => {
    let aeSubmitText = $(ele).find('.cb-type--center .cb-type__title').text().trim();
    $('.cb-l-padding-large--vertical.cb-bg-color-white > .ae-compliance-indent').text(aeSubmitText);
  });
});