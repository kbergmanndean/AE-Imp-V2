fix('.gallery-carousel__content .swiper-slide', (element) => {
  let gallerySlides = Array.from(document.querySelectorAll('.gallery-carousel__content .swiper-slide'));
  $(element).closest('.swiper').role('region').attr('aria-roledescription','carousel').label('Image Gallery');
  $(element).role('group').attr('aria-roledescription','slide');
  $(element).closest('.swiper-wrapper').attr({'aria-atomic':'false', 'aria-live':'polite'});
  let slideNumber = gallerySlides.length;
  let slideIndex = gallerySlides.indexOf(element) + 1;
  $(element).label(`Slide ${slideNumber} of ${slideIndex}`);
  $(element).watch((ele)=> {
    if (!$(ele).hasClass('swiper-slide-active')) {
      $(ele).hideFromAT();
      $(ele).find('a, button').attr('tabindex','-1');
    } else {
      $(ele).role('group').removeAttr('tabindex aria-hidden');
      $(ele).find('a, button').removeAttr('tabindex');
    }
  });
  $('.swiper-button-prev, .swiper-button-next').button().simulateClickOnKeypress();
});