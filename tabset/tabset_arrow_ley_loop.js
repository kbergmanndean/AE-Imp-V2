//Tabset manual arrow key loop
fix('.shogun-root > div.shg-c > div > .shogun-tabs > .shogun-tab', (element) => {
  $(element).on('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      if ($(element).next('.shogun-tab').length) {
        $(element).next('.shogun-tab').trigger('focus');
      } else {
        $(element).closest('.shogun-tabs').find('.shogun-tab').first().trigger('focus');
      }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      if ($(element).prev('.shogun-tab').length) {
        $(element).prev('.shogun-tab').trigger('focus');
      } else {
        $(element).closest('.shogun-tabs').find('.shogun-tab').last().trigger('focus');
      }
    }
  });
});