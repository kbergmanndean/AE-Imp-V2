//arrow key loop
 $(element).on('keydown', (e) => {
    if (e.key === 'ArrowRight' && !$(element).prev('.cb-form__radio').length) {
      console.log('right');
      $(element).closest('.cb-cart__defaults').find('.cb-form__radio').first().trigger('focus');
    }
    if (e.key === 'ArrowLeft' && !$(element).next('.cb-form__radio').length) {
      console.log('left');
      $(element).closest('.cb-cart__defaults').find('.cb-form__radio').last().trigger('focus');
    }
  });