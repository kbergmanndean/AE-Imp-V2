//cart quantity buttons
fix('.QuantitySelector__Button', (element) => {
  $(element).button();
  let productName = $(element)
    .closest('.CartItem')
    .find('.CartItem__Title')
    .text()
    .trim();
  if ($(element).find('svg').hasClass('Icon--minus')) {
    $(element).label(`Subtract 1 ${productName} from cart`);
  } else if ($(element).find('svg').hasClass('Icon--plus')) {
    $(element).label(`Add 1 ${productName} to cart`);
  }
});