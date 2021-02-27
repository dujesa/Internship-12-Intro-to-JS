function handleCreateDeveloper(storage) {
  const newDeveloper = getDeveloperFromInput();
  storage.addDeveloper(newDeveloper);
}

function handleUpdateDeveloper(storage) {
  developerId = getInputForProperty("id");
  const legacyDeveloper = storage.getDevelopers()[developerId];

  if (!legacyDeveloper) {
    displayMessage(`Developer with id: ${developerId} was not found!`);

    return;
  }

  const newDeveloper = Object.assign({}, legacyDeveloper, {
    jobStatus: getInputForProperty("jobStatus"),
    company: getInputForProperty("company"),
    developerType: getInputForProperty("developerType"),
  });

  storage.updateDeveloper(developerId, newDeveloper);
}
