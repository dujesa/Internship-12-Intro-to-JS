(function () {
  displayMessage("DEVELOPMENT BROWSER ENGINE");
  let userMenuInput = 0;
  const storage = new Storage();

  do {
    userMenuInput = getInputForMessage(`
    Please enter number for submenu of wanted action:
    1 - Companies submenu
    2 - Developers submenu
    3 - Programming languages submenu  
    [any other input] - Exit
    `);

    handleMenu(userMenuInput, storage);
  } while (userMenuInput >= 1 && userMenuInput <= 3);

  //test storage
  let devs = storage.getDevelopers();
  devs.forEach((dev) => {
    console.log(
      `${dev.fullName} - ${dev.developerType} - ${dev.employmentStatus}`
    );
  });

  alert(`Thank you for using our browsing engine!`);
})();
