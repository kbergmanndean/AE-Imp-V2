//cart remove button status announcement
fix('.showcase-quantity-value', (element) => {
  $(element).closest('.showcase-viewer-cart-items').ATContext({ before: '' });
  $(element).closest('.showcase-viewer-cart-items').find('.ae-compliance-indent').attr({ 'role': 'status', 'aria-live': 'polite' });
  let productName = $(element).closest('.showcase-viewer-cart-item-info').find('.showcase-viewer-cart-item-info-title a').text().trim();
  let extraText = $(element).find('.ae-compliance-indent').text().trim();
  let productQuant = $(element).text().trim().replace(extraText,'');
  if (productQuant === '1') {
    $(element).prev('.showcase-quantity-button.decrease').on('click', (e) => {
      $(element).watch((ele) => {
        $(element).closest('.showcase-viewer-cart-items').find('.ae-compliance-indent').text(`${productName} has been removed from cart`);
        $(element).closest('.showcase-viewer-cart-items').find('.ae-compliance-indent').focusNonInteractive();
      });
  });    
  };
});