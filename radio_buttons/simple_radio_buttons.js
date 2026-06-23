//Simpler radio button state with color change
fix('.showcase-viewer-product-option-input label', (element) => {
  //price element is only element that changes in DOM on selecting radio button - watch price
  $('.showcase-viewer-product-price').watch((ele) => {
    //navigate to radio buttons from watched element
    $(ele)
      .next('.showcase-viewer-product-options')
      .find('.showcase-viewer-product-option-input label')
      //filter radio buttons by color to find selected button
      .filter(
        (i, el) => $(el).find('span').css('color') === 'rgb(255, 255, 255)',
      )
      .attr({ 'aria-checked': 'true', tabindex: '0' });
    $(ele)
      .next('.showcase-viewer-product-options')
      .find('.showcase-viewer-product-option-input label')
      .filter((i, el) => $(el).find('span').css('color') === 'rgb(51, 51, 51)')
      .attr({ 'aria-checked': 'false', tabindex: '-1' });
  });
  $(element).find('input').attr('tabindex', '-1');
});