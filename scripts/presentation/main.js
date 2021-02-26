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

    if (userMenuInput < 1 || userMenuInput > 3) break;

    let developer = getDeveloperFromInput();
    storage.addDeveloper(developer);
  } while (userMenuInput >= 1 && userMenuInput <= 3);

  //test storage
  let languages = storage.getDevelopers();
  languages.forEach((dev) => {
    console.log(`${dev.fullName} - ${dev.developerType} - ${dev.jobStatus}`);
  });

  alert(`Thank you for using our browsing engine!`);
})();
