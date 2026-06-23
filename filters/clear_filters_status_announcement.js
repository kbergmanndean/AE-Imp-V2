//Clear filters status announcement
fix('.CollectionInner__Sidebar', (element) => {
  if ($(element).has('.boost-pfs-filter-tree')) {
  $(element).ATContext({before: ''});
  $(element).find('.ae-compliance-indent').attr({'role':'status','aria-live':'polite'});
  $(element).find('.boost-pfs-filter-tree').watch((ele)=> {
    $('.boost-pfs-filter-clear').on('click',(e)=> {
    let headingFilter = $(e.currentTarget).prevAll('.boost-pfs-filter-option-title-heading').text().trim().replace($(e.currentTarget).prevAll('.boost-pfs-filter-option-title-heading').find('.boost-pfs-filter-option-title-count').text().trim(),'');
    $(element).find('.ae-compliance-indent').text(`${headingFilter} Filters Cleared`);
    $(element).find('.ae-compliance-indent').focusNonInteractive();
    });
  });
  }
});
