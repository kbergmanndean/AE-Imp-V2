//link context for Lazy loading list card page 
fix('.dealer-card-listing', (element) => {
  $(element).watch((ele)=> {
    $(ele).find('.btn.css-1y3uf2u.e1uau9z02').each((i, el) => {
      $(el).watch((btn)=> {
        let carContext = $(btn).closest('[data-testid="details"]').find('h2').text().trim();
        $(btn).find('span.css-1j7t8yr.e1uau9z01').ATContext({after:`from ${carContext}`});
        $(btn).closest('[data-cy="primaryBtn"]').prev('[data-cy="secondaryBtn"]').find('a.css-5ial6j.e1uau9z02 span.css-1jgb67y.e1uau9z01').ATContext({after: `: ${carContext}`});
      }); 
    });
  });
});