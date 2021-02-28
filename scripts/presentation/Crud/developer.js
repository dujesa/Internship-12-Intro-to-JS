function handleCreateDeveloper(storage) {
  const newDeveloper = {
    fullName: sanitizeName(getInputForProperty("name")),
    employmentStatus: getEmploymentStatusFromInput(),
    company: getInputForProperty("company"),
    developerType: getDeveloperTypeFromInput(),
    programmingLanguages: getInputForProperty("programmingLanguages"),
  };

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
    employmentStatus: getEmploymentStatusFromInput(),
    company: getInputForProperty("company"),
    developerType: getDeveloperTypeFromInput(),
  });

  storage.updateDeveloper(developerId, newDeveloper);
}
