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
      handleReadDevelopers(storage);
      break;
    default:
      displayMessage("Wrong menu input!");
  }
}
