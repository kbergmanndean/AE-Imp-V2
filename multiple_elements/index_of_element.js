//list of elements
const allLinks = Array.from(document.querySelectorAll('[href="/wine/mixed-wine-cases"]'));

fix('[href="/wine/mixed-wine-cases"]', (element) => {
  const indexNum = allLinks.indexOf(element);
  if (indexNum === 2) {
    $(element).hideFromAT();
  }
});