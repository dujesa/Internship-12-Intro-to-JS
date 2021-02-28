function displayMessage(message) {
  alert(message);
}

function handleMenu(menuInput, storage) {
  switch (menuInput) {
    case "1":
      handleCompaniesSubmenu(storage);
      break;
    case "2":
      handleDevelopersSubmenu(storage);
      break;
    case "3":
      handleProgrammingLanguagesSubmenu(storage);
      break;
    default:
      displayMessage("Wrong menu input!");
  }
}

function handleDevelopersSubmenu(storage) {
  userMenuInput = getInputForMessage(`
  Please enter number for submenu of wanted action:
  1 - Add new developer
  2 - Edit existing developer
  3 - Delete existing developer
  4 - Display developers  
  [any other input] - Exit
  `);

  switch (userMenuInput) {
    case "1":
      handleCreateDeveloper(storage);
      break;
    case "2":
      handleUpdateDeveloper(storage);
      break;
    case "3":
      handleDeleteDeveloper(storage);
      break;
    case "4":
      //handleReadDevelopers(storage);
      break;
    default:
      displayMessage("Wrong menu input!");
  }
}

function handleProgrammingLanguagesSubmenu(storage) {
  userMenuInput = getInputForMessage(`
    Please enter number for submenu of wanted action:
    1 - Add new programming language
    2 - Edit existing programming language
    3 - Delete existing programming language
    4 - List all programming languages
    [any other input] - Exit
    `);

  switch (userMenuInput) {
    case "1":
      handleCreateProgrammingLanguage(storage);
      break;
    case "2":
      handleUpdateProgrammingLanguage(storage);
      break;
    case "3":
      handleDeleteProgrammingLanguage(storage);
      break;
    case "4":
      //handleReadProgrammingLanguage(storage);
      break;
    default:
      displayMessage("Wrong menu input!");
  }
}

function handleCompaniesSubmenu(storage) {
  userMenuInput = getInputForMessage(`
    Please enter number for submenu of wanted action:
    1 - Add new company
    2 - Edit existing company
    3 - Delete existing company
    4 - List all programming languages
    [any other input] - Exit
    `);

  switch (userMenuInput) {
    case "1":
      handleCreateCompany(storage);
      break;
    case "2":
      handleUpdateCompany(storage);
      break;
    case "3":
      handleDeleteCompany(storage);
      break;
    case "4":
      //handleReadCompany(storage);
      break;
    default:
      displayMessage("Wrong menu input!");
  }
}
