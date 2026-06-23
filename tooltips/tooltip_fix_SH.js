//tooltip fix (SH)
fix('#keepMeSignedInCheckbox .gc-icon-info', (element) => {
    const enter = new MouseEvent("mouseover", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  const leave = new MouseEvent("mouseout", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  $(element)
    .button()
    .off('focus')
    .off('blur')
    .on('focus', function () { this.dispatchEvent(enter); })
    .on('blur', function () { this.dispatchEvent(leave); })
    .on('keydown', function (e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        this.dispatchEvent(leave);
      }
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        this.dispatchEvent(enter);
      }
    });
});