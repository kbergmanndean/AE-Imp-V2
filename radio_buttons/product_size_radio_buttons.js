//Product Size Radio Button state w/ sold out, color change
fix('.SizeSwatchList li.swatch-element label.SizeSwatch', (element) => {
  //add aria-disabled and negative tabindex to sold out sizes
  $('.SizeSwatchList li.swatch-element.soldout .SizeSwatch').attr({'aria-disabled':'true', 'tabindex':'-1'});
  //radiogroup label element is only element that changes in DOM on selecting radio button - watch label
  $(element).closest('ul').prev('.ProductForm__Label').find('.ProductForm__SelectedValue').watch((ele) => {
    //navigate to radio buttons from watched element, filter by color to find selected button
    $(ele).closest('.ProductForm__Label').next('ul').find('.SizeSwatch').filter((i, el) => $(el).css('color') === 'rgb(255, 255, 255)').attr({ 'aria-checked': 'true', tabindex: '0' });
    $(ele).closest('.ProductForm__Label').next('ul').find('.SizeSwatch').filter((i, el) => $(el).css('color') === 'rgb(0, 0, 0)').attr({ 'aria-checked': 'false', tabindex: '-1' });
    //find selected button for sold out disabled sizes if every size is sold out
    $(ele).closest('.ProductForm__Label').next('ul').find('li.soldout .SizeSwatch').filter((i, el) => $(el).css('background-color') === 'rgb(28, 27, 27)').attr({ 'aria-checked': 'true','tabindex':'0' });
    $(ele).closest('.ProductForm__Label').next('ul').find('li.soldout .SizeSwatch').not((i, el) => $(el).css('background-color') === 'rgb(28, 27, 27)').attr({ 'aria-checked': 'false','tabindex':'-1' });
    //if no button selected, give tabindex to first button that's not sold out
    if ($(ele).closest('.ProductForm__Label').next('ul').find('.SizeSwatch').filter((i, el) => $(el).css('color') === 'rgb(255, 255, 255)').length === 0 && !$(ele).find('.SizeSwatch[aria-checked="true"]').length) {
      $(ele).closest('.ProductForm__Label').next('ul').find('li').not('.soldout').find('.SizeSwatch').first().attr('tabindex','0');
      //if all sizes are sold out and nothing is selected, give tabindex to first button
      if ($(ele).closest('.ProductForm__Label').next('ul').find('li').length === $(ele).closest('.ProductForm__Label').next('ul').find('li.soldout').length && !$(ele).closest('.ProductForm__Label').next('ul').find('.SizeSwatch[aria-checked="true"]').length) {
        $(ele).closest('.ProductForm__Label').next('ul').find('li').find('.SizeSwatch').first().attr('tabindex','0');
      }
    }
  });
  //negative tabindex to input elememnt
  $(element).find('input').attr('tabindex', '-1');
});

//Product Size Radio Button state w/ sold out, color change UPDATE:
fix('.SizeSwatchList li.swatch-element label.SizeSwatch', (element) => {
  //radiogroup label element is only element that changes in DOM on selecting radio button - watch label
  $(element).closest('ul').prev('.ProductForm__Label').find('.ProductForm__SelectedValue').watch((ele) => {
    //if no button selected, give tabindex to first button that's not sold out
    if ($(ele).closest('.ProductForm__Label').next('ul').find('.SizeSwatch').filter((i, el) => $(el).css('color') === 'rgb(255, 255, 255)').length === 0 && !$(ele).closest('.ProductForm__Label').next('ul').find('li.soldout .SizeSwatch').filter((i, el) => $(el).css('background-color') === 'rgb(28, 27, 27)').length) {
      let first = $(ele).closest('.ProductForm__Label').next('ul').find('li').not('.soldout').find('.SizeSwatch').first();
      first.attr({'tabindex':'0', 'aria-checked':'false'});
      first.closest('li').siblings('li').find('.SizeSwatch').filter((i, el) => $(el).css('color') === 'rgb(0, 0, 0)').attr({ 'aria-checked': 'false', tabindex: '-1' });
      //if all sizes are sold out and nothing is selected, give tabindex to first button
      if ($(ele).closest('.ProductForm__Label').next('ul').find('li').length === $(ele).closest('.ProductForm__Label').next('ul').find('li.soldout').length && !$(ele).closest('.ProductForm__Label').next('ul').find('.SizeSwatch').filter((i, el) => $(el).css('background-color') === 'rgb(28, 27, 27)').length) {
        let firstSoldOut = $(ele).closest('.ProductForm__Label').next('ul').find('li.soldout').find('.SizeSwatch').first();
        firstSoldOut.attr({'tabindex':'0', 'aria-checked':'false', 'aria-disabled':'true'});
        firstSoldOut.closest('li.soldout').siblings('li.soldout').find('.SizeSwatch').not((i, el) => $(el).css('background-color') === 'rgb(28, 27, 27)').attr({ 'aria-checked': 'false','tabindex':'-1', 'aria-disabled':'true' });
      } else {
        //add aria-disabled and negative tabindex to sold out sizes
        $(ele).closest('.ProductForm__Label').next('ul').find('li.soldout .SizeSwatch').not((i, el) => $(el).css('background-color') === 'rgb(28, 27, 27)').attr({ 'aria-checked': 'false','tabindex':'-1', 'aria-disabled':'true' });
      }
    } else {
    //navigate to radio buttons from watched element, filter by color to find selected button
    $(ele).closest('.ProductForm__Label').next('ul').find('.SizeSwatch').filter((i, el) => $(el).css('color') === 'rgb(255, 255, 255)').attr({ 'aria-checked': 'true', tabindex: '0' });
    $(ele).closest('.ProductForm__Label').next('ul').find('.SizeSwatch').filter((i, el) => $(el).css('color') === 'rgb(0, 0, 0)').attr({ 'aria-checked': 'false', tabindex: '-1' });
    //find selected button for sold out disabled sizes if every size is sold out
    $(ele).closest('.ProductForm__Label').next('ul').find('li.soldout .SizeSwatch').filter((i, el) => $(el).css('background-color') === 'rgb(28, 27, 27)').attr({ 'aria-checked': 'true','tabindex':'0', 'aria-disabled':'true' });
    $(ele).closest('.ProductForm__Label').next('ul').find('li.soldout .SizeSwatch').not((i, el) => $(el).css('background-color') === 'rgb(28, 27, 27)').attr({ 'aria-checked': 'false','tabindex':'-1', 'aria-disabled':'true' });
    }
  });
  //negative tabindex to input elememnt
  $(element).find('input').attr('tabindex', '-1');
  //link role and tabindex to color elements
  if ($('.ColorSwatchList .ColorSwatch').length > 1) {
    $('.ColorSwatchList .ColorSwatch').attr({'role':'link', 'tabindex':'0'});
  }
});