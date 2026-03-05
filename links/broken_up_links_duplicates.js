//Duplicate links ( link broken up into three links)
fix('#BoardofEqualizationmeetingrecordings .accordion-content p', (element) => {
  if (element.querySelectorAll('a').length > 1) {
    const elementArr = Array.from(element.querySelectorAll('a'));
    const textArr = []
    elementArr.forEach((linkEl) => {
      if (elementArr.indexOf(linkEl) !== 0) {
        textArr.push(linkEl.textContent);
        setHideFromAT(linkEl);
      }
    });
    const context = textArr.toString();
    setATContext(element.querySelector('a'), { after: context });
  }
});