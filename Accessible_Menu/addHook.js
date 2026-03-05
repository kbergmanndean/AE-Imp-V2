//Accessible Menu addHook
(function() {
  if (!AudioEye.addHook) { return false; }
  AudioEye.addHook("site-menu", "overrideSearchAlgo", function (conf) {
    //Add Menu selector from product config here in the quotes, make sure they match exactly!
    if (conf.selector === "menuSelectorFromProductConfig") {
      return function () {
        let all_items = [];
        //Selector for common container of 1st level menu item & it's submenu container as well
        $ae("menuSelectorFromProductConfig > li.nav-item").each(function () {
          let firstLevel = [];
          //Selector for 2nd level menu item container here 
          $ae(this).find('> div.dropdown-menu').each(function () {
            let secondLevel = [];
            //Selector for 3rd level menu item container here
            $ae(this).find('ul.fsNavLevel3 > li').each(function () {
              let thirdLevel = [];
              //Selector for 3rd level anchor tags/interactive elements
              secondLevel.push({elem: $ae(this).find('> a.nav-link'), items: thirdLevel});
            });
            //Selector for 2nd level anchor tags/interactive elements
            firstLevel.push({elem: $ae(this).find('> a.nav-link'), items: secondLevel});
          });
          //Selector for 1st level anchor tags/interactive elements
          all_items.push({elem: $ae(this).find('> a.nav-link'), items: firstLevel});
        });
        return all_items;
      };
    }
  });
})();