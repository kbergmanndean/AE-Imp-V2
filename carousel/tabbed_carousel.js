let bullets = Array.from(
  document.querySelectorAll('.swiper-pagination-bullet'),
);

fix('.swiper-pagination-bullet', (element) => {
  $(element).watch((ele) => {
    let bulletNum = bullets.length;
    let bulletIndex = bullets.indexOf(element);
    $(ele).label(`Slide ${bulletIndex + 1} of ${bulletNum}`);
    $(ele).role('tab');
    $(element).closest('.swiper-pagination').role('tablist');
    $(element).closest('.swiper').find('.swiper-slide').role('tabpanel');
    if ($(element).hasClass('swiper-pagination-bullet-active')) {
      $(element).attr({'aria-selected':'true', 'tabindex':'0'});
    } else {
      $(element).attr({'aria-selected':'false', 'tabindex':'-1'});
    }
    $(ele).closest('.swiper').find(`.swiper-slide[data-swiper-slide-index="${bulletIndex}"]`).label(`Slide ${bulletIndex + 1} of ${bulletNum}`);
    $(ele).closest('.swiper').find('.swiper-slide.swiper-slide-visible').siblings('.swiper-slide').find('button').attr('tabindex','-1');
    $(ele).closest('.swiper').find('.swiper-slide.swiper-slide-visible').find('button').attr('tabindex','0');
  });
});