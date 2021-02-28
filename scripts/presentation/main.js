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
  console.log("--DEVS--");
  let devs = storage.getDevelopers();
  devs.forEach((dev) => {
    console.log(
      `${dev.fullName} - ${dev.developerType} - ${dev.employmentStatus}`
    );
  });
  console.log("--LANGUAGES--");
  let languages = storage.getProgrammingLanguages();
  languages.forEach((language) => {
    console.log(`${language.name}`);
  });
  console.log("--COMPANIES--");
  let companies = storage.getCompanies();
  companies.forEach((company) => {
    console.log(`${company.name}`);
  });

  alert(`Thank you for using our browsing engine!`);
})();
