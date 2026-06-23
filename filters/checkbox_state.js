//Checkbox state for filters based on applied filters tags when no updating attributes on checkboxes

fix('.checkbox-group label.checkbox-label', (element) => {
  $(element).role('checkbox').attr('tabindex', '0');
  $(element).simulateClickOnKeypress();

  //update checkbox state based on applied filters tags, as checkboxes themselves do not have any updating attributes
  $('#filter-tags').watch((ele) => {
    let filterCats = [];
    let filterTags = [];
    let makeList = [];
    //add applied filters and filter categories to arrays
    $('#filter-tags .filter-tag').each((i, ele) => {
      let filterTagAdded = $(ele).find('.ae-compliance-indent').text().trim();
      let filterTagged = $(ele).text().trim().replace(filterTagAdded, '');
      let filterCatText = filterTagged.split(':')[0].replaceAll(' ', '');
      let filterText = filterTagged.split(':')[1].replaceAll(' ', '');
      filterCats.push(filterCatText);
      filterTags.push(filterText);
    });
    //add list of makes to array, as some filter category names change to include applied make filters
    $('.filters-item-title-text')
      .filter((i, e) => $(e).text().trim() === 'Make')
      .closest('.filters-item')
      .find('label.checkbox-label')
      .each((i, e) => {
        makeList.push($(e).text().trim().split('(')[0].replaceAll(' ', ''));
      });
    //for each checkbox filter, save category name without make name
    $('.filters-item')
      .find('label.checkbox-label')
      .each((i, e) => {
        let category = $(e)
          .closest('.filters-item')
          .find('.filters-item-title-text')
          .text()
          .trim()
          .replaceAll(' ', '');
        makeList.forEach((make) => {
          if (category.includes(make)) {
            category = category.replace(make, '');
          }
        });
        //if filter name and category name are in arrays of applied filters, apply aria-checked true, otherwise false
        if (
          filterTags.includes(
            $(e).text().trim().split('(')[0].replaceAll(' ', ''),
          ) &&
          filterCats.includes(category)
        ) {
          $(e).attr('aria-checked', 'true');
        } else {
          $(e).attr('aria-checked', 'false');
        }
      });
  });
});