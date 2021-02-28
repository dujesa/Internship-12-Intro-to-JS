(function () {
  displayMessage("DEVELOPMENT BROWSER ENGINE");

  const storage = new Storage();
  seedData(storage);

  let userMenuInput = 0;

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

  devs.forEach((developerData) => {
    const { id, developer } = developerData;
    console.log(
      `{${id}}: ${developer.fullName} - ${developer.developerType} - ${developer.employmentStatus}`
    );
  });

  console.log("--LANGUAGES--");
  let languages = storage.getProgrammingLanguages();
  languages.forEach((languageData) => {
    const { id, programmingLanguage } = languageData;
    console.log(`{${id}} - ${programmingLanguage.name}`);
  });

  console.log("--COMPANIES--");
  let companies = storage.getCompanies();
  companies.forEach((companyData) => {
    const { id, company } = companyData;
    console.log(`{${id}} - ${company.name}`);
  });

  const foundCompanyData = companies.find((companyData) => 1 === companyData.id);
  console.log(foundCompanyData.id + ": " + foundCompanyData.company.name)

  alert(`Thank you for using our browsing engine!`);
})();
