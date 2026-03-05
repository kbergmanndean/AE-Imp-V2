//Quantity Counter
fix('.cb-menu-counter', (element) => {
  $(element).ATContext({ after: '' });
  $('.cb-menu-counter .ae-compliance-indent').attr({
    role: 'status',
    'aria-live': 'polite',
  });
  let price;
  let amount;
  $('.cb-menu-detail__price > div').watch((ele) => {
    price = $(ele).text().trim();
  });
  $(element)
    .find('button[class^="cb-menu-counter"]')
    .on('click', (e) => {
      $('.cb-menu-counter__input').watch((ele) => {
        amount = $(ele).attr('value');
        $('.cb-menu-counter .ae-compliance-indent').text(
          `Quantity: ${amount}. Price: $${price}`,
        );
      });
    });
});