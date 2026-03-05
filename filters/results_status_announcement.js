//filters results update status
fix('.builder-block .page-section .space-y-4', (element) => {
  if (document.location.pathname === '/women') {
    $(element).prepend('<span class="ae-compliance-indent ae-women-results" style="display:none" role="status" aria-live="polite"></span>');
    let aeFilters = []
    $(element).prev('.scroll-container').find('button').watch((ele) => {
      if ($(ele).hasClass('border-secondaryA') && !aeFilters.includes($(ele).text().trim())) {
        aeFilters.push($(ele).text().trim());
      } else if ($(ele).hasClass('border-transparent')) {
        let indexOut = aeFilters.indexOf($(ele).text().trim());
        if (indexOut !== -1) {
          aeFilters.splice(indexOut, 1);
        }
      }
      let aeFiltersString = aeFilters.length ? `Results for ${aeFilters.join(', ')}` : ''
      $('.ae-women-results').text(aeFiltersString);
    });
  }
});