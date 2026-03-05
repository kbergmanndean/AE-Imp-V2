//Duplicate links in carousel
//note: must define tyoe of link, HTMLAnchorElement
fix('a.rotoSlide', (element) => {
  let aeMap = new Map();
  document.querySelectorAll(`a.rotoSlide`).forEach((link) => {
    const href = link.href;
    if (!aeMap.has(href)) {
      aeMap.set(href, []);
    }
    aeMap.get(href).push(link);
  });
  aeMap.forEach((links, href) => {
    if (links.length > 1) {
      links.forEach((link, index) => {
        if (index > 0) {
          link.setAttribute('role', 'presentation');
          link.setAttribute('tabindex', '-1');
          link.setAttribute('aria-hidden', 'true');
        }
      });
    }
  });
});