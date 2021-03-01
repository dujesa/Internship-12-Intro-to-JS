function handleCreateDeveloper(storage) {
  const newDeveloper = {
    fullName: sanitizeName(getInputForProperty("name")),
    employmentStatus: getEmploymentStatusFromInput(),
    company: getInputtedCompany(storage.getCompanies()),
    developerType: getDeveloperTypeFromInput(),
    programmingLanguages: getInputtedLanguages(
      storage.getProgrammingLanguages()
    ),
  };

  storage.addDeveloper(newDeveloper);
}

function handleUpdateDeveloper(storage) {
  developerId = getInputForProperty("id");
  const legacyDeveloperData = storage
    .getDevelopers()
    .find((developerData) => developerId == developerData.id);

  if (!legacyDeveloperData) {
    displayMessage(`Developer with id: ${developerId} was not found!`);

    return;
  }

  const { id, developer } = legacyDeveloperData;

  const newDeveloper = Object.assign(developer, {
    employmentStatus: getEmploymentStatusFromInput(),
    company: getInputForProperty("company"),
    developerType: getDeveloperTypeFromInput(),
  });

  storage.updateDeveloper(developerId, newDeveloper);
}

function handleDeleteDeveloper(storage) {
  developerId = getInputForProperty("id");
  const legacyDeveloperData = storage
    .getDevelopers()
    .find((developerData) => developerId == developerData.id);

  if (!legacyDeveloperData) {
    displayMessage(`Developer with id: ${developerId} was not found!`);

    return;
  }

  storage.deleteDeveloper(developerId);
}
