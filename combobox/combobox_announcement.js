//Combobox announcement
fix('.cb-header__search .rbt > div', (element) => {
  $(element).ATContext({ after: '' });
  $(element)
    .find('.ae-compliance-indent')
    .attr({ role: 'status', 'aria-live': 'polite' })
    .addClass('ae-search-update');
  let dropdown = $('.cb-header__search ul.rbt-menu');
  onAppears(
    dropdown[0] ?? ((potentialElement) => {
      return $(potentialElement).hasClass('rbt-menu')
    }),
    (dynamicContent) => {
      $(dynamicContent).find('li').watch((ele) => {
        let firstOption = $(dynamicContent)
          .find('li')
          .first()
          .text().trim();
        let options = $(dynamicContent).find('li')?.length;
      if (firstOption?.length) {
        $('.ae-search-update').text(
          `${firstOption} and ${options} other results`,
        );
      }
    });
    },
  );
});