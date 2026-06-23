//Save button not showing up in accessible carousel
fix('.ae-carousel-popup ', (element) => {
  //make save dialog appear in front of accessible carousel when open
  $(element).css('z-index', '109');
  $('#ae-modal-overlay').css('z-index', '108');

  //as carousel updates, update save toggle button for each slide
  $(element).find('.ae-carousel-slide').watch((slide) => {
    let carouselBtn = $(slide).find(
      '[data-cmp="inventoryListing"] span[aria-pressed]',
    );
    let carSlide = $(slide)
      .find('h2')
      .text()
      .trim();
    carouselBtn
      .text(`Save ${carSlide}`).removeAttr('aria-label');
    //find native save button associated with accessible carousel save button
    let carSlideNative = $(slide)
      .closest('.ae-carousel-popup')
      .prev('.inventory-carousel')
      .find('.inventory-listing h2')
      .filter((i, el) => $(el).text().trim() === carSlide);
    let nativeHeart = carSlideNative
      .closest('.inventory-listing')
      .find('.save-glyph-background');
    //watch native save button, update accessible carousel save button to match toggle
    nativeHeart.find('.glyphicon-heart').watch((ele) => {
      if ($(ele).hasClass('text-saved')) {
        carouselBtn.attr('aria-pressed', 'true');
      } else {
        carouselBtn.attr('aria-pressed', 'false');
      }
    });

    //refocus on accessible carousel save button when save dialog is closed
    carouselBtn.on('click', (e) => {
      onAppears($('[data-cmp="updateSavedInventory"]'), (e)=> {
        return ()=> {
          carouselBtn.trigger('focus');
        }
      });
    })
  });
});