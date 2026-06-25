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

//alt
fix('.image-viewer__carousel [class^="custom-swiper-button-"]', (element) => {
  let btnText = $(element).attr('aria-label');
  $(element).ATContext({ before: `${btnText}` });
  $(element).find('.ae-compliance-indent').ATContext({ after: `` });
  $('.image-viewer__carousel .swiper').ATContext({before:''});
  $('.image-viewer__carousel .swiper > .ae-compliance-indent').role('status').attr('aria-live','polite');
  $(element).watch((ele) => {
    let activeSlide = $(ele)
      .prevAll('.swiper')
      .first()
      .find('.swiper-slide.swiper-slide-active')
      .attr('aria-label');
    $(ele)
      .find('.ae-compliance-indent .ae-compliance-indent')
      .text(`Slide ${activeSlide}`);
    $(ele).closest('.image-viewer__carousel').find('.swiper > .ae-compliance-indent').text(`Slide ${activeSlide}`);
  });
  $(element).removeAttr('aria-label');
  $(element).find('svg').hideFromAT();
});
