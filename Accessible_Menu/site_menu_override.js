//Site Menu Override with third level
.overrideMenuItems(() => {
    const menuItems = [];
    document
      .querySelectorAll('#nav .mega-menu > li')
      .forEach(function (navItem) {
        const subItems = [];
        const dropdownMenu = navItem.querySelector('ul.second-level-container');
        if (dropdownMenu) {
          dropdownMenu
            .querySelectorAll('li.second-level-item')
            .forEach(function (dropdownItem) {
              const thirdLevelItems = [];
              const thirdLevelMenu = dropdownItem.querySelector(
                'ul.third-level-container',
              );
              if (thirdLevelMenu) {
                thirdLevelMenu
                  .querySelectorAll('li.third-level-item a')
                  .forEach(function (thirdLevelItem) {
                    thirdLevelItems.push({
                      label: thirdLevelItem.textContent.trim(),
                      href: thirdLevelItem.getAttribute('href') || '#',
                      level: 3,
                      children: [],
                    });
                  });
              }
              if (dropdownItem.querySelector('a').textContent && dropdownItem.querySelector('a').textContent.trim()) {
                subItems.push({
                  label: dropdownItem.querySelector('a').textContent.trim(),
                  href: dropdownItem.querySelector('a').getAttribute('href') || '#',
                  level: 2,
                  children: thirdLevelItems,
                });
              }
            });
        }
        const mainLink = navItem.querySelector('a.nav-level-1');
        if (mainLink && mainLink.textContent && mainLink.textContent.trim()) {
          menuItems.push({
            label: mainLink.textContent.trim(),
            href: mainLink.getAttribute('href') || '#',
            level: 1,
            children: subItems,
          });
        }
      });

    return menuItems;
  });