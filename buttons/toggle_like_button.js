//Toggle save/like/add to favorites button
fix('.cb-card button.cb-card__favorite', (element) => {
  let aeProduct = $(element).closest('.cb-card').find('.cb-card__title').text().trim();
  $(element).attr({ 'aria-live': 'polite'});
  $(element).ATContext({ before: '' });
  $(element).watch((ele) => {
    if ($(ele).hasClass('is-active')) {
      $(ele).trigger('focus');
      $(ele).attr('aria-pressed', 'true');
      $(ele).find('.ae-compliance-indent').text(`${aeProduct} is in favorites`);
    } else {
      $(ele).trigger('focus');
      $(ele).attr('aria-pressed', 'false');
      $(ele).find('.ae-compliance-indent').text(`Add ${aeProduct} to favorites`);
    }
  });
});