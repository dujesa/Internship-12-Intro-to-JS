(function () {
  alert("DEVELOPMENT BROWSER ENGINE");
  let userMenuInput = 0;

  do {
    userMenuInput = prompt(`
    Please enter number for submenu of wanted action:
    1 - Companies submenu
    2 - Developers submenu
    3 - Programming languages submenu  
    [any other input] - Exit
    `);
  
    getDeveloperFromInput();

  } while(userMenuInput >= 1 && userMenuInput <= 3);
  
  alert(`Thank you for using our browsing engine!`)
})();
