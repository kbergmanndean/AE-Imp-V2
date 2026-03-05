//SVG Stars Ratings Label
fix('.sticky.space-y-4.w-full span.text-xs.text-gray-800.underline', (element) => {
  let aeRating = $(element).prev('div.flex.items-center').find('div.h-full');
  let aeStarsElem = Array.from(aeRating);
  let aeStarsArr = []
  aeStarsElem.map((ele) => {
    aeStarsArr.push($(ele).attr('style'));
  });
  let aeStarNum = aeStarsArr.filter((num) => num === 'width: 100%;').length
  let aeStarHalfStyle = aeStarsArr.filter((num) => num !== 'width: 100%;')[0];
  let aeStarHalf = parseInt(aeStarHalfStyle.slice(aeStarHalfStyle.indexOf(': ') + 2 , aeStarHalfStyle.indexOf('%')))/100;
  let aeStars = aeStarNum + aeStarHalf
  $(element).prev('div.flex.items-center').label(`Rated ${aeStars} stars`);
});