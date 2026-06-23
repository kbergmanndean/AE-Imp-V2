//Search combobox
fix('#predictiveResults', (element) => {
  $(element).removeAttr('role');
  $('.sc-search-panel input[id$="txtSearch"]').role('combobox').attr('aria-controls','#predictiveResults');
  $('.sc-search-panel').ATContext({after:''});
  $('.sc-search-panel .ae-compliance-indent').role('status').attr({'aria-live':'true', 'id':'ae-search-status'});
    $(element).watch((ele)=> {
    if ($(ele).find('ul').length) {
      $('.sc-search-panel input[id$="txtSearch"]').attr('aria-expanded','true');
      let firstResult = $(ele).find('a h2').first().text().trim();
      let resultNum = $(ele).find('ul li').length - 1;
      $('#ae-search-status').text(`${firstResult} and ${resultNum} other results`);
    } else {
      $('.sc-search-panel input').attr('aria-expanded','false');
    }
  });
});